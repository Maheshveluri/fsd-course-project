import Admin from '../models/Admin.js'
import Faculty, { statuses } from '../models/Faculty.js'

function normalizeFacultyId(facultyId) {
  if (!facultyId) return null
  return String(facultyId).trim().toUpperCase()
}

function handleControllerError(error, response) {
  if (error.code === 11000) {
    return response.status(409).json({ message: 'facultyId already exists' })
  }

  if (error.name === 'ValidationError') {
    return response.status(400).json({ message: error.message })
  }

  return response.status(500).json({ message: 'Server error' })
}

export async function registerFaculty(request, response) {
  try {
    const { facultyId, password } = request.body || {}
    const normalizedFacultyId = normalizeFacultyId(facultyId)

    if (!normalizedFacultyId) {
      return response.status(400).json({ message: 'Faculty ID is required' })
    }

    if (!password || String(password).trim().length < 4) {
      return response.status(400).json({ message: 'Password must be at least 4 characters long' })
    }

    const existingFaculty = await Faculty.findOne({ facultyId: normalizedFacultyId })
    if (existingFaculty) {
      return response.status(409).json({ message: 'Faculty already exists' })
    }

    const faculty = await Faculty.create({
      facultyId: normalizedFacultyId,
      password: String(password).trim(),
      name: normalizedFacultyId,
      department: 'CSE',
      phone: '',
      designation: 'Faculty'
    })

    return response.status(201).json({
      _id: faculty._id,
      facultyId: faculty.facultyId,
      name: faculty.name,
      department: faculty.department
    })
  } catch (error) {
    return handleControllerError(error, response)
  }
}

export async function loginFaculty(request, response) {
  try {
    const { facultyId, password } = request.body || {}
    const normalizedFacultyId = normalizeFacultyId(facultyId)

    if (!normalizedFacultyId) {
      return response.status(400).json({ message: 'Faculty ID is required' })
    }

    if (!password || String(password).trim().length < 4) {
      return response.status(400).json({ message: 'Password is required' })
    }

    const faculty = await Faculty.findOne({
      facultyId: normalizedFacultyId,
      password: String(password).trim()
    })

    if (!faculty) {
      return response.status(401).json({ message: 'Invalid faculty ID or password' })
    }

    return response.json({
      _id: faculty._id,
      facultyId: faculty.facultyId,
      name: faculty.name,
      department: faculty.department,
      role: 'faculty'
    })
  } catch (error) {
    return handleControllerError(error, response)
  }
}

export async function registerAdmin(request, response) {
  try {
    const { username, password } = request.body || {}
    const normalizedUsername = String(username || '').trim().toLowerCase()

    if (!normalizedUsername) {
      return response.status(400).json({ message: 'Username is required' })
    }

    if (!password || String(password).trim().length < 4) {
      return response.status(400).json({ message: 'Password must be at least 4 characters long' })
    }

    const existingAdmin = await Admin.findOne({ username: normalizedUsername })
    if (existingAdmin) {
      return response.status(409).json({ message: 'Admin already exists' })
    }

    const admin = await Admin.create({
      username: normalizedUsername,
      password: String(password).trim()
    })

    return response.status(201).json({
      _id: admin._id,
      username: admin.username,
      role: 'admin'
    })
  } catch (error) {
    return handleControllerError(error, response)
  }
}

export async function loginAdmin(request, response) {
  try {
    const { username, password } = request.body || {}
    const normalizedUsername = String(username || '').trim().toLowerCase()

    if (!normalizedUsername) {
      return response.status(400).json({ message: 'Username is required' })
    }

    if (!password || String(password).trim().length < 4) {
      return response.status(400).json({ message: 'Password is required' })
    }

    const admin = await Admin.findOne({
      username: normalizedUsername,
      password: String(password).trim()
    })

    if (!admin) {
      return response.status(401).json({ message: 'Invalid admin username or password' })
    }

    return response.json({
      _id: admin._id,
      username: admin.username,
      role: 'admin'
    })
  } catch (error) {
    return handleControllerError(error, response)
  }
}

export async function getFaculty(request, response) {
  try {
    const today = new Date().toISOString().split('T')[0]
    const currentTime = new Date().toTimeString().slice(0, 5)
    const faculty = (await Faculty.find().sort({ name: 1 })).map((member) => {
      const updateExpired = member.availabilityDate === today &&
        member.availabilityEndTime && currentTime >= member.availabilityEndTime

      if (updateExpired) member.currentStatus = 'Available'
      return member
    })
    return response.json(faculty)
  } catch (error) {
    return handleControllerError(error, response)
  }
}

export async function getFacultyById(request, response) {
  try {
    const faculty = await Faculty.findById(request.params.id)

    if (!faculty) {
      return response.status(404).json({ message: 'Faculty member not found' })
    }

    response.json(faculty)
  } catch (error) {
    handleControllerError(error, response)
  }
}

export async function createFaculty(request, response) {
  try {
    const faculty = await Faculty.create(request.body)
    response.status(201).json(faculty)
  } catch (error) {
    handleControllerError(error, response)
  }
}

async function updateFacultyField(request, response, field) {
  try {
    const faculty = await Faculty.findByIdAndUpdate(
      request.params.id,
      { [field]: request.body[field] },
      { new: true, runValidators: true }
    )

    if (!faculty) {
      return response.status(404).json({ message: 'Faculty member not found' })
    }

    response.json(faculty)
  } catch (error) {
    handleControllerError(error, response)
  }
}

export function updateStatus(request, response) {
  if (!statuses.includes(request.body.currentStatus)) {
    return response.status(400).json({ message: 'Invalid faculty status' })
  }

  const { availabilityDate, availabilityStartTime, availabilityEndTime } = request.body
  if (!availabilityDate || !availabilityStartTime || !availabilityEndTime) {
    return response.status(400).json({ message: 'Date, start time, and end time are required' })
  }

  if (availabilityStartTime >= availabilityEndTime) {
    return response.status(400).json({ message: 'End time must be after start time' })
  }

  return Faculty.findByIdAndUpdate(
    request.params.id,
    {
      currentStatus: request.body.currentStatus,
      availabilityDate,
      availabilityTimeSlot: `${availabilityStartTime} - ${availabilityEndTime}`,
      availabilityStartTime,
      availabilityEndTime
    },
    { new: true, runValidators: true }
  )
    .then((faculty) => {
      if (!faculty) return response.status(404).json({ message: 'Faculty member not found' })
      return response.json(faculty)
    })
    .catch((error) => handleControllerError(error, response))
}

export function updateLocation(request, response) {
  return updateFacultyField(request, response, 'currentLocation')
}

export function updateReason(request, response) {
  return updateFacultyField(request, response, 'reason')
}

export function updateTimetable(request, response) {
  const { timetable } = request.body || {}

  if (!Array.isArray(timetable)) {
    return response.status(400).json({ message: 'Timetable must be an array' })
  }

  return Faculty.findByIdAndUpdate(
    request.params.id,
    { timetable },
    { new: true, runValidators: true }
  )
    .then((faculty) => {
      if (!faculty) return response.status(404).json({ message: 'Faculty member not found' })
      return response.json(faculty)
    })
    .catch((error) => handleControllerError(error, response))
}
