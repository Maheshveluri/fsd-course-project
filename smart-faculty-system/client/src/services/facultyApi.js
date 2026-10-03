async function request(url, options = {}) {
  const response = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  })

  const text = await response.text()
  const data = text ? JSON.parse(text) : {}

  if (!response.ok) {
    throw new Error(data.message || 'Request failed')
  }

  return data
}

export function getFaculty() {
  return request('/api/faculty')
}

export function registerStudent({ rollNo, password }) {
  return request('/api/student/register', {
    method: 'POST',
    body: JSON.stringify({ rollNo, password })
  })
}

export function loginStudent({ rollNo, password }) {
  return request('/api/student/login', {
    method: 'POST',
    body: JSON.stringify({ rollNo, password })
  })
}

export function registerFaculty({ facultyId, password }) {
  return request('/api/faculty/register', {
    method: 'POST',
    body: JSON.stringify({ facultyId, password })
  })
}

export function loginFaculty({ facultyId, password }) {
  return request('/api/faculty/login', {
    method: 'POST',
    body: JSON.stringify({ facultyId, password })
  })
}

export function registerAdmin({ username, password }) {
  return request('/api/faculty/admin/register', {
    method: 'POST',
    body: JSON.stringify({ username, password })
  })
}

export function loginAdmin({ username, password }) {
  return request('/api/faculty/admin/login', {
    method: 'POST',
    body: JSON.stringify({ username, password })
  })
}

export function createFaculty(faculty) {
  return request('/api/faculty', {
    method: 'POST',
    body: JSON.stringify(faculty)
  })
}

export function updateFacultyStatus(id, currentStatus, availabilityDate, availabilityStartTime, availabilityEndTime) {
  return request(`/api/faculty/${id}/status`, {
    method: 'PUT',
    body: JSON.stringify({ currentStatus, availabilityDate, availabilityStartTime, availabilityEndTime })
  })
}

export function updateFacultyLocation(id, currentLocation) {
  return request(`/api/faculty/${id}/location`, {
    method: 'PUT',
    body: JSON.stringify({ currentLocation })
  })
}

export function updateFacultyReason(id, reason) {
  return request(`/api/faculty/${id}/reason`, {
    method: 'PUT',
    body: JSON.stringify({ reason })
  })
}

export function updateFacultyTimetable(id, timetable) {
  return request(`/api/faculty/${id}/timetable`, {
    method: 'PUT',
    body: JSON.stringify({ timetable })
  })
}
