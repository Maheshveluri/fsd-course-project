import Faculty from './models/Faculty.js'
import { sampleFaculty } from './data/sampleFaculty.js'

export async function seedFaculty() {
  await Faculty.bulkWrite(sampleFaculty.map((faculty) => ({
    updateOne: {
      filter: { facultyId: faculty.facultyId },
      update: {
        $set: {
          facultyId: String(faculty.facultyId).trim().toUpperCase(),
          facultyCode: faculty.facultyCode || '',
          name: faculty.name,
          password: faculty.password || 'faculty123',
          phone: faculty.phone,
          email: faculty.email || '',
          designation: faculty.designation,
          area: faculty.area || '',
          specialization: faculty.specialization || '',
          qualification: faculty.qualification || '',
          officialRole: faculty.officialRole || '',
          alternateEmail: faculty.alternateEmail || '',
          mainPhone: faculty.mainPhone || '',
          office: faculty.office || '',
          department: faculty.department,
          currentDepartment: faculty.currentDepartment || '',
          teachingDepartment: faculty.teachingDepartment || faculty.department,
          currentStatus: faculty.currentStatus,
          currentLocation: faculty.currentLocation,
          reason: faculty.reason || '',
          availabilityDate: faculty.availabilityDate || '',
          availabilityTimeSlot: faculty.availabilityTimeSlot || '',
          availabilityStartTime: faculty.availabilityStartTime || '',
          availabilityEndTime: faculty.availabilityEndTime || '',
          timetable: faculty.timetable
        }
      },
      upsert: true
    }
  })))
  console.log(`Loaded ${sampleFaculty.length} CSE sample faculty members`)
}