import { useEffect, useState } from 'react'
import {
  createFaculty,
  clearMyAvailability,
  updateFacultyLocation,
  updateFacultyReason,
  updateFacultyStatus,
  importTimetableWorkbook,
  getTimetableImportHistory,
  updateMyTimetable
} from '../services/facultyApi.js'

const statuses = ['Available', 'In Class', 'College Work', 'Meeting', 'Absent']
const departments = ['CSE', 'CSM', 'CSN', 'CSO']
const hours = Array.from({ length: 24 }, (_, index) => index + 1)
const minutes = Array.from({ length: 60 }, (_, index) => index + 1)
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function TimePicker({ label, value, onChange, disabled = false }) {
  const [hourText = '09', minuteText = '30'] = (value || '09:30').split(':')
  const selectedHour = Number(hourText) || 24
  const selectedMinute = Number(minuteText) || 60

  function updateTime(hour, minute) {
    // The UI counts 1–24 and 1–60; 24 and 60 represent 00 on a clock.
    const clockHour = hour === 24 ? 0 : hour
    const clockMinute = minute === 60 ? 0 : minute
    onChange(`${String(clockHour).padStart(2, '0')}:${String(clockMinute).padStart(2, '0')}`)
  }

  return (
    <label>
      {label}
      <span className="time-picker">
        <select aria-label={`${label} hour`} value={selectedHour} onChange={(event) => updateTime(Number(event.target.value), selectedMinute)} required disabled={disabled}>
          {hours.map((hour) => <option key={hour} value={hour}>{hour}</option>)}
        </select>
        <span>:</span>
        <select aria-label={`${label} minute`} value={selectedMinute} onChange={(event) => updateTime(selectedHour, Number(event.target.value))} required disabled={disabled}>
          {minutes.map((minute) => <option key={minute} value={minute}>{String(minute).padStart(2, '0')}</option>)}
        </select>
      </span>
    </label>
  )
}

function scheduleSlotMinutes(value) {
  const [hourText, minuteText] = value.split(':')
  let hour = Number(hourText)
  if (hour >= 1 && hour <= 4) hour += 12
  return hour * 60 + Number(minuteText)
}

function scheduleTimeInput(value) {
  const [hourText, minuteText] = value.split(':')
  let hour = Number(hourText)
  if (hour >= 1 && hour <= 4) hour += 12
  return `${String(hour).padStart(2, '0')}:${minuteText}`
}

