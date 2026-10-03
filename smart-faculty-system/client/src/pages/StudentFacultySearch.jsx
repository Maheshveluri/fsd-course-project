import { useEffect, useMemo, useState } from 'react'

const departmentOptions = ['CSE', 'CSM', 'CSN', 'CSO']
const timeOptions = [
  '09:30 - 10:30',
  '10:30 - 11:30',
  '11:30 - 12:30',
  '12:30 - 01:30',
  '01:30 - 02:30',
  '02:30 - 03:30',
  '03:30 - 04:30'
]

function getToday() {
  return new Date().toISOString().split('T')[0]
}

function getCurrentTimeSlot() {
  const currentMinutes = new Date().getHours() * 60 + new Date().getMinutes()
  const slotRanges = [
    [570, 630, timeOptions[0]],
    [630, 690, timeOptions[1]],
    [690, 750, timeOptions[2]],
    [750, 810, timeOptions[3]],
    [810, 870, timeOptions[4]],
    [870, 930, timeOptions[5]],
    [930, 990, timeOptions[6]]
  ]

  return slotRanges.find(([start, end]) => currentMinutes >= start && currentMinutes < end)?.[2] || timeOptions[0]
}

function getSlotStartMinutes(slot) {
  const time = slot.split(' - ')[0]
  const [hours, minutes] = time.split(':').map(Number)
  const normalizedHours = hours >= 1 && hours <= 4 ? hours + 12 : hours

  return normalizedHours * 60 + minutes
}

function getSlotEndMinutes(slot) {
  const time = slot.split(' - ')[1]
  const [hours, minutes] = time.split(':').map(Number)
  const normalizedHours = hours >= 1 && hours <= 4 ? hours + 12 : hours

  return normalizedHours * 60 + minutes
}

