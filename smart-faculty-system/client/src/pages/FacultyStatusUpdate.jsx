import { useEffect, useState } from 'react'
import {
  createFaculty,
  updateFacultyLocation,
  updateFacultyReason,
  updateFacultyStatus
} from '../services/facultyApi.js'

const statuses = ['Available', 'In Class', 'College Work', 'Meeting', 'Absent']
const departments = ['CSE', 'CSM', 'CSN', 'CSO']
const suggestedTimes = ['09:30', '10:30', '11:30', '12:30', '01:30', '02:30', '03:30', '04:30']

export default function FacultyStatusUpdate({ faculty, facultyUser, adminUser, onFacultyUpdated, onFacultyCreated }) {
  const [selectedId, setSelectedId] = useState('')
  const [status, setStatus] = useState('Available')
  const [availabilityDate, setAvailabilityDate] = useState(() => new Date().toISOString().split('T')[0])
  const [availabilityStartTime, setAvailabilityStartTime] = useState('09:30')
  const [availabilityEndTime, setAvailabilityEndTime] = useState('10:30')
  const [location, setLocation] = useState('')
  const [reason, setReason] = useState('')
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [newFaculty, setNewFaculty] = useState({
    facultyId: '',
    name: '',
    phone: '',
    designation: 'Assistant Professor',
    department: 'CSE'
  })
  const [creating, setCreating] = useState(false)

  const selectedFaculty = faculty.find((member) => member._id === selectedId)
  const isAdmin = Boolean(adminUser)
  const isFacultyOnlyUser = Boolean(facultyUser) && !isAdmin

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
    setMessage('')
  }, [selectedFaculty])

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
      setMessage('Faculty information updated.')
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
              <select value={status} onChange={(event) => setStatus(event.target.value)}>
                {statuses.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <label>
              Current location
              <input value={location} onChange={(event) => setLocation(event.target.value)} placeholder="e.g. Room 204" />
            </label>
          </div>
          <div className="form-row">
            <label>
              Update date
              <input type="date" value={availabilityDate} onChange={(event) => setAvailabilityDate(event.target.value)} required />
            </label>
            <label>
              Start time
              <input type="time" list="suggested-times" value={availabilityStartTime} onChange={(event) => setAvailabilityStartTime(event.target.value)} required />
            </label>
            <label>
              End time
              <input type="time" list="suggested-times" value={availabilityEndTime} onChange={(event) => setAvailabilityEndTime(event.target.value)} required />
            </label>
          </div>
          <datalist id="suggested-times">
            {suggestedTimes.map((time) => <option key={time} value={time} />)}
          </datalist>
          <label>
            Reason
            <textarea value={reason} onChange={(event) => setReason(event.target.value)} placeholder="Add a short reason when needed" rows="4" />
          </label>
          <div className="form-footer">
            <button type="submit" disabled={saving}>{saving ? 'Saving...' : 'Save update'}</button>
            {message && <span className={message.includes('updated') ? 'success-message' : 'message--error'}>{message}</span>}
          </div>
        </form>
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