export default function FacultyStatusUpdate({ faculty, facultyUser, adminUser, onFacultyUpdated, onFacultyCreated, onTimetableImported }) {
  const [selectedId, setSelectedId] = useState('')
  const [status, setStatus] = useState('Available')
  const [availabilityDate, setAvailabilityDate] = useState(() => new Date().toISOString().split('T')[0])
  const [availabilityStartTime, setAvailabilityStartTime] = useState('09:30')
  const [availabilityEndTime, setAvailabilityEndTime] = useState('10:30')
  const [location, setLocation] = useState('')
  const [reason, setReason] = useState('')
  const [saving, setSaving] = useState(false)
  const [editingAvailability, setEditingAvailability] = useState(false)
  const [message, setMessage] = useState('')
  const [newFaculty, setNewFaculty] = useState({
    facultyId: '',
    name: '',
    phone: '',
    designation: 'Assistant Professor',
    department: 'CSE'
  })
  const [creating, setCreating] = useState(false)
  const [workbook, setWorkbook] = useState(null)
  const [importing, setImporting] = useState(false)
  const [importMessage, setImportMessage] = useState('')
  const [importError, setImportError] = useState('')
  const [importedEntries, setImportedEntries] = useState([])
  const [importHistory, setImportHistory] = useState([])
  const [historyError, setHistoryError] = useState('')
  const [fileInputKey, setFileInputKey] = useState(0)
  const [timetableEntries, setTimetableEntries] = useState([])
  const [timetableDay, setTimetableDay] = useState('Monday')
  const [timetableDraft, setTimetableDraft] = useState({ startTime: '09:30', endTime: '10:30', subject: '', semester: '', section: '', block: '', room: '', sharedFaculty: '' })
  const [editingTimetableIndex, setEditingTimetableIndex] = useState(null)
  const [timetableSaving, setTimetableSaving] = useState(false)
  const [timetableMessage, setTimetableMessage] = useState('')

  const selectedFaculty = faculty.find((member) => member._id === selectedId)
  const isAdmin = Boolean(adminUser)
  const isFacultyOnlyUser = Boolean(facultyUser) && !isAdmin
  const hasAvailabilityUpdate = Boolean(selectedFaculty?.availabilityDate && selectedFaculty?.availabilityTimeSlot)
  const availabilityEditable = !isFacultyOnlyUser || editingAvailability

  useEffect(() => {
    if (!adminUser) return
    getTimetableImportHistory()
      .then((history) => { setImportHistory(history); setHistoryError('') })
      .catch((error) => setHistoryError(error.message))
  }, [adminUser])

  useEffect(() => {
    const semesters = new Set(importHistory[0]?.semestersReplaced || [])
    if (!semesters.size) return
    setImportedEntries(faculty.flatMap((member) => (member.timetable || [])
      .filter((entry) => semesters.has(entry.semester))
      .map((entry) => ({ facultyId: member.facultyId, ...entry }))))
  }, [faculty, importHistory])

  useEffect(() => {
    setTimetableEntries(selectedFaculty?.timetable || [])
    setEditingTimetableIndex(null)
    setTimetableMessage('')
  }, [selectedId])

  useEffect(() => {
    if (facultyUser) {
      const matchedFaculty = faculty.find((member) => member.facultyId === facultyUser.facultyId || member._id === facultyUser._id)
      if (matchedFaculty) {
        setSelectedId(matchedFaculty._id)
        return
      }
    }

    if (adminUser && faculty.length && !selectedId) {
      setSelectedId(faculty[0]._id)
      return
    }

    if (faculty.length && !selectedId) setSelectedId(faculty[0]._id)
  }, [faculty, selectedId, facultyUser, adminUser])

  useEffect(() => {
    if (!selectedFaculty) return
    setStatus(selectedFaculty.currentStatus)
    setAvailabilityDate(selectedFaculty.availabilityDate || new Date().toISOString().split('T')[0])
    setAvailabilityStartTime(selectedFaculty.availabilityStartTime || '09:30')
    setAvailabilityEndTime(selectedFaculty.availabilityEndTime || '10:30')
    setLocation(selectedFaculty.currentLocation)
    setReason(selectedFaculty.reason)
    setEditingAvailability(!(selectedFaculty.availabilityDate && selectedFaculty.availabilityTimeSlot))
    setMessage('')
  }, [selectedId])

  async function handleSubmit(event) {
    event.preventDefault()
    if (!selectedFaculty) return
    if (availabilityStartTime >= availabilityEndTime) {
      setMessage('End time must be after start time.')
      return
    }

    setSaving(true)
    setMessage('')
    try {
      const [updatedStatus] = await Promise.all([
        updateFacultyStatus(selectedId, status, availabilityDate, availabilityStartTime, availabilityEndTime),
        updateFacultyLocation(selectedId, location),
        updateFacultyReason(selectedId, reason)
      ])
      onFacultyUpdated({ ...selectedFaculty, ...updatedStatus, currentLocation: location, reason })
      setEditingAvailability(false)
      setMessage('Faculty information updated.')
    } catch (error) {
      setMessage(error.message)
    } finally {
      setSaving(false)
    }
  }

  function cancelAvailabilityEdit() {
    if (!selectedFaculty) return
    setStatus(selectedFaculty.currentStatus)
    setAvailabilityDate(selectedFaculty.availabilityDate || new Date().toISOString().split('T')[0])
    setAvailabilityStartTime(selectedFaculty.availabilityStartTime || '09:30')
    setAvailabilityEndTime(selectedFaculty.availabilityEndTime || '10:30')
    setLocation(selectedFaculty.currentLocation || '')
    setReason(selectedFaculty.reason || '')
    setEditingAvailability(false)
    setMessage('Changes discarded.')
  }

  async function deleteAvailabilityUpdate() {
    if (!facultyUser?.token || !window.confirm('Delete your availability update? Your status will return to Available.')) return
    setSaving(true)
    setMessage('')
    try {
      const updatedFaculty = await clearMyAvailability(facultyUser.token)
      onFacultyUpdated(updatedFaculty)
      setStatus('Available')
      setAvailabilityDate(new Date().toISOString().split('T')[0])
      setAvailabilityStartTime('09:30')
      setAvailabilityEndTime('10:30')
      setReason('')
      setEditingAvailability(true)
      setMessage('Availability update deleted.')
    } catch (error) {
      setMessage(error.message)
    } finally {
      setSaving(false)
    }
  }

  async function handleCreateFaculty(event) {
    event.preventDefault()
    setCreating(true)
    setMessage('')

    try {
      const createdFaculty = await createFaculty(newFaculty)
      onFacultyCreated(createdFaculty)
      setNewFaculty({ facultyId: '', name: '', phone: '', designation: 'Assistant Professor', department: 'CSE' })
      setMessage('New faculty member added.')
    } catch (error) {
      setMessage(error.message)
    } finally {
      setCreating(false)
    }
  }

  function resetTimetableDraft() {
    setTimetableDraft({ startTime: '09:30', endTime: '10:30', subject: '', semester: '', section: '', block: '', room: '', sharedFaculty: '' })
    setEditingTimetableIndex(null)
  }

  function editTimetableEntry(index, entry) {
    const [startTime, endTime] = entry.slot.split(' - ')
    setTimetableDay(entry.day)
    setTimetableDraft({
      startTime: scheduleTimeInput(startTime),
      endTime: scheduleTimeInput(endTime),
      subject: entry.subject || '',
      semester: entry.semester || '',
      section: entry.section || '',
      block: entry.block || '',
      room: entry.room || '',
      sharedFaculty: entry.sharedFaculty || ''
    })
    setEditingTimetableIndex(index)
    setTimetableMessage('')
  }

  function handleTimetableEntrySubmit(event) {
    event.preventDefault()
    if (!timetableDraft.subject.trim() || !timetableDraft.semester.trim() || !timetableDraft.section.trim()) {
      setTimetableMessage('Enter subject, semester, and section to add a timetable period.')
      return
    }
    if (timetableDraft.startTime >= timetableDraft.endTime) {
      setTimetableMessage('End time must be after start time.')
      return
    }

    const entry = {
      day: timetableDay,
      slot: `${timetableDraft.startTime} - ${timetableDraft.endTime}`,
      subject: timetableDraft.subject.trim(),
      semester: timetableDraft.semester.trim().toUpperCase(),
      section: timetableDraft.section.trim().toUpperCase(),
      block: timetableDraft.block.trim(),
      room: timetableDraft.room.trim(),
      sharedFaculty: timetableDraft.sharedFaculty.trim()
    }
    setTimetableEntries((current) => {
      if (editingTimetableIndex === null) return [...current, entry]
      return current.map((currentEntry, index) => index === editingTimetableIndex ? entry : currentEntry)
    })
    resetTimetableDraft()
    setTimetableMessage('Period added to your pending timetable. Select Save timetable to publish it.')
  }

  async function saveMyTimetable() {
    if (!facultyUser?.token) {
      setTimetableMessage('Please log in again to save your timetable.')
      return
    }
    setTimetableSaving(true)
    setTimetableMessage('')
    try {
      const updatedFaculty = await updateMyTimetable(timetableEntries, facultyUser.token)
      setTimetableEntries(updatedFaculty.timetable)
      onFacultyUpdated(updatedFaculty)
      setTimetableMessage('Your timetable is saved. Students can now see these periods.')
    } catch (error) {
      setTimetableMessage(error.message)
    } finally {
      setTimetableSaving(false)
    }
  }

  async function handleTimetableImport(event) {
    event.preventDefault()
    if (!workbook) return
    if (workbook.size > 8 * 1024 * 1024) {
      setImportError('Please choose a workbook smaller than 8 MB.')
      return
    }

    setImporting(true)
    setImportError('')
    setImportMessage('')
    setImportedEntries([])
    try {
      const fileBase64 = await new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => resolve(String(reader.result).split(',')[1])
        reader.onerror = () => reject(new Error('Could not read the selected file.'))
        reader.readAsDataURL(workbook)
      })
      const result = await importTimetableWorkbook(workbook.name, fileBase64)
      const refreshedFaculty = await onTimetableImported?.()
      if (refreshedFaculty) {
        const importedSemesters = new Set(result.semestersReplaced)
        setImportedEntries(refreshedFaculty.flatMap((member) => (member.timetable || [])
          .filter((entry) => importedSemesters.has(entry.semester))
          .map((entry) => ({ facultyId: member.facultyId, ...entry }))))
      }
      setImportMessage(`${result.rowsImported} rows imported for ${result.facultyWithImportedRows} faculty member(s). Semester(s) replaced across faculty timetables: ${result.semestersReplaced.join(', ')}.`)
      setWorkbook(null)
      event.target.reset()
      setFileInputKey((current) => current + 1)
      setImportHistory(await getTimetableImportHistory())
    } catch (error) {
      setImportError(error.message)
    } finally {
      setImporting(false)
    }
  }

  return (
    <section className="page-section update-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Faculty view</p>
          <h2>Update your availability</h2>
          <p className="section-description">Keep your students in the loop with one quick update.</p>
        </div>
      </div>

      {faculty.length === 0 ? (
        <p className="message">Create a faculty member before updating availability.</p>
      ) : (
        <form className="status-form" onSubmit={handleSubmit}>
          <label>
            Faculty member
              <select
              value={selectedId}
              onChange={(event) => setSelectedId(event.target.value)}
              disabled={isFacultyOnlyUser}
            >
              {faculty
                .filter((member) => !isFacultyOnlyUser || member.facultyId === facultyUser?.facultyId || member._id === facultyUser?._id)
                .map((member) => <option key={member._id} value={member._id}>{member.name}</option>)}
            </select>
          </label>
          <div className="form-row">
            <label>
              Current status
              <select value={status} onChange={(event) => setStatus(event.target.value)} disabled={!availabilityEditable}>
                {statuses.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <label>
              Current location
              <input value={location} onChange={(event) => setLocation(event.target.value)} placeholder="e.g. Room 204" disabled={!availabilityEditable} />
            </label>
          </div>
          <div className="form-row">
            <label>
              Update date
              <input type="date" value={availabilityDate} onChange={(event) => setAvailabilityDate(event.target.value)} required disabled={!availabilityEditable} />
            </label>
            <TimePicker label="Start time" value={availabilityStartTime} onChange={setAvailabilityStartTime} disabled={!availabilityEditable} />
            <TimePicker label="End time" value={availabilityEndTime} onChange={setAvailabilityEndTime} disabled={!availabilityEditable} />
          </div>
          <label>
            Reason
            <textarea value={reason} onChange={(event) => setReason(event.target.value)} placeholder="Add a short reason when needed" rows="4" disabled={!availabilityEditable} />
          </label>
          <div className="form-footer">
            <button type="submit" disabled={saving || !availabilityEditable}>{saving ? 'Saving...' : 'Save update'}</button>
            <button
              type="button"
              className="secondary-action"
              disabled={saving || !isFacultyOnlyUser || !hasAvailabilityUpdate || availabilityEditable}
              onClick={() => { setEditingAvailability(true); setMessage('Edit your update, then save it.') }}
            >Edit</button>
            <button
              type="button"
              className="danger-action"
              disabled={saving || !isFacultyOnlyUser || !hasAvailabilityUpdate || availabilityEditable}
              onClick={deleteAvailabilityUpdate}
            >Remove</button>
            {isFacultyOnlyUser && hasAvailabilityUpdate && availabilityEditable && (
              <button type="button" className="secondary-action" disabled={saving} onClick={cancelAvailabilityEdit}>Cancel</button>
            )}
            {message && <span className={message.includes('updated') || message.includes('deleted') ? 'success-message' : 'message--error'}>{message}</span>}
          </div>
        </form>
      )}

      {isFacultyOnlyUser && selectedFaculty && (
        <section className="create-faculty-form faculty-timetable-editor">
          <p className="eyebrow">Your teaching schedule</p>
          <h3>Manage my timetable</h3>
          <p className="section-description">Your faculty ID is fixed to your login. Add or edit your own weekly teaching periods.</p>
          <label className="locked-faculty-id">
            Faculty ID
            <input value={selectedFaculty.facultyId} readOnly />
          </label>
          <a className="timetable-download-button" href="/api/faculty/timetable/export.xlsx" download="faculty-timetable-current.xlsx">
            Download updated timetable Excel
          </a>
          <div className="weekday-flow" role="tablist" aria-label="Choose timetable day">
            {weekdays.map((day) => (
              <button type="button" role="tab" aria-selected={timetableDay === day} className={timetableDay === day ? 'weekday-flow__day weekday-flow__day--active' : 'weekday-flow__day'} key={day} onClick={() => { setTimetableDay(day); resetTimetableDraft() }}>
                {day.slice(0, 3)}
              </button>
            ))}
          </div>
          <form className="faculty-period-form" onSubmit={handleTimetableEntrySubmit}>
            <div className="form-row">
              <TimePicker label="Start time" value={timetableDraft.startTime} onChange={(startTime) => setTimetableDraft((current) => ({ ...current, startTime }))} />
              <TimePicker label="End time" value={timetableDraft.endTime} onChange={(endTime) => setTimetableDraft((current) => ({ ...current, endTime }))} />
            </div>
            <div className="form-row">
              <label>Subject<input value={timetableDraft.subject} onChange={(event) => setTimetableDraft({ ...timetableDraft, subject: event.target.value })} placeholder="e.g. Data Structures" required /></label>
              <label>Semester<input value={timetableDraft.semester} onChange={(event) => setTimetableDraft({ ...timetableDraft, semester: event.target.value })} placeholder="e.g. V" required /></label>
            </div>
            <div className="form-row">
              <label>Section<input value={timetableDraft.section} onChange={(event) => setTimetableDraft({ ...timetableDraft, section: event.target.value })} placeholder="e.g. 5CSE1" required /></label>
              <label>Teaching block<input value={timetableDraft.block} onChange={(event) => setTimetableDraft({ ...timetableDraft, block: event.target.value })} placeholder="e.g. B-IV" /></label>
            </div>
            <div className="form-row">
              <label>Room<input value={timetableDraft.room} onChange={(event) => setTimetableDraft({ ...timetableDraft, room: event.target.value })} placeholder="e.g. 214" /></label>
              <label>Shared faculty<input value={timetableDraft.sharedFaculty} onChange={(event) => setTimetableDraft({ ...timetableDraft, sharedFaculty: event.target.value })} placeholder="Optional" /></label>
            </div>
            <div className="form-footer">
              <button type="submit">{editingTimetableIndex === null ? 'Add period' : 'Update period'}</button>
              {editingTimetableIndex !== null && <button type="button" className="secondary-action" onClick={resetTimetableDraft}>Cancel edit</button>}
            </div>
          </form>
          <h4>{timetableDay} periods</h4>
          <div className="faculty-period-list">
            {timetableEntries
              .map((entry, index) => ({ entry, index }))
              .filter(({ entry }) => entry.day === timetableDay)
              .sort((first, second) => scheduleSlotMinutes(first.entry.slot.split(' - ')[0]) - scheduleSlotMinutes(second.entry.slot.split(' - ')[0]))
              .map(({ entry, index }) => (
                <div className="faculty-period-row" key={`${entry.semester}-${entry.section}-${entry.slot}-${index}`}>
                  <span><strong>{entry.slot} · {entry.subject}</strong><small>{entry.semester} Semester · {entry.section} · Teaching block: {entry.block || 'Not specified'}{entry.room ? ` · Room ${entry.room}` : ''}</small></span>
                  <span className="faculty-period-actions">
                    <button type="button" onClick={() => editTimetableEntry(index, entry)}>Edit</button>
                    <button type="button" onClick={() => { setTimetableEntries((current) => current.filter((_, currentIndex) => currentIndex !== index)); setTimetableMessage('Period removed from your pending timetable. Select Save timetable to publish the change.') }}>Remove</button>
                  </span>
                </div>
              ))}
            {timetableEntries.every((entry) => entry.day !== timetableDay) && <p className="faculty-meta">No periods added for {timetableDay} yet.</p>}
          </div>
          <div className="form-footer faculty-timetable-save">
            <button type="button" disabled={timetableSaving} onClick={saveMyTimetable}>{timetableSaving ? 'Saving timetable...' : 'Save timetable'}</button>
            {timetableMessage && <span className={timetableMessage.includes('saved') ? 'success-message' : 'message--error'}>{timetableMessage}</span>}
          </div>
        </section>
      )}

      {adminUser && (
        <section className="create-faculty-form timetable-import-panel">
          <p className="eyebrow">Semester automation</p>
          <h3>Import timetable from Excel</h3>
          <p className="section-description">Upload one workbook. Each row must be one faculty period. Rows are matched using facultyId.</p>
          <a className="timetable-download-button" href="/faculty-timetable-import.xlsx" download="faculty-timetable-import.xlsx">
            Download sample timetable Excel
          </a>
          <div className="import-instructions">
            <strong>Required column headers</strong>
            <code>facultyId · day · slot · subject · semester · section · block · sharedFaculty · room</code>
            <span>Example row: FAC-CSE-047 · Monday · 09:30 - 10:30 · FSD · V · 5CSE1 · B-IV · (blank) · 014</span>
            <span>Use a weekday name and a 24-hour time range in slot, such as 09:30 - 10:30 or 14:30 - 16:30. Leave sharedFaculty blank when it does not apply.</span>
            <span>Only timetable entries for semester values in this workbook are replaced. Faculty name, email, department, availability, and other semesters are preserved.</span>
          </div>
          <form onSubmit={handleTimetableImport}>
            <label className="import-file-label">
              Excel workbook (.xlsx or .xls, up to 8 MB)
              <input key={fileInputKey} type="file" accept=".xlsx,.xls" required onChange={(event) => { setWorkbook(event.target.files?.[0] || null); setImportError(''); setImportMessage('') }} />
            </label>
            {workbook && (
              <div className="selected-workbook-row">
                <p className="import-file-name">Selected: {workbook.name}</p>
                <button type="button" className="remove-selected-workbook" onClick={() => { setWorkbook(null); setFileInputKey((current) => current + 1) }}>Remove selected file</button>
              </div>
            )}
            <button type="submit" disabled={!workbook || importing}>{importing ? 'Importing timetable...' : 'Validate and import timetable'}</button>
            {importError && <p className="message message--error" role="alert">{importError}</p>}
            {importMessage && <p className="success-message" role="status">{importMessage}</p>}
          </form>
          {importedEntries.length > 0 && (
            <section className="imported-timetable-preview" aria-label="Imported timetable saved in the database">
              <h4>Saved timetable data · {importedEntries.length} periods</h4>
              <div className="imported-timetable-scroll">
                <table>
                  <thead>
                    <tr><th>Faculty ID</th><th>Day</th><th>Slot</th><th>Subject</th><th>Semester</th><th>Section</th><th>Block</th><th>Shared faculty</th><th>Room</th></tr>
                  </thead>
                  <tbody>
                    {importedEntries.map((entry, index) => (
                      <tr key={`${entry.facultyId}-${entry.semester}-${entry.section}-${entry.day}-${entry.slot}-${index}`}>
                        <td>{entry.facultyId}</td><td>{entry.day}</td><td>{entry.slot}</td><td>{entry.subject}</td><td>{entry.semester}</td><td>{entry.section}</td><td>{entry.block}</td><td>{entry.sharedFaculty}</td><td>{entry.room}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
          <section className="upload-history" aria-label="Previously uploaded timetable workbooks">
            <h4>Uploaded Excel files</h4>
            <p className="faculty-meta">Saved in MongoDB. Choosing or removing a file above does not remove these uploads.</p>
            {historyError && <p className="message message--error">{historyError}</p>}
            {!historyError && importHistory.length === 0 && <p className="faculty-meta">No Excel files uploaded yet.</p>}
            {importHistory.length > 0 && (
              <ol className="upload-history-list">
                {importHistory.map((record) => (
                  <li key={record._id}>
                    <span><strong>{record.fileName}</strong><small>{record.rowsImported} rows · {record.semestersReplaced.join(', ')} · {new Date(record.createdAt).toLocaleString()}</small></span>
                    <a href={`/api/faculty/timetable/imports/${record._id}/download`}>Download</a>
                  </li>
                ))}
              </ol>
            )}
          </section>
        </section>
      )}

      {adminUser && (
        <form className="create-faculty-form" onSubmit={handleCreateFaculty}>
          <p className="eyebrow">Admin</p>
          <h3>Add faculty member</h3>
          <div className="form-row">
            <label>
              Faculty ID
              <input value={newFaculty.facultyId} onChange={(event) => setNewFaculty({ ...newFaculty, facultyId: event.target.value })} placeholder="FAC-CSE-011" required />
            </label>
            <label>
              Full name
              <input value={newFaculty.name} onChange={(event) => setNewFaculty({ ...newFaculty, name: event.target.value })} placeholder="Faculty name" required />
            </label>
          </div>
          <div className="form-row">
            <label>
              Phone number
              <input value={newFaculty.phone} onChange={(event) => setNewFaculty({ ...newFaculty, phone: event.target.value })} placeholder="9876543220" required />
            </label>
            <label>
              Designation
              <input value={newFaculty.designation} onChange={(event) => setNewFaculty({ ...newFaculty, designation: event.target.value })} required />
            </label>
          </div>
          <label>
            Department
            <select value={newFaculty.department} onChange={(event) => setNewFaculty({ ...newFaculty, department: event.target.value })}>
              {departments.map((department) => <option key={department}>{department}</option>)}
            </select>
          </label>
          <button type="submit" disabled={creating}>{creating ? 'Adding...' : 'Add faculty'}</button>
        </form>
      )}
    </section>
  )
}
