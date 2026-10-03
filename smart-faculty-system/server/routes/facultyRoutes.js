import { Router } from 'express'
import {
  createFaculty,
  getFaculty,
  getFacultyById,
  loginAdmin,
  loginFaculty,
  registerAdmin,
  registerFaculty,
  updateLocation,
  updateReason,
  updateStatus,
  updateTimetable
} from '../controllers/facultyController.js'

const router = Router()

router.get('/', getFaculty)
router.get('/search', getFaculty)
router.get('/:id', getFacultyById)
router.post('/register', registerFaculty)
router.post('/login', loginFaculty)
router.post('/admin/register', registerAdmin)
router.post('/admin/login', loginAdmin)
router.post('/', createFaculty)
router.put('/:id/status', updateStatus)
router.put('/:id/location', updateLocation)
router.put('/:id/reason', updateReason)
router.put('/:id/timetable', updateTimetable)

export default router