export default function StudentFacultySearch({ faculty, loading, error, student }) {
  const [selectedDepartment, setSelectedDepartment] = useState('CSE')
  const [selectedDate, setSelectedDate] = useState(getToday)
  const [selectedTime, setSelectedTime] = useState(getCurrentTimeSlot)
  const [selectedClass, setSelectedClass] = useState('')
  const [statusLookupMode, setStatusLookupMode] = useState('class')
  const [selectedProfileId, setSelectedProfileId] = useState('')
  const [profileSearch, setProfileSearch] = useState('')

  useEffect(() => {
    const timer = setInterval(() => {
      const today = getToday()
      if (selectedDate === today) {
        setSelectedTime(getCurrentTimeSlot())
      }
    }, 60000)

    return () => clearInterval(timer)
  }, [selectedDate])

  const selectedDay = new Date(`${selectedDate}T12:00:00`).toLocaleDateString('en-US', { weekday: 'long' })

  const classOptions = useMemo(() => {
    const classes = new Set()
    faculty.forEach((member) => member.timetable?.forEach((slot) => {
      if (slot.semester && slot.section) classes.add(`${slot.semester}|${slot.section}`)
    }))
    return Array.from(classes).sort((first, second) => first.localeCompare(second, undefined, { numeric: true }))
  }, [faculty])

  const activeClass = selectedClass || (classOptions.includes('V|5CSE1') ? 'V|5CSE1' : classOptions[0] || '')
  const [activeSemester, activeSection] = activeClass.split('|')

  const departmentFaculty = useMemo(() => {
    if (!selectedDepartment) return faculty
    return faculty.filter(({ department }) => department && department.toUpperCase() === selectedDepartment.toUpperCase())
  }, [faculty, selectedDepartment])

  const scheduledFaculty = useMemo(() => {
    const isLunchBreak = selectedTime === '01:30 - 02:30'
    const selectedStart = getSlotStartMinutes(selectedTime)
    const selectedEnd = getSlotEndMinutes(selectedTime)
    return isLunchBreak ? [] : departmentFaculty.filter((member) =>
      member.timetable?.some((slot) =>
        slot.day === selectedDay &&
        slot.semester === activeSemester &&
        slot.section === activeSection &&
        getSlotStartMinutes(slot.slot) < selectedEnd &&
        getSlotEndMinutes(slot.slot) > selectedStart
      )
    )
  }, [activeSection, activeSemester, departmentFaculty, selectedDay, selectedTime])

  const facultyStatusProfiles = useMemo(() => faculty.map((profile) => {
    const selectedStart = getSlotStartMinutes(selectedTime)
    const selectedEnd = getSlotEndMinutes(selectedTime)
    const manualStart = profile.availabilityStartTime && profile.availabilityEndTime
      ? getSlotStartMinutes(`${profile.availabilityStartTime} - ${profile.availabilityEndTime}`)
      : 0
    const manualEnd = profile.availabilityStartTime && profile.availabilityEndTime
      ? getSlotEndMinutes(`${profile.availabilityStartTime} - ${profile.availabilityEndTime}`)
      : 0
    const manualStatusApplies = profile.availabilityDate === selectedDate && manualStart < selectedEnd && manualEnd > selectedStart

    if (manualStatusApplies) {
      return { ...profile, status: profile.currentStatus, source: 'Faculty update', slot: null }
    }

    const slot = profile.timetable?.find((entry) =>
      entry.day === selectedDay &&
      getSlotStartMinutes(entry.slot) < selectedEnd &&
      getSlotEndMinutes(entry.slot) > selectedStart
    )

    return slot
      ? { ...profile, status: 'In Class', source: 'Scheduled class', slot }
      : { ...profile, status: 'Available', source: 'No class scheduled', slot: null }
  }), [faculty, selectedDate, selectedDay, selectedTime])

  const selectedProfile = facultyStatusProfiles.find((profile) => profile._id === selectedProfileId) || facultyStatusProfiles[0] || null
  const visibleFacultyProfiles = facultyStatusProfiles.filter((profile) =>
    `${profile.name} ${profile.facultyId} ${profile.department} ${profile.designation}`.toLowerCase().includes(profileSearch.trim().toLowerCase())
  )

  const classDays = activeClass.startsWith('III|3CSE') || activeClass.startsWith('V|5CSE')
    ? ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const classSchedule = useMemo(() => {
    if (!activeClass) return []
    const [semester, section] = activeClass.split('|')
    const dayOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const entries = faculty.flatMap((member) => member.timetable
      ?.filter((slot) => slot.semester === semester && slot.section === section)
      .map((slot) => ({ ...slot, facultyName: member.name, facultyId: member.facultyId })) || [])
      .sort((first, second) => {
        const dayDifference = dayOrder.indexOf(first.day) - dayOrder.indexOf(second.day)
        return dayDifference || getSlotStartMinutes(first.slot) - getSlotStartMinutes(second.slot)
      })

    const groupedEntries = entries.reduce((groups, entry) => {
      const key = JSON.stringify([entry.day, entry.slot, entry.semester, entry.section, entry.subject, entry.block, entry.room])
      const groupedEntry = groups.get(key)

      if (groupedEntry) {
        if (!groupedEntry.facultyIds.includes(entry.facultyId)) groupedEntry.facultyIds.push(entry.facultyId)
        if (!groupedEntry.facultyNames.includes(entry.facultyName)) groupedEntry.facultyNames.push(entry.facultyName)
      } else {
        groups.set(key, { ...entry, facultyIds: [entry.facultyId], facultyNames: [entry.facultyName] })
      }

      return groups
    }, new Map())

    const mergedEntries = Array.from(groupedEntries.values()).map((entry) => ({
      ...entry,
      facultyId: entry.facultyIds.sort().join('|'),
      facultyName: entry.facultyNames.join(' / ')
    })).reduce((currentEntries, entry) => {
      const previousEntry = currentEntries.at(-1)
      const sameLab = entry.subject.toLowerCase().includes('lab') && previousEntry &&
        previousEntry.subject === entry.subject &&
        previousEntry.facultyId === entry.facultyId &&
        previousEntry.section === entry.section &&
        previousEntry.day === entry.day &&
        getSlotEndMinutes(previousEntry.slot) === getSlotStartMinutes(entry.slot)

      if (sameLab) {
        previousEntry.slot = `${previousEntry.slot.split(' - ')[0]} - ${entry.slot.split(' - ')[1]}`
        return currentEntries
      }

      return [...currentEntries, { ...entry }]
    }, [])

    return mergedEntries
  }, [activeClass, faculty])

  const classTimes = timeOptions

  return (
    <section className="page-section student-layout">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Student view</p>
          <h2>Find your faculty</h2>
          <p className="section-description">Hi {student.rollNo}, choose a department and check faculty availability before you visit.</p>
        </div>
        <div className="student-summary">
          <span className="student-pill">{student.rollNo}</span>
        </div>
      </div>

      <div className="department-filter">
        <label className="search-box department-box">
          <span>Select department</span>
          <input
            list="department-options"
            value={selectedDepartment}
              onChange={(event) => setSelectedDepartment(event.target.value.toUpperCase())}
            placeholder="CSE"
          />
        </label>
        <datalist id="department-options">
          {departmentOptions.map((department) => (
            <option key={department} value={department} />
          ))}
        </datalist>
      </div>

      <section className="class-timetable-panel">
        <div className="class-timetable-heading">
          <div>
            <p className="eyebrow">New view</p>
            <h3>Class-wise timetable</h3>
            <p className="section-description">
              {{
                'III|3CSE1': 'Academic Year 2026–27 | III Semester | 3CSE1 | Classroom B-V-202 | Class Teacher: Smt. G. Ashmitha (GA)',
                'III|3CSE2': 'Academic Year 2026–27 | III Semester | 3CSE2 | Classroom B-V-204 | Class Teacher: Smt. M. Preethi (MP)',
                'III|3CSE3': 'Academic Year 2026–27 | III Semester | 3CSE3 | Classroom B-V-302 | Class Teacher: Smt. R. Radhika (RK)',
                'III|3CSE4': 'Academic Year 2026–27 | III Semester | 3CSE4 | Classroom B-V-304 | Class Teacher: Sri. R. Rajesh (RR)',
                'III|3CSE5': 'Academic Year 2026–27 | III Semester | 3CSE5 | Classroom B-IV-213 | Class Teacher: Dr. T. Ranjith Kumar (TRK)',
                'III|3CSE6': 'Academic Year 2026–27 | III Semester | 3CSE6 | Classroom B-IV-214 | Class Teacher: Sri K. Ravi (KR)',
                'V|5CSE1': 'Academic Year 2026–27 | V Semester | 5CSE1 | Classroom B-IV-014 | Class Teacher: Dr. D. Sudha (DS)',
                'V|5CSE2': 'Academic Year 2026–27 | V Semester | 5CSE2 | Classroom B-IV-126 | Class Teacher: Dr. G. Sridhar (GS)',
                'V|5CSE3': 'Academic Year 2026–27 | V Semester | 5CSE3 | Classroom B-IV-127 | Class Teacher: Dr. Md. Sharfuddin Waseem (W)',
                'V|5CSE4': 'Academic Year 2026–27 | V Semester | 5CSE4 | Classroom B-IV-215 | Class Teacher: Dr. N. Gayatri (NG)',
                'V|5CSE5': 'Academic Year 2026–27 | V Semester | 5CSE5 | Classroom B-IV-214 | Class Teacher: Smt. V. Gouthami (VG)'
              }[activeClass] || 'See every subject and faculty assigned to one class.'}
            </p>
          </div>
          <label className="search-box class-selector">
            <span>Select semester and section</span>
            <select value={activeClass} onChange={(event) => setSelectedClass(event.target.value)}>
              {classOptions.map((className) => {
                const [semester, section] = className.split('|')
                return <option key={className} value={className}>{semester} Semester - {section}</option>
              })}
            </select>
          </label>
        </div>
        {classSchedule.length > 0 ? (
          <div className="class-timetable-scroll">
            <table className="class-timetable-table">
              <thead>
                <tr>
                  <th>Day</th>
                  {classTimes.map((time) => <th key={time}>{time}</th>)}
                </tr>
              </thead>
              <tbody>
                {classDays.map((day) => (
                  <tr key={day}>
                    <th>{day}</th>
                    {classTimes.map((time) => {
                      const currentStart = getSlotStartMinutes(time)
                      if (time === '01:30 - 02:30') {
                        return <td className="lunch-break-cell" key={`${time}-${day}`}>Lunch Break</td>
                      }

                      const dayEntries = classSchedule.filter((slot) => slot.day === day)
                      const coveredByPreviousClass = dayEntries.some((slot) => {
                        const slotStart = getSlotStartMinutes(slot.slot)
                        return slotStart < currentStart && getSlotEndMinutes(slot.slot) > currentStart
                      })
                      if (coveredByPreviousClass) return null

                      const entries = dayEntries.filter((slot) => getSlotStartMinutes(slot.slot) === currentStart)
                      const longestDuration = Math.max(1, ...entries.map((slot) => Math.ceil((getSlotEndMinutes(slot.slot) - currentStart) / 60)))
                      const cellEnd = currentStart + longestDuration * 60
                      const visibleEntries = dayEntries.filter((slot) => {
                        const slotStart = getSlotStartMinutes(slot.slot)
                        const fallsInsideCell = slotStart >= currentStart && slotStart < cellEnd
                        const hiddenAtCellBoundary = slotStart === cellEnd && dayEntries.some((otherSlot) =>
                          otherSlot !== slot &&
                          getSlotStartMinutes(otherSlot.slot) < slotStart &&
                          getSlotEndMinutes(otherSlot.slot) > slotStart
                        )
                        return fallsInsideCell || hiddenAtCellBoundary
                      })
                      return (
                        <td key={`${time}-${day}`} colSpan={entries.length > 0 ? longestDuration : 1}>
                          {visibleEntries.map((slot, index) => (
                            <div className="class-timetable-cell" key={`${slot.facultyId}-${index}`}>
                              <strong>{slot.subject}</strong>
                              <span>{slot.facultyName}</span>
                              {getSlotStartMinutes(slot.slot) !== currentStart && <small>{slot.slot}</small>}
                              <small>{slot.section} | {slot.block}{slot.room ? ` | Room ${slot.room}` : ''}</small>
                            </div>
                          ))}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="message">No class timetable is available yet.</p>
        )}
      </section>

      <div className="schedule-filter">
        <label className="search-box">
          <span>Select date</span>
          <input type="date" value={selectedDate} onChange={(event) => setSelectedDate(event.target.value)} />
        </label>
        <label className="search-box">
          <span>Select time</span>
          <select value={selectedTime} onChange={(event) => setSelectedTime(event.target.value)}>
            {timeOptions.map((time) => <option key={time}>{time}</option>)}
          </select>
        </label>
        <p className="schedule-selection">{selectedDay}, {selectedTime}</p>
      </div>

      <div className="auth-toggle" role="tablist" aria-label="Faculty status view">
        <button type="button" role="tab" aria-selected={statusLookupMode === 'class'} className={statusLookupMode === 'class' ? 'toggle-button toggle-button--active' : 'toggle-button'} onClick={() => setStatusLookupMode('class')}>
          Selected class
        </button>
        <button type="button" role="tab" aria-selected={statusLookupMode === 'all'} className={statusLookupMode === 'all' ? 'toggle-button toggle-button--active' : 'toggle-button'} onClick={() => setStatusLookupMode('all')}>
          All faculty
        </button>
      </div>

      {loading && <p className="message">Loading faculty...</p>}
      {error && <p className="message message--error">{error}</p>}

      {!loading && !error && statusLookupMode === 'class' && (
        <>
          {scheduledFaculty.length === 0 && (
            <p className="message">{selectedTime === '01:30 - 02:30' ? 'Lunch break: no faculty availability during this time.' : `No faculty from ${activeSection} is scheduled for ${selectedDay}, ${selectedTime}.`}</p>
          )}
          {scheduledFaculty.length > 0 && (
            <section className="faculty-status-list" aria-label="Faculty current status for selected class">
              <h3>Current status · {activeSection}</h3>
              {scheduledFaculty.map((member) => (
                <div className="detail-row" key={member.facultyId}>
                  <span>{member.name}</span>
                  <strong className={`status-text status-text--${member.currentStatus.toLowerCase().replaceAll(' ', '-')}`}>
                    {member.currentStatus}
                  </strong>
                </div>
              ))}
            </section>
          )}
        </>
      )}

      {!loading && !error && statusLookupMode === 'all' && (
        <section className="faculty-status-list" aria-label="Selected faculty status">
          <label className="search-box faculty-directory-search">
            <span>Find faculty profile</span>
            <input value={profileSearch} onChange={(event) => setProfileSearch(event.target.value)} placeholder="Search name, ID, or department" />
          </label>
          <div className="faculty-directory" role="list" aria-label="Faculty profiles">
            {visibleFacultyProfiles.map((profile) => (
              <button
                type="button"
                role="listitem"
                aria-pressed={profile._id === selectedProfile?._id}
                className={profile._id === selectedProfile?._id ? 'faculty-directory-row faculty-directory-row--selected' : 'faculty-directory-row'}
                key={profile._id}
                onClick={() => setSelectedProfileId(profile._id)}
              >
                <span className="faculty-directory-identity">
                  <strong>{profile.name}</strong>
                  <small>{profile.facultyId} · {profile.designation || 'Faculty'} · {profile.department}</small>
                </span>
                <strong className={`status-text status-text--${profile.status.toLowerCase().replaceAll(' ', '-')}`}>
                  {profile.status === 'In Class' ? 'Busy (In Class)' : profile.status === 'Available' ? 'Free (Available)' : profile.status}
                </strong>
              </button>
            ))}
            {visibleFacultyProfiles.length === 0 && <p className="message">No faculty profiles match this search.</p>}
          </div>
          {selectedProfile && (
            <>
              <h3>{selectedProfile.name}</h3>
              <p className="faculty-meta">{selectedProfile.facultyId} · {selectedProfile.designation || 'Faculty'} · {selectedProfile.department}</p>
              <div className="detail-row">
                <span>Status · {selectedDay}, {selectedTime}</span>
                <strong className={`status-text status-text--${selectedProfile.status.toLowerCase().replaceAll(' ', '-')}`}>
                  {selectedProfile.status === 'In Class' ? 'Busy (In Class)' : selectedProfile.status === 'Available' ? 'Free (Available)' : selectedProfile.status}
                </strong>
              </div>
              <p className="faculty-meta">{selectedProfile.source}</p>
              {selectedProfile.slot && (
                <p className="faculty-meta">
                  {selectedProfile.slot.subject}{selectedProfile.slot.section ? ` · ${selectedProfile.slot.section}` : ''}{selectedProfile.slot.room ? ` · Room ${selectedProfile.slot.room}` : ''}
                </p>
              )}
              {selectedProfile.currentLocation && <p className="faculty-meta">Location: {selectedProfile.currentLocation}</p>}
            </>
          )}
        </section>
      )}
    </section>
  )
}
