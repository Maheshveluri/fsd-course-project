function statusClass(status) {
  return status.toLowerCase().replaceAll(' ', '-')
}

export default function FacultyCard({ faculty, onStatusClick }) {
  const isUnavailable = faculty.currentStatus !== 'Available'

  return (
    <article className="faculty-card">
      <div className="faculty-card__topline">
        <span className={`status-dot status-dot--${statusClass(faculty.currentStatus)}`} />
        <span className="faculty-id">{faculty.facultyId}</span>
        {faculty.facultyCode && <span className="faculty-id">{faculty.facultyCode}</span>}
      </div>
      <h3>{faculty.name}</h3>
      <p className="department">{faculty.currentDepartment || faculty.department}</p>
      <p className="faculty-meta">Teaching: {faculty.teachingDepartment || faculty.department}</p>
      {faculty.area && <p className="faculty-meta">Area: {faculty.area}</p>}
      {faculty.specialization && <p className="faculty-meta">Specialization: {faculty.specialization}</p>}
      {faculty.qualification && <p className="faculty-meta">Qualification: {faculty.qualification}</p>}
      {faculty.officialRole && <p className="faculty-meta">Role: {faculty.officialRole}</p>}
      <p className="faculty-meta">{faculty.phone || 'Phone not added'}</p>
      {faculty.mainPhone && <p className="faculty-meta">Office: {faculty.mainPhone}</p>}
      {faculty.office && <p className="faculty-meta">Desk: {faculty.office}</p>}
      <p className="faculty-meta">{faculty.email || 'Email not added'}</p>
      {faculty.alternateEmail && <p className="faculty-meta">Alternate email: {faculty.alternateEmail}</p>}
      <p className="faculty-meta faculty-meta--muted">{faculty.designation || 'Faculty'}</p>

      <button type="button" className="status-button" onClick={(event) => {
        event.stopPropagation()
        onStatusClick?.(faculty)
      }}>
        Current Status
      </button>

      <dl className="faculty-details">
        <div>
          <dt>Status</dt>
          <dd className={`status-text status-text--${statusClass(faculty.currentStatus)}`}>
            {faculty.currentStatus}
          </dd>
        </div>
        <div>
          <dt>Location</dt>
          <dd>{faculty.currentLocation || 'Not specified'}</dd>
        </div>
        {isUnavailable && (
          <div>
            <dt>Reason</dt>
            <dd>{faculty.reason || 'No reason provided'}</dd>
          </div>
        )}
      </dl>
    </article>
  )
}
