const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
const timeSlots = [
  '09:30 - 10:30',
  '10:30 - 11:30',
  '11:30 - 12:30',
  '12:30 - 01:30',
  '01:30 - 02:30',
  '02:30 - 03:30',
  '03:30 - 04:30'
]

const mixedSchedule = (entries) => weekdays.flatMap((day) => timeSlots.map((slot) => {
  const match = entries.find((entry) => entry.day === day && entry.slot === slot)

  return {
    day,
    slot,
    subject: match?.subject || 'Open / Self Study',
    semester: match?.semester || '',
    section: match?.section || '',
    block: match?.block || '',
    room: match?.room || 'CSE Block'
  }
}))

export const sampleFaculty = [
  {
    facultyId: 'FAC-CSE-001',
    password: 'faculty123',
    name: 'Dr. T. Raghunatha Rao (TRR)',
    phone: '9963311704',
    email: 'trr.mh@kitsw.ac.in',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Mathematics & Humanities',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'CSE Block B-IV, Room 326',
    timetable: [
      { day: 'Monday', slot: '10:30 - 11:30', semester: 'I', section: '1CSE1', subject: 'DCODE', block: 'B-IV', room: '326' },
      { day: 'Monday', slot: '12:30 - 01:30', semester: 'I', section: '1CSE1', subject: 'DCODE (T)', block: 'B-IV', room: '326' },
      { day: 'Wednesday', slot: '12:30 - 01:30', semester: 'I', section: '1CSE1', subject: 'DCODE', block: 'B-IV', room: '326' },
      { day: 'Thursday', slot: '12:30 - 01:30', semester: 'I', section: '1CSE1', subject: 'DCODE', block: 'B-IV', room: '326' }
    ]
  },
  {
    facultyId: 'FAC-CSE-002',
    password: 'faculty123',
    name: 'Dr. N. Maramu (NM)',
    phone: '7396935717',
    email: 'nmr.pss@kitsw.ac.in',
    designation: 'Assistant Professor in Physics',
    department: 'CSE',
    currentDepartment: 'Physical Sciences - Physics',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 326',
    timetable: [
      { day: 'Tuesday', slot: '09:30 - 10:30', semester: 'I', section: '1CSE1', subject: 'EP – Engineering Physics', block: 'B-IV', room: '326' },
      { day: 'Tuesday', slot: '12:30 - 01:30', semester: 'I', section: '1CSE1', subject: 'EP (T) – Engineering Physics Tutorial', block: 'B-IV', room: '326' },
      { day: 'Wednesday', slot: '02:30 - 04:30', semester: 'I', section: '1CSE1', subject: 'EPL – Engineering Physics Lab', block: 'B-IV', room: '019' },
      { day: 'Thursday', slot: '11:30 - 12:30', semester: 'I', section: '1CSE1', subject: 'EP – Engineering Physics', block: 'B-IV', room: '326' },
      { day: 'Friday', slot: '12:30 - 01:30', semester: 'I', section: '1CSE1', subject: 'EP – Engineering Physics', block: 'B-IV', room: '326' }
    ]
  },
  {
    facultyId: 'FAC-CSE-003',
    password: 'faculty123',
    name: 'Dr. K. Rajendra Prasad (KRP)',
    phone: '6303115837',
    email: '',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Physical Sciences',
    teachingDepartment: 'CSE',
    area: 'Material Science / Polymer Physics',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 327',
    timetable: [
      { day: 'Monday', slot: '10:30 - 11:30', semester: 'I', section: '1CSE2', subject: 'EP', block: 'B-IV', room: '327' },
      { day: 'Monday', slot: '11:30 - 12:30', semester: 'I', section: '1CSE5', subject: 'EP Lab', block: 'B4', room: '019' },
      { day: 'Tuesday', slot: '02:30 - 03:30', semester: 'I', section: '1CSE2', subject: 'EP', block: 'B-IV', room: '327' },
      { day: 'Wednesday', slot: '10:30 - 11:30', semester: 'I', section: '1CSE2', subject: 'EP (T)', block: 'B-IV', room: '327' },
      { day: 'Thursday', slot: '09:30 - 11:30', semester: 'I', section: '1CSE2', subject: 'EP Lab', block: 'B4', room: '019' },
      { day: 'Friday', slot: '10:30 - 11:30', semester: 'I', section: '1CSE2', subject: 'EP', block: 'B-IV', room: '327' }
    ]
  },
  {
    facultyId: 'FAC-CSE-004',
    password: 'faculty123',
    name: 'Dr. K. Srinivas (KS)',
    phone: '7888150858',
    email: 'ks.pss@kitsw.ac.in',
    designation: 'Assistant Professor in Physics',
    department: 'CSE',
    currentDepartment: 'Physical Sciences',
    teachingDepartment: 'CSE',
    specialization: 'Nanotechnology, Spintronics and Computational Physics',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 329',
    timetable: [
      { day: 'Monday', slot: '11:30 - 12:30', semester: 'I', section: '1CSE5', subject: 'EP Lab', block: 'B4', room: '019' },
      { day: 'Monday', slot: '03:30 - 04:30', semester: 'I', section: '1CSE4', subject: 'EP', block: 'B-IV', room: '329' },
      { day: 'Tuesday', slot: '09:30 - 11:30', semester: 'I', section: '1CSE6', subject: 'EP Lab', block: 'B4', room: '019' },
      { day: 'Wednesday', slot: '11:30 - 12:30', semester: 'I', section: '1CSE4', subject: 'EP (T)', block: 'B-IV', room: '329' },
      { day: 'Thursday', slot: '11:30 - 01:30', semester: 'I', section: '1CSE4', subject: 'EP Lab', block: 'B4', room: '019' },
      { day: 'Thursday', slot: '03:30 - 04:30', semester: 'I', section: '1CSE4', subject: 'EP', block: 'B-IV', room: '329' },
      { day: 'Friday', slot: '09:30 - 10:30', semester: 'I', section: '1CSE4', subject: 'EP', block: 'B-IV', room: '329' }
    ]
  },
  {
    facultyId: 'FAC-CSE-005',
    password: 'faculty123',
    facultyCode: 'PSR',
    name: 'Dr. P. Srinivasa Rao (PSR)',
    phone: '9866574288',
    email: '',
    designation: 'Not specified',
    department: 'CSE',
    currentDepartment: 'Physical Sciences',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 321',
    timetable: [
      { day: 'Monday', slot: '11:30 - 01:30', semester: 'I', section: '1CSE5', subject: 'EP Lab', block: 'B4', room: '019, EP Lab' },
      { day: 'Tuesday', slot: '09:30 - 11:30', semester: 'I', section: '1CSE6', subject: 'EP Lab', block: 'B4', room: '019, EP Lab' },
      { day: 'Wednesday', slot: '02:30 - 03:30', semester: 'I', section: '1CSE5', subject: 'EP', block: 'B-IV', room: '321' },
      { day: 'Thursday', slot: '03:30 - 04:30', semester: 'I', section: '1CSE5', subject: 'EP', block: 'B-IV', room: '321' },
      { day: 'Friday', slot: '11:30 - 12:30', semester: 'I', section: '1CSE5', subject: 'EP (T)', block: 'B-IV', room: '321' },
      { day: 'Friday', slot: '03:30 - 04:30', semester: 'I', section: '1CSE5', subject: 'EP', block: 'B-IV', room: '321' }
    ]
  },
  {
    facultyId: 'FAC-CSE-006',
    password: 'faculty123',
    name: 'Dr. V. Prashanth Kumar (VPK)',
    phone: '8688291979',
    email: 'pv.pss@kitsw.ac.in',
    designation: 'Assistant Professor in Physics',
    department: 'CSE',
    currentDepartment: 'Physical Sciences',
    teachingDepartment: 'CSE',
    office: 'Room 229, Block IV, Physical Sciences',
    qualification: 'Ph.D. in Physics',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 326',
    timetable: [
      { day: 'Wednesday', slot: '02:30 - 04:30', semester: 'I', section: '1CSE1', subject: 'EPL – Engineering Physics Laboratory', block: 'B-IV', room: '019' },
      { day: 'Friday', slot: '02:30 - 04:30', semester: 'I', section: '1CSE3', subject: 'EPL – Engineering Physics Laboratory', block: 'B-IV', room: '019' }
    ]
  },
  {
    facultyId: 'FAC-CSE-007',
    password: 'faculty123',
    name: 'Prof. V. Rajagopal (VRG)',
    phone: '+91 9392114063',
    email: 'coe@kitsw.ac.in',
    designation: 'Professor',
    department: 'CSE',
    currentDepartment: 'Electrical & Electronics Engineering (EEE)',
    teachingDepartment: 'CSE',
    officialRole: 'Controller of Examinations',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 327',
    timetable: [
      { day: 'Monday', slot: '09:30 - 10:30', semester: 'I', section: '1CSE2', subject: 'BEEE', block: 'B-IV', room: '327' },
      { day: 'Monday', slot: '11:30 - 12:30', semester: 'I', section: '1CSE1', subject: 'BEEE', block: 'B-IV', room: '326' },
      { day: 'Tuesday', slot: '09:30 - 10:30', semester: 'I', section: '1CSE2', subject: 'BEEE', block: 'B-IV', room: '327' },
      { day: 'Tuesday', slot: '12:30 - 01:30', semester: 'I', section: '1CSE2', subject: 'BEEE (T)', block: 'B-IV', room: '327' },
      { day: 'Wednesday', slot: '10:30 - 11:30', semester: 'I', section: '1CSE1', subject: 'BEEE', block: 'B-IV', room: '326' },
      { day: 'Thursday', slot: '10:30 - 11:30', semester: 'I', section: '1CSE1', subject: 'BEEE', block: 'B-IV', room: '326' },
      { day: 'Thursday', slot: '02:30 - 04:30', semester: 'I', section: '1CSE1', subject: 'BEE Lab / BEEEL', block: 'B-IV', room: '015 - BEEE Lab', sharedFaculty: 'VRG / DRC / ASW' },
      { day: 'Friday', slot: '10:30 - 11:30', semester: 'I', section: '1CSE1', subject: 'BEEE', block: 'B-IV', room: '326' },
      { day: 'Friday', slot: '11:30 - 12:30', semester: 'I', section: '1CSE1', subject: 'BEEE (T)', block: 'B-IV', room: '326' },
      { day: 'Friday', slot: '12:30 - 01:30', semester: 'I', section: '1CSE2', subject: 'BEEE', block: 'B-IV', room: '327' },
      { day: 'Friday', slot: '02:30 - 03:30', semester: 'I', section: '1CSE2', subject: 'BEEE', block: 'B-IV', room: '327' },
      { day: 'Tuesday', slot: '11:30 - 01:30', semester: 'I', section: '1CSE2', subject: 'BEE Lab / BEEEL', block: 'B-IV', room: '015 - BEEE Lab', sharedFaculty: 'VRG / BS / GSK' }
    ]
  },
  {
    facultyId: 'FAC-CSE-008',
    password: 'faculty123',
    name: 'Dr. B. Yakaiah (BY)',
    phone: '9246893466',
    email: 'yakaiah12@gmail.com',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Mathematics & Humanities',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 327',
    timetable: [
      { day: 'Monday', slot: '11:30 - 12:30', semester: 'I', section: '1CSE2', subject: 'DCODE', block: 'B-IV', room: '327' },
      { day: 'Monday', slot: '02:30 - 03:30', semester: 'I', section: '1CSE2', subject: 'DCODE', block: 'B-IV', room: '327' },
      { day: 'Tuesday', slot: '10:30 - 11:30', semester: 'I', section: '1CSE2', subject: 'DCODE', block: 'B-IV', room: '327' },
      { day: 'Tuesday', slot: '03:30 - 04:30', semester: 'I', section: '1CSE2', subject: 'BEEE (T)', block: 'B-IV', room: '327' },
      { day: 'Thursday', slot: '03:30 - 04:30', semester: 'I', section: '1CSE2', subject: 'DCODE', block: 'B-IV', room: '327' }
    ]
  },
  {
    facultyId: 'FAC-CSE-009',
    password: 'faculty123',
    name: 'Dr. G. Suneel Kumar (GSK)',
    phone: '',
    email: '',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Electrical & Electronics Engineering (EEE)',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 328',
    timetable: [
      { day: 'Monday', slot: '09:30 - 10:30', semester: 'I', section: '1CSE3', subject: 'BEEE', block: 'B-IV', room: '328' },
      { day: 'Monday', slot: '11:30 - 12:30', semester: 'I', section: '1CSE3', subject: 'BEEE Lab', block: 'B4', room: '015', sharedFaculty: 'VRG/BS/GSK' },
      { day: 'Tuesday', slot: '11:30 - 12:30', semester: 'I', section: '1CSE2', subject: 'BEEE Lab', block: 'B4', room: '015', sharedFaculty: 'VRG/BS/GSK' },
      { day: 'Tuesday', slot: '11:30 - 12:30', semester: 'I', section: '1CSE3', subject: 'BEEE (T)', block: 'B-IV', room: '328' },
      { day: 'Wednesday', slot: '02:30 - 03:30', semester: 'I', section: '1CSE3', subject: 'BEEE', block: 'B-IV', room: '328' },
      { day: 'Thursday', slot: '03:30 - 04:30', semester: 'I', section: '1CSE3', subject: 'BEEE', block: 'B-IV', room: '328' },
      { day: 'Thursday', slot: '02:30 - 03:30', semester: 'I', section: '1CSE3', subject: 'BEEE', block: 'B-IV', room: '328' }
    ]
  },
  {
    facultyId: 'FAC-CSE-010',
    password: 'faculty123',
    name: 'Dr. B. Subhash (BS)',
    phone: '',
    email: '',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Electrical & Electronics Engineering (EEE)',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B4, Room 015',
    timetable: [
      { day: 'Tuesday', slot: '11:30 - 12:30', semester: 'I', section: '1CSE2', subject: 'BEEE Lab', block: 'B4', room: '015', sharedFaculty: 'VRG/BS/GSK' },
      { day: 'Monday', slot: '11:30 - 12:30', semester: 'I', section: '1CSE3', subject: 'BEEE Lab', block: 'B4', room: '015' },
      { day: 'Friday', slot: '03:30 - 04:30', semester: 'I', section: '1CSE4', subject: 'BEEE Lab', block: 'B4', room: '015' },
      { day: 'Monday', slot: '11:30 - 12:30', semester: 'I', section: '1CSE3', subject: 'BEEE Lab', block: 'B4', room: '015' }
    ]
  },
  {
    facultyId: 'FAC-CSE-011',
    password: 'faculty123',
    name: 'Dr. Ch. Sateesh Chandra (CHSC)',
    phone: '',
    email: '',
    designation: 'Not specified',
    department: 'CSE',
    currentDepartment: 'Physical Sciences - Physics',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 328',
    timetable: [
      { day: 'Tuesday', slot: '09:30 - 10:30', semester: 'I', section: '1CSE3', subject: 'EP', block: 'B-IV', room: '328' },
      { day: 'Tuesday', slot: '10:30 - 11:30', semester: 'I', section: '1CSE3', subject: 'EP (T)', block: 'B-IV', room: '328' },
      { day: 'Wednesday', slot: '03:30 - 04:30', semester: 'I', section: '1CSE3', subject: 'EP', block: 'B-IV', room: '328' },
      { day: 'Thursday', slot: '09:30 - 10:30', semester: 'I', section: '1CSE3', subject: 'EP', block: 'B-IV', room: '328' },
      { day: 'Friday', slot: '02:30 - 04:30', semester: 'I', section: '1CSE3', subject: 'EP Lab', block: 'B4', room: '019' }
    ]
  },
  {
    facultyId: 'FAC-CSE-012',
    password: 'faculty123',
    name: 'Smt. R. Radhika (RK/RRA)',
    phone: '',
    email: '',
    designation: 'Not specified',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 328',
    timetable: [
      { day: 'Monday', slot: '03:30 - 04:30', semester: 'I', section: '1CSE3', subject: 'CAO', block: 'B-IV', room: '328' },
      { day: 'Tuesday', slot: '12:30 - 01:30', semester: 'I', section: '1CSE3', subject: 'CAO', block: 'B-IV', room: '328' },
      { day: 'Wednesday', slot: '11:30 - 12:30', semester: 'I', section: '1CSE3', subject: 'CAO', block: 'B-IV', room: '328' },
      { day: 'Friday', slot: '10:30 - 11:30', semester: 'I', section: '1CSE3', subject: 'CAO (T)', block: 'B-IV', room: '328' },
      { day: 'Monday', slot: '09:30 - 12:30', semester: 'III', section: '3CSE3', subject: 'ADS Lab', block: 'B5', room: '201' },
      { day: 'Wednesday', slot: '02:30 - 03:30', semester: 'III', section: '3CSE3', subject: 'ADS', block: 'B-V', room: '302' },
      { day: 'Thursday', slot: '09:30 - 10:30', semester: 'III', section: '3CSE3', subject: 'ADS', block: 'B-V', room: '302' },
      { day: 'Thursday', slot: '12:30 - 01:30', semester: 'III', section: '3CSE3', subject: 'ADS (T)', block: 'B-V', room: '302' },
      { day: 'Friday', slot: '02:30 - 03:30', semester: 'III', section: '3CSE3', subject: 'ADS', block: 'B-V', room: '302' },
      { day: 'Thursday', slot: '02:30 - 04:30', semester: 'V', section: '5CSE2', subject: 'Seminar', block: 'B-IV', room: '126' }
    ]
  },
  {
    facultyId: 'FAC-CSE-013',
    password: 'faculty123',
    name: 'Dr. V. Sree Ranganayaki (VSR)',
    phone: '',
    email: '',
    designation: 'Not specified',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 214',
    timetable: [
      { day: 'Monday', slot: '09:30 - 11:30', semester: 'I', section: '1CSE6', subject: 'IT Workshop Lab', block: 'B4', room: '202/B' },
      { day: 'Wednesday', slot: '02:30 - 04:30', semester: 'I', section: '1CSE2', subject: 'PPSC Lab', block: 'B4', room: '202/B' },
      { day: 'Friday', slot: '11:30 - 01:30', semester: 'I', section: '1CSE3', subject: 'IT Workshop Lab', block: 'B4', room: '202/B' },
      { day: 'Monday', slot: '03:30 - 04:30', semester: 'III', section: '3CSE6', subject: 'OOPJ (T)', block: 'B-IV', room: '214' },
      { day: 'Tuesday', slot: '09:30 - 11:30', semester: 'III', section: '3CSE6', subject: 'OOPJ Lab', block: 'B5', room: '301' },
      { day: 'Tuesday', slot: '02:30 - 03:30', semester: 'III', section: '3CSE6', subject: 'OOPJ', block: 'B-IV', room: '214' },
      { day: 'Wednesday', slot: '12:30 - 01:30', semester: 'III', section: '3CSE6', subject: 'OOPJ', block: 'B-IV', room: '214' },
      { day: 'Thursday', slot: '10:30 - 11:30', semester: 'III', section: '3CSE6', subject: 'OOPJ', block: 'B-IV', room: '214' }
    ]
  },
  {
    facultyId: 'FAC-CSE-014',
    password: 'faculty123',
    name: 'Smt. K. Nirmala (KN)',
    phone: '',
    email: '',
    designation: 'Not specified',
    department: 'CSE',
    currentDepartment: 'Mathematics & Humanities',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 328',
    timetable: [
      { day: 'Monday', slot: '10:30 - 11:30', semester: 'I', section: '1CSE3', subject: 'DCODE (T)', block: 'B-IV', room: '328' },
      { day: 'Tuesday', slot: '02:30 - 03:30', semester: 'I', section: '1CSE3', subject: 'DCODE', block: 'B-IV', room: '328' },
      { day: 'Thursday', slot: '02:30 - 03:30', semester: 'I', section: '1CSE3', subject: 'DCODE', block: 'B-IV', room: '328' },
      { day: 'Friday', slot: '09:30 - 10:30', semester: 'I', section: '1CSE3', subject: 'DCODE', block: 'B-IV', room: '328' }
    ]
  },
  {
    facultyId: 'FAC-CSE-015',
    password: 'faculty123',
    name: 'Smt. N. Deepika (NDPK/ND)',
    phone: '',
    email: '',
    designation: 'Not specified',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 329',
    timetable: [
      { day: 'Monday', slot: '10:30 - 11:30', semester: 'I', section: '1CSE4', subject: 'PPSC', block: 'B-IV', room: '329' },
      { day: 'Monday', slot: '11:30 - 01:30', semester: 'I', section: '1CSE4', subject: 'PPSC Lab', block: 'B4', room: '202/B' },
      { day: 'Wednesday', slot: '09:30 - 10:30', semester: 'I', section: '1CSE4', subject: 'PPSC', block: 'B-IV', room: '329' },
      { day: 'Wednesday', slot: '02:30 - 03:30', semester: 'I', section: '1CSE4', subject: 'PPSC (T)', block: 'B-IV', room: '329' },
      { day: 'Thursday', slot: '11:30 - 01:30', semester: 'I', section: '1CSE3', subject: 'PPSC Lab', block: 'B4', room: '202/B' },
      { day: 'Friday', slot: '10:30 - 11:30', semester: 'I', section: '1CSE4', subject: 'PPSC', block: 'B-IV', room: '329' },
      { day: 'Thursday', slot: '02:30 - 04:30', semester: 'V', section: '5CSE1', subject: 'Seminar', block: 'B-IV', room: '014' },
      { day: 'Monday', slot: '02:30 - 04:30', semester: 'VII', section: '7CSE2', subject: 'Internship Evaluation', block: 'B-IV', room: '014' },
      { day: 'Tuesday', slot: '09:30 - 10:30', semester: 'VII', section: '7CSE1', subject: 'Machine Learning', block: 'B5', room: '202' },
      { day: 'Tuesday', slot: '02:30 - 03:30', semester: 'VII', section: '7CSE1', subject: 'Machine Learning', block: 'B-IV', room: '126' },
      { day: 'Wednesday', slot: '11:30 - 12:30', semester: 'VII', section: '7CSE1', subject: 'Machine Learning', block: 'B5', room: '204' }
    ]
  },
  {
    facultyId: 'FAC-CSE-021',
    password: 'faculty123',
    name: 'Ch. Shiva Kumar (CSK)',
    phone: '8008020050',
    email: 'csk.cse@kitsw.ac.in',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 323',
    timetable: [
      { day: 'Monday', slot: '11:30 - 01:30', semester: 'I', section: '1CSE4', subject: 'PPSC Lab', block: 'B4', room: '202/B' },
      { day: 'Monday', slot: '03:30 - 04:30', semester: 'I', section: '1CSE6', subject: 'CAO', block: 'B-IV', room: '323' },
      { day: 'Tuesday', slot: '09:30 - 11:30', semester: 'I', section: '1CSE5', subject: 'IT Workshop Lab', block: 'B4', room: '202/B' },
      { day: 'Wednesday', slot: '03:30 - 04:30', semester: 'I', section: '1CSE6', subject: 'CAO', block: 'B-IV', room: '323' },
      { day: 'Thursday', slot: '12:30 - 01:30', semester: 'I', section: '1CSE6', subject: 'CAO (T)', block: 'B-IV', room: '323' },
      { day: 'Friday', slot: '09:30 - 10:30', semester: 'I', section: '1CSE6', subject: 'CAO', block: 'B-IV', room: '323' },
      { day: 'Tuesday', slot: '02:30 - 03:30', semester: 'V', section: '5CSE5', subject: 'QC - Quantum Computing', block: 'B-IV', room: '014', sharedFaculty: 'CSK/DS' },
      { day: 'Friday', slot: '02:30 - 04:30', semester: 'V', section: '5CSE5', subject: 'QC - Quantum Computing', block: 'B-II', room: 'New Seminar Hall', sharedFaculty: 'CSK/DS' }
    ]
  },
  {
    facultyId: 'FAC-CSE-022',
    password: 'faculty123',
    name: 'Dr. P. Kumara Swamy (PKS)',
    phone: '9848309647',
    email: 'pks.cse@kitsw.ac.in',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 327',
    timetable: [
      { day: 'Monday', slot: '12:30 - 01:30', semester: 'I', section: '1CSE2', subject: 'PPSC', block: 'B-IV', room: '327' },
      { day: 'Wednesday', slot: '09:30 - 10:30', semester: 'I', section: '1CSE2', subject: 'PPSC', block: 'B-IV', room: '327' },
      { day: 'Wednesday', slot: '02:30 - 04:30', semester: 'I', section: '1CSE2', subject: 'PPSC Lab', block: 'B4', room: '202/B' },
      { day: 'Thursday', slot: '11:30 - 12:30', semester: 'I', section: '1CSE2', subject: 'PPSC (T)', block: 'B-IV', room: '327' },
      { day: 'Thursday', slot: '02:30 - 03:30', semester: 'I', section: '1CSE2', subject: 'PPSC', block: 'B-IV', room: '327' }
    ]
  },
  {
    facultyId: 'FAC-CSE-023',
    password: 'faculty123',
    name: 'Dr. C. Srinivas (CS)',
    phone: '9030070247',
    email: 'cs.cse@kitsw.ac.in',
    designation: 'Associate Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 329',
    timetable: [
      { day: 'Monday', slot: '09:30 - 10:30', semester: 'I', section: '1CSE4', subject: 'CAO', block: 'B-IV', room: '329' },
      { day: 'Tuesday', slot: '10:30 - 11:30', semester: 'I', section: '1CSE4', subject: 'CAO', block: 'B-IV', room: '329' },
      { day: 'Tuesday', slot: '12:30 - 01:30', semester: 'I', section: '1CSE4', subject: 'CAO (T)', block: 'B-IV', room: '329' },
      { day: 'Tuesday', slot: '11:30 - 01:30', semester: 'I', section: '1CSE4', subject: 'IT Workshop Lab', block: 'B4', room: '202/B' },
      { day: 'Wednesday', slot: '10:30 - 11:30', semester: 'I', section: '1CSE4', subject: 'CAO', block: 'B-IV', room: '329' },
      { day: 'Friday', slot: '12:30 - 01:30', semester: 'I', section: '1CSE4', subject: 'CAO', block: 'B-IV', room: '329' },
      { day: 'Wednesday', slot: '11:30 - 01:30', semester: 'I', section: '1CSE2', subject: 'IT Workshop Lab', block: 'B4', room: '202/B' }
    ]
  },
  {
    facultyId: 'FAC-CSE-024',
    password: 'faculty123',
    name: 'Smt. M. Preethi (MP)',
    phone: '9492111297',
    email: 'mp.cse@kitsw.ac.in',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 326',
    timetable: [
      { day: 'Monday', slot: '09:30 - 10:30', semester: 'I', section: '1CSE1', subject: 'CAO', block: 'B-IV', room: '326' },
      { day: 'Tuesday', slot: '10:30 - 11:30', semester: 'I', section: '1CSE1', subject: 'CAO', block: 'B-IV', room: '326' },
      { day: 'Tuesday', slot: '11:30 - 01:30', semester: 'I', section: '1CSE4', subject: 'IT Workshop Lab', block: 'B4', room: '202/B' },
      { day: 'Wednesday', slot: '09:30 - 11:30', semester: 'I', section: '1CSE5', subject: 'PPSC Lab', block: 'B4', room: '202/B' },
      { day: 'Wednesday', slot: '11:30 - 12:30', semester: 'I', section: '1CSE1', subject: 'CAO (T)', block: 'B-IV', room: '326' },
      { day: 'Friday', slot: '02:30 - 03:30', semester: 'I', section: '1CSE1', subject: 'CAO', block: 'B-IV', room: '326' }
    ]
  },
  {
    facultyId: 'FAC-CSE-025',
    password: 'faculty123',
    name: 'Dr. G. Sridhar (GS)',
    phone: '8106344347',
    email: 'gs.cse@kitsw.ac.in',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 326',
    timetable: [
      { day: 'Monday', slot: '02:30 - 04:30', semester: 'I', section: '1CSE1', subject: 'PPSC Lab', block: 'B4', room: '202/B' },
      { day: 'Tuesday', slot: '11:30 - 12:30', semester: 'I', section: '1CSE1', subject: 'PPSC (T)', block: 'B-IV', room: '326' },
      { day: 'Tuesday', slot: '02:30 - 04:30', semester: 'I', section: '1CSE5', subject: 'BEE Lab', block: 'B4', room: '015' },
      { day: 'Wednesday', slot: '09:30 - 10:30', semester: 'I', section: '1CSE1', subject: 'PPSC', block: 'B-IV', room: '326' },
      { day: 'Thursday', slot: '09:30 - 10:30', semester: 'I', section: '1CSE1', subject: 'PPSC', block: 'B-IV', room: '326' },
      { day: 'Friday', slot: '03:30 - 04:30', semester: 'I', section: '1CSE1', subject: 'PPSC', block: 'B-IV', room: '326' }
    ]
  },
  {
    facultyId: 'FAC-CSE-026',
    password: 'faculty123',
    name: 'Dr. P. Nagarjuna Reddy (PNR)',
    phone: '9908926407',
    email: 'pnreddy.eee@kitsw.ac.in',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Electrical & Electronics Engineering (EEE)',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 321',
    timetable: [
      { day: 'Monday', slot: '09:30 - 10:30', semester: 'I', section: '1CSE5', subject: 'BEEE', block: 'B-IV', room: '321' },
      { day: 'Tuesday', slot: '02:30 - 04:30', semester: 'I', section: '1CSE5', subject: 'BEEE Lab', block: 'B4', room: '015' },
      { day: 'Wednesday', slot: '03:30 - 04:30', semester: 'I', section: '1CSE5', subject: 'BEEE', block: 'B-IV', room: '321' },
      { day: 'Thursday', slot: '02:30 - 03:30', semester: 'I', section: '1CSE5', subject: 'BEEE', block: 'B-IV', room: '321' },
      { day: 'Friday', slot: '10:30 - 11:30', semester: 'I', section: '1CSE5', subject: 'BEEE (T)', block: 'B-IV', room: '321' },
      { day: 'Friday', slot: '11:30 - 01:30', semester: 'I', section: '1CSE6', subject: 'BEEE Lab', block: 'B4', room: '015' }
    ]
  },
  {
    facultyId: 'FAC-CSE-027',
    password: 'faculty123',
    name: 'Dr. C. Pavan Kumar (CPK)',
    phone: '9652801085',
    email: 'cpk.eee@kitsw.ac.in',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Electrical & Electronics Engineering (EEE)',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 323',
    timetable: [
      { day: 'Monday', slot: '02:30 - 03:30', semester: 'I', section: '1CSE6', subject: 'BEEE', block: 'B-IV', room: '323' },
      { day: 'Tuesday', slot: '11:30 - 12:30', semester: 'I', section: '1CSE6', subject: 'BEEE (T)', block: 'B-IV', room: '323' },
      { day: 'Tuesday', slot: '02:30 - 04:30', semester: 'I', section: '1CSE5', subject: 'BEEE Lab', block: 'B4', room: '015' },
      { day: 'Wednesday', slot: '02:30 - 03:30', semester: 'I', section: '1CSE6', subject: 'BEEE', block: 'B-IV', room: '323' },
      { day: 'Friday', slot: '10:30 - 11:30', semester: 'I', section: '1CSE6', subject: 'BEEE', block: 'B-IV', room: '323' },
      { day: 'Friday', slot: '11:30 - 01:30', semester: 'I', section: '1CSE6', subject: 'BEEE Lab', block: 'B4', room: '015' }
    ]
  },
  {
    facultyId: 'FAC-CSE-028',
    password: 'faculty123',
    name: 'Dr. G. Ravi Teja (GRT)',
    phone: '9494164647',
    email: 'rtg.cse@kitsw.ac.in',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 321',
    timetable: [
      { day: 'Monday', slot: '03:30 - 04:30', semester: 'I', section: '1CSE5', subject: 'PPSC', block: 'B-IV', room: '321' },
      { day: 'Tuesday', slot: '09:30 - 11:30', semester: 'I', section: '1CSE5', subject: 'IT Workshop Lab', block: 'B4', room: '202/B' },
      { day: 'Tuesday', slot: '11:30 - 12:30', semester: 'I', section: '1CSE5', subject: 'PPSC', block: 'B-IV', room: '321' },
      { day: 'Wednesday', slot: '09:30 - 11:30', semester: 'I', section: '1CSE5', subject: 'PPSC Lab', block: 'B4', room: '202/B' },
      { day: 'Thursday', slot: '09:30 - 10:30', semester: 'I', section: '1CSE5', subject: 'PPSC', block: 'B-IV', room: '321' },
      { day: 'Thursday', slot: '02:30 - 04:30', semester: 'I', section: '1CSE6', subject: 'PPSC Lab', block: 'B4', room: '202/B' },
      { day: 'Friday', slot: '12:30 - 01:30', semester: 'I', section: '1CSE5', subject: 'PPSC (T)', block: 'B-IV', room: '321' }
    ]
  },
  {
    facultyId: 'FAC-CSE-029',
    password: 'faculty123',
    name: 'Dr. V. Pradeep (VPD)',
    phone: '',
    email: '',
    designation: 'Not specified',
    department: 'CSE',
    currentDepartment: 'Mechanical Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'Central Workshop',
    timetable: [
      { day: 'Thursday', slot: '11:30 - 01:30', semester: 'I', section: '1CSE5', subject: 'IDEA Lab Maker Space', block: 'Central Workshop', room: '' },
      { day: 'Friday', slot: '09:30 - 11:30', semester: 'I', section: '1CSE1', subject: 'IDEA Lab Maker Space', block: 'Central Workshop', room: '' },
      { day: 'Friday', slot: '02:30 - 04:30', semester: 'I', section: '1CSE6', subject: 'IDEA Lab Maker Space', block: 'Central Workshop', room: '' }
    ]
  },
  {
    facultyId: 'FAC-CSE-030',
    password: 'faculty123',
    name: 'Dr. K. Shivashanker (KSS)',
    phone: '9704989229',
    email: 'kss.mh@kitsw.ac.in',
    designation: 'Associate Professor & Head',
    department: 'CSE',
    currentDepartment: 'Mathematics & Humanities',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 321',
    timetable: [
      { day: 'Monday', slot: '02:30 - 03:30', semester: 'I', section: '1CSE5', subject: 'DCODE', block: 'B-IV', room: '321' },
      { day: 'Wednesday', slot: '11:30 - 12:30', semester: 'I', section: '1CSE5', subject: 'DCODE (T)', block: 'B-IV', room: '321' },
      { day: 'Thursday', slot: '10:30 - 11:30', semester: 'I', section: '1CSE5', subject: 'DCODE', block: 'B-IV', room: '321' },
      { day: 'Friday', slot: '02:30 - 03:30', semester: 'I', section: '1CSE5', subject: 'DCODE', block: 'B-IV', room: '321' }
    ]
  },
  {
    facultyId: 'FAC-CSE-031',
    password: 'faculty123',
    name: 'M. Anil Kumar',
    phone: '9989000646',
    email: 'mak.me@kitsw.ac.in',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Mechanical Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'Central Workshop',
    timetable: [
      { day: 'Thursday', slot: '11:30 - 01:30', semester: 'I', section: '1CSE5', subject: 'IDEA Lab Maker Space', block: 'Central Workshop', room: '' }
    ]
  },
  {
    facultyId: 'FAC-CSE-032',
    password: 'faculty123',
    name: 'Sri. E. Praveen',
    phone: '',
    email: 'ep.cse@kitsw.ac.in',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 321',
    timetable: [
      { day: 'Monday', slot: '10:30 - 11:30', semester: 'I', section: '1CSE5', subject: 'CAO', block: 'B-IV', room: '321' },
      { day: 'Tuesday', slot: '12:30 - 01:30', semester: 'I', section: '1CSE5', subject: 'CAO (T)', block: 'B-IV', room: '321' },
      { day: 'Wednesday', slot: '12:30 - 01:30', semester: 'I', section: '1CSE5', subject: 'CAO', block: 'B-IV', room: '321' },
      { day: 'Thursday', slot: '02:30 - 04:30', semester: 'V', section: '5CSE5', subject: 'SEMINAR', block: 'B-IV', room: '127' },
      { day: 'Friday', slot: '09:30 - 10:30', semester: 'I', section: '1CSE5', subject: 'CAO', block: 'B-IV', room: '321' }
    ]
  },
  {
    facultyId: 'FAC-CSE-033',
    password: 'faculty123',
    name: 'Sri. B. Dilip Reddy',
    phone: '',
    email: 'bdr.cse@kitsw.ac.in',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-V, Room 204',
    timetable: [
      { day: 'Monday', slot: '02:30 - 03:30', semester: 'III', section: '3CSE2', subject: 'SE', block: 'B-V', room: '204' },
      { day: 'Tuesday', slot: '02:30 - 04:30', semester: 'VII', section: '7CSE3', subject: 'CASE Tools Lab', block: 'B2', room: '213' },
      { day: 'Wednesday', slot: '12:30 - 01:30', semester: 'III', section: '3CSE2', subject: 'SE (T)', block: 'B-V', room: '204' },
      { day: 'Wednesday', slot: '02:30 - 04:30', semester: 'V', section: '5CSE3', subject: 'SEMINAR', block: 'B-IV', room: '127' },
      { day: 'Friday', slot: '09:30 - 10:30', semester: 'III', section: '3CSE2', subject: 'SE', block: 'B-V', room: '204' },
      { day: 'Friday', slot: '03:30 - 04:30', semester: 'III', section: '3CSE2', subject: 'SE', block: 'B-V', room: '204' }
    ]
  },
  {
    facultyId: 'FAC-CSE-034',
    password: 'faculty123',
    name: 'Sri. B. Sai Kalyan',
    phone: '',
    email: '',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 213',
    timetable: [
      { day: 'Monday', slot: '09:30 - 10:30', semester: 'VII', section: '7CSE3', subject: 'CSDF', block: 'B5', room: '302' },
      { day: 'Monday', slot: '11:30 - 12:30', semester: 'III', section: '3CSE5', subject: 'OOPJ', block: 'B-IV', room: '213' },
      { day: 'Monday', slot: '03:30 - 04:30', semester: 'III', section: '3CSE5', subject: 'OOPJ (T)', block: 'B-IV', room: '213' },
      { day: 'Tuesday', slot: '09:30 - 10:30', semester: 'VII', section: '7CSE3', subject: 'CSDF', block: 'B5', room: '302' },
      { day: 'Tuesday', slot: '11:30 - 12:30', semester: 'III', section: '3CSE5', subject: 'OOPJ', block: 'B-IV', room: '213' },
      { day: 'Tuesday', slot: '02:30 - 04:30', semester: 'I', section: '1CSE1', subject: 'ITWL – IT Workshop Laboratory', block: 'B-IV', room: '202/B, Core Lab' },
      { day: 'Wednesday', slot: '10:30 - 11:30', semester: 'VII', section: '7CSE3', subject: 'CSDF', block: 'B4', room: '213' },
      { day: 'Wednesday', slot: '11:30 - 01:30', semester: 'III', section: '3CSE3', subject: 'PSD-2 LAB', block: 'B2', room: '213' },
      { day: 'Thursday', slot: '09:30 - 11:30', semester: 'III', section: '3CSE5', subject: 'OOPJ Lab', block: 'B5', room: '201' },
      { day: 'Thursday', slot: '03:30 - 04:30', semester: 'III', section: '3CSE5', subject: 'OOPJ', block: 'B-IV', room: '213' }
    ]
  },
  {
    facultyId: 'FAC-CSE-035',
    password: 'faculty123',
    name: 'Smt. Y. Sowjanya Reddy',
    phone: '',
    email: 'ysr.cse@kitsw.ac.in',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-V, Room 302',
    timetable: [
      { day: 'Tuesday', slot: '12:30 - 01:30', semester: 'V', section: '5CSE3', subject: 'EITK', block: 'B-IV', room: '127' },
      { day: 'Tuesday', slot: '02:30 - 03:30', semester: 'III', section: '3CSE3', subject: 'SE', block: 'B-V', room: '302' },
      { day: 'Wednesday', slot: '10:30 - 11:30', semester: 'III', section: '3CSE3', subject: 'SE', block: 'B-V', room: '302' },
      { day: 'Thursday', slot: '09:30 - 10:30', semester: 'V', section: '5CSE3', subject: 'EITK', block: 'B-IV', room: '127' },
      { day: 'Thursday', slot: '11:30 - 01:30', semester: 'III', section: '3CSE4', subject: 'PSD-2 LAB', block: 'B2', room: '213' },
      { day: 'Friday', slot: '11:30 - 12:30', semester: 'III', section: '3CSE3', subject: 'SE', block: 'B-V', room: '302' },
      { day: 'Friday', slot: '03:30 - 04:30', semester: 'III', section: '3CSE3', subject: 'SE (T)', block: 'B-V', room: '302' }
    ]
  },
  {
    facultyId: 'FAC-CSE-036',
    password: 'faculty123',
    name: 'Smt. R. Dhathri',
    phone: '',
    email: 'rd.cse@kitsw.ac.in',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B2, Room 213',
    timetable: [
      { day: 'Friday', slot: '09:30 - 11:30', semester: 'III', section: '3CSE6', subject: 'PSD-2 LAB', block: 'B2', room: '213' }
    ]
  },
  {
    facultyId: 'FAC-CSE-037',
    password: 'faculty123',
    name: 'Smt. T. Shireesha',
    phone: '',
    email: 'st.cse@kitsw.ac.in',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-V, Room 304',
    timetable: [
      { day: 'Monday', slot: '10:30 - 11:30', semester: 'III', section: '3CSE4', subject: 'OOPJ', block: 'B-V', room: '304' },
      { day: 'Tuesday', slot: '12:30 - 01:30', semester: 'III', section: '3CSE4', subject: 'OOPJ (T)', block: 'B-V', room: '304' },
      { day: 'Tuesday', slot: '02:30 - 03:30', semester: 'III', section: '3CSE4', subject: 'OOPJ', block: 'B-V', room: '304' },
      { day: 'Wednesday', slot: '03:30 - 04:30', semester: 'III', section: '3CSE4', subject: 'OOPJ', block: 'B-V', room: '304' },
      { day: 'Friday', slot: '09:30 - 12:30', semester: 'III', section: '3CSE4', subject: 'OOPJ Lab', block: 'B5', room: '201' }
    ]
  },
  {
    facultyId: 'FAC-CSE-038',
    password: 'faculty123',
    name: 'Smt. S. Divya',
    phone: '',
    email: 'sd.cse@kitsw.ac.in',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-V, Room 302',
    timetable: [
      { day: 'Monday', slot: '02:30 - 03:30', semester: 'III', section: '3CSE3', subject: 'OOPJ', block: 'B-V', room: '302' },
      { day: 'Tuesday', slot: '09:30 - 12:30', semester: 'III', section: '3CSE3', subject: 'OOPJ Lab', block: 'B5', room: '201' },
      { day: 'Wednesday', slot: '02:30 - 04:30', semester: 'VII', section: '7CSE2', subject: 'CASE Tools Lab', block: 'B2', room: '213' },
      { day: 'Thursday', slot: '02:30 - 03:30', semester: 'III', section: '3CSE3', subject: 'OOPJ', block: 'B-V', room: '302' },
      { day: 'Thursday', slot: '03:30 - 04:30', semester: 'III', section: '3CSE3', subject: 'OOPJ (T)', block: 'B-V', room: '302' },
      { day: 'Friday', slot: '10:30 - 11:30', semester: 'III', section: '3CSE3', subject: 'OOPJ', block: 'B-V', room: '302' }
    ]
  },
  {
    facultyId: 'FAC-CSE-039',
    password: 'faculty123',
    name: 'Smt. V. Gouthami',
    phone: '9963309949',
    mainPhone: '0870-2564888, Ext. 299',
    email: 'vg.cse@kitsw.ac.in',
    alternateEmail: 'gauthami.velakanti@gmail.com',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 214',
    timetable: [
      { day: 'Monday', slot: '11:30 - 12:30', semester: 'V', section: '5CSE5', subject: 'FSD', block: 'B-IV', room: '214' },
      { day: 'Tuesday', slot: '11:30 - 12:30', semester: 'V', section: '5CSE5', subject: 'FSD (T)', block: 'B-IV', room: '214' },
      { day: 'Tuesday', slot: '02:30 - 04:30', semester: 'I', section: '1CSE1', subject: 'ITWL – IT Workshop Laboratory', block: 'B-IV', room: '202/B, Core Lab' },
      { day: 'Wednesday', slot: '09:30 - 10:30', semester: 'V', section: '5CSE5', subject: 'FSD', block: 'B-IV', room: '126' },
      { day: 'Wednesday', slot: '02:30 - 04:30', semester: 'V', section: '5CSE5', subject: 'FSD Lab', block: 'B5', room: '301' },
      { day: 'Thursday', slot: '09:30 - 10:30', semester: 'V', section: '5CSE5', subject: 'FSD', block: 'B-IV', room: '014' }
    ]
  },
  {
    facultyId: 'FAC-CSE-040',
    password: 'faculty123',
    facultyCode: 'TMS',
    name: 'Ms. Triveni Sadala (TMS)',
    phone: '9423413355',
    mainPhone: '0870-2564888, Ext. 299',
    email: 'tms.cse@kitsw.ac.in',
    alternateEmail: 'triveni.sadala@gmail.com',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-V, Room 204',
    timetable: [
      { day: 'Monday', slot: '10:30 - 11:30', semester: 'III', section: '3CSE2', subject: 'ADS', block: 'B-V', room: '204' },
      { day: 'Tuesday', slot: '10:30 - 11:30', semester: 'III', section: '3CSE2', subject: 'ADS', block: 'B-V', room: '204' },
      { day: 'Tuesday', slot: '12:30 - 01:30', semester: 'III', section: '3CSE6', subject: 'TOC (T)', block: 'B-IV', room: '214' },
      { day: 'Tuesday', slot: '02:30 - 04:30', semester: 'I', section: '1CSE1', subject: 'ITWL – IT Workshop Laboratory', block: 'B-IV', room: '202/B, Core Lab' },
      { day: 'Wednesday', slot: '02:30 - 03:30', semester: 'III', section: '3CSE6', subject: 'TOC', block: 'B-IV', room: '214' },
      { day: 'Thursday', slot: '09:30 - 10:30', semester: 'III', section: '3CSE6', subject: 'TOC', block: 'B-IV', room: '214' },
      { day: 'Thursday', slot: '12:30 - 01:30', semester: 'III', section: '3CSE2', subject: 'ADS (T)', block: 'B-V', room: '204' },
      { day: 'Friday', slot: '02:30 - 03:30', semester: 'III', section: '3CSE2', subject: 'ADS', block: 'B-V', room: '204' },
      { day: 'Friday', slot: '11:30 - 12:30', semester: 'III', section: '3CSE6', subject: 'TOC', block: 'B-IV', room: '214' }
    ]
  },
  {
    facultyId: 'FAC-CSE-041',
    password: 'faculty123',
    name: 'Ms. N. Reena Sree (NR)',
    phone: '9505805655',
    mainPhone: '0870-2564888, Ext. 299',
    email: 'nrs.cse@kitsw.ac.in',
    alternateEmail: 'reenasreenutenkiofficial@gmail.com',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    qualification: 'M.Tech. (Cyber Forensics & Information Security)',
    specialization: 'Cyber Security, Digital Forensics',
    office: 'Room 203, Block-V, CSE',
    currentStatus: 'Available',
    currentLocation: 'Block-V, Room 203',
    timetable: [
      { day: 'Monday', slot: '09:30 - 11:30', semester: 'III', section: '3CSE1', subject: 'OOPJ Lab', block: 'B2', room: '217' },
      { day: 'Monday', slot: '02:30 - 03:30', semester: 'III', section: '3CSE1', subject: 'OOPJ', block: 'B-V', room: '202' },
      { day: 'Tuesday', slot: '09:30 - 11:30', semester: 'III', section: '3CSE1', subject: 'OOPJ Lab', block: 'B2', room: '217' },
      { day: 'Wednesday', slot: '03:30 - 04:30', semester: 'III', section: '3CSE1', subject: 'OOPJ (T)', block: 'B-V', room: '202' },
      { day: 'Thursday', slot: '11:30 - 12:30', semester: 'III', section: '3CSE1', subject: 'OOPJ', block: 'B-V', room: '202' },
      { day: 'Friday', slot: '03:30 - 04:30', semester: 'III', section: '3CSE1', subject: 'OOPJ', block: 'B-V', room: '202' }
    ]
  },
  {
    facultyId: 'FAC-CSE-042',
    password: 'faculty123',
    name: 'Ms. R. Apoorva (RA)',
    phone: '6309604011',
    mainPhone: '0870-2564888, Ext. 299',
    email: 'ar.cse@kitsw.ac.in',
    alternateEmail: 'apoorvaramyshetty0701@gmail.com',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    qualification: 'M.Tech. (Software Engineering)',
    specialization: 'Software Engineering',
    office: 'Room 203, Block-V, CSE',
    currentStatus: 'Available',
    currentLocation: 'Block-V, Room 203',
    timetable: [
      { day: 'Monday', slot: '02:30 - 04:30', semester: 'VII', section: '7CSE1', subject: 'CASE Tools Lab', block: 'B2', room: '213' },
      { day: 'Wednesday', slot: '09:30 - 10:30', semester: 'III', section: '3CSE6', subject: 'CN', block: 'B-IV', room: '214' },
      { day: 'Thursday', slot: '12:30 - 01:30', semester: 'III', section: '3CSE6', subject: 'CN (T)', block: 'B-IV', room: '214' },
      { day: 'Thursday', slot: '02:30 - 03:30', semester: 'III', section: '3CSE6', subject: 'CN', block: 'B-IV', room: '214' },
      { day: 'Friday', slot: '02:30 - 03:30', semester: 'III', section: '3CSE6', subject: 'CN', block: 'B-IV', room: '214' }
    ]
  },
  {
    facultyId: 'FAC-CSE-043',
    password: 'faculty123',
    name: 'T. Prasanna Laxmi (TLP/TPL)',
    phone: '',
    mainPhone: '0870-2564888, Ext. 299',
    email: 'tpl.cse@kitsw.ac.in',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    qualification: 'M.Tech.',
    specialization: 'Artificial Intelligence, Machine Learning',
    currentStatus: 'Available',
    currentLocation: 'CSE Department',
    timetable: [
      { day: 'Tuesday', slot: '10:30 - 11:30', semester: 'V', section: '5CSE2', subject: 'EITK', block: 'B-IV', room: '126' },
      { day: 'Friday', slot: '03:30 - 04:30', semester: 'V', section: '5CSE2', subject: 'EITK', block: 'B-IV', room: '126' },
      { day: 'Monday', slot: '02:30 - 04:30', semester: 'I', section: '1CSE1', subject: 'PPSC Lab', block: 'B4', room: '202/B' }
    ]
  },
  {
    facultyId: 'FAC-CSE-044',
    password: 'faculty123',
    name: 'Ms. K. Ashritha (AK/KA/KAS)',
    phone: '9390769823',
    mainPhone: '0870-2564888, Ext. 299',
    email: 'ka.cse@kitsw.ac.in',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    qualification: 'M.Tech. (CSE)',
    specialization: 'Generative AI, Artificial Intelligence, MLOps & AI Deployment',
    office: 'Room 203, Block-V, CSE',
    currentStatus: 'Available',
    currentLocation: 'Block-V, Room 203',
    timetable: [
      { day: 'Monday', slot: '12:30 - 01:30', semester: 'I', section: '1CSE6', subject: 'PPSC (T)', block: 'B4', room: '328' },
      { day: 'Tuesday', slot: '03:30 - 04:30', semester: 'I', section: '1CSE6', subject: 'PPSC', block: 'B-IV', room: '323' },
      { day: 'Wednesday', slot: '12:30 - 01:30', semester: 'I', section: '1CSE6', subject: 'PPSC', block: 'B-IV', room: '323' },
      { day: 'Thursday', slot: '09:30 - 10:30', semester: 'I', section: '1CSE6', subject: 'PPSC', block: 'B-IV', room: '323' },
      { day: 'Thursday', slot: '02:30 - 04:30', semester: 'I', section: '1CSE6', subject: 'PPSC Lab', block: 'B4', room: '202/B' },
      { day: 'Tuesday', slot: '10:30 - 11:30', semester: 'V', section: '5CSE5', subject: 'EITK', block: 'B-IV', room: '214' },
      { day: 'Friday', slot: '10:30 - 11:30', semester: 'V', section: '5CSE5', subject: 'EITK', block: 'B-IV', room: '127' }
    ]
  },
  {
    facultyId: 'FAC-CSE-045',
    password: 'faculty123',
    name: 'Ms. B. Naga Sandeepa (BNS)',
    phone: '8519839829',
    mainPhone: '0870-2564888, Ext. 299',
    email: 'bns.cse@kitsw.ac.in',
    alternateEmail: 'booranagasandeepa531@gmail.com',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    qualification: 'M.Tech. (Software Engineering)',
    specialization: 'Artificial Intelligence, Machine Learning',
    office: 'Room 203, Block-V, CSE',
    currentStatus: 'Available',
    currentLocation: 'Block-V, Room 203',
    timetable: [
      { day: 'Monday', slot: '10:30 - 11:30', semester: 'V', section: '5CSE1', subject: 'EITK', block: 'B-IV', room: '014' },
      { day: 'Wednesday', slot: '09:30 - 11:30', semester: 'III', section: '3CSE5', subject: 'PSD-2 LAB', block: 'B2', room: '213' },
      { day: 'Wednesday', slot: '03:30 - 04:30', semester: 'V', section: '5CSE1', subject: 'EITK', block: 'B-IV', room: '014' }
    ]
  },
  {
    facultyId: 'FAC-CSE-046',
    password: 'faculty123',
    name: 'Dr. P. Vijay Kumar (PVK)',
    phone: '8897971827',
    mainPhone: '0870-2564888, Ext. 299',
    email: 'vijay.cse@kitsw.ac.in',
    designation: 'Associate Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    qualification: 'Ph.D. (Cloud Computing)',
    specialization: 'Cloud Computing, Artificial Intelligence & Machine Learning, HPC',
    office: 'Block-II, CSE',
    currentStatus: 'Available',
    currentLocation: 'Block-II, CSE',
    timetable: [
      { day: 'Monday', slot: '09:30 - 10:30', semester: 'V', section: '5CSE3', subject: 'DAA', block: 'B-IV', room: '127' },
      { day: 'Monday', slot: '02:30 - 03:30', semester: 'V', section: '5CSE3', subject: 'DAA (T)', block: 'B-IV', room: '127' },
      { day: 'Tuesday', slot: '11:30 - 12:30', semester: 'V', section: '5CSE3', subject: 'DAA', block: 'B-IV', room: '127' },
      { day: 'Thursday', slot: '12:30 - 01:30', semester: 'V', section: '5CSE3', subject: 'DAA', block: 'B-IV', room: '127' },
      { day: 'Thursday', slot: '09:30 - 11:30', semester: 'V', section: '5CSE1', subject: 'QC', block: 'B-II', room: 'New Seminar Hall', sharedFaculty: 'W / PVK / SW' },
      { day: 'Friday', slot: '03:30 - 04:30', semester: 'V', section: '5CSE1', subject: 'QC', block: 'B-IV', room: '014', sharedFaculty: 'W / PVK / SW' }
    ]
  },
  {
    facultyId: 'FAC-CSE-047',
    password: 'faculty123',
    name: 'Dr. N. C. Santosh Kumar (NCS)',
    phone: '9948838482',
    mainPhone: '0870-2564888, Ext. 299',
    email: 'ncs.cse@kitsw.ac.in',
    alternateEmail: 'santosh.naliganti@gmail.com',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    qualification: 'M.Tech., Ph.D.',
    specialization: 'Biomedical Image Processing, Spatial Data Mining',
    office: 'Room 205, Block-V, CSE',
    currentStatus: 'Available',
    currentLocation: 'Block-V, Room 205',
    timetable: [
      { day: 'Monday', slot: '10:30 - 11:30', semester: 'III', section: '3CSE5', subject: 'SE', block: 'B-IV', room: '213' },
      { day: 'Monday', slot: '02:30 - 04:30', semester: 'V', section: '5CSE1', subject: 'FSD Lab', block: 'B5', room: '301' },
      { day: 'Tuesday', slot: '10:30 - 11:30', semester: 'V', section: '5CSE1', subject: 'FSD', block: 'B-IV', room: '014' },
      { day: 'Tuesday', slot: '02:30 - 03:30', semester: 'III', section: '3CSE5', subject: 'SE', block: 'B-IV', room: '213' },
      { day: 'Wednesday', slot: '09:30 - 10:30', semester: 'V', section: '5CSE1', subject: 'FSD', block: 'B-IV', room: '014' },
      { day: 'Thursday', slot: '12:30 - 01:30', semester: 'V', section: '5CSE1', subject: 'FSD (T)', block: 'B-IV', room: '014' },
      { day: 'Thursday', slot: '02:30 - 03:30', semester: 'III', section: '3CSE5', subject: 'SE', block: 'B-IV', room: '213' },
      { day: 'Friday', slot: '11:30 - 12:30', semester: 'V', section: '5CSE1', subject: 'FSD', block: 'B-IV', room: '014' },
      { day: 'Friday', slot: '03:30 - 04:30', semester: 'III', section: '3CSE5', subject: 'SE (T)', block: 'B-IV', room: '213' }
    ]
  },
  {
    facultyId: 'FAC-CSE-048',
    password: 'faculty123',
    name: 'Dr. N. Gayatri (NG)',
    phone: '8977437166',
    mainPhone: '0870-2564888, Ext. 299',
    email: 'ng.cse@kitsw.ac.in',
    alternateEmail: 'gayatriakkala@gmail.com',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    qualification: 'Ph.D.',
    specialization: 'Data Mining',
    office: 'Room 203, Block-V, CSE',
    currentStatus: 'Available',
    currentLocation: 'Block-V, Room 203',
    timetable: [
      { day: 'Monday', slot: '09:30 - 10:30', semester: 'V', section: '5CSE4', subject: 'ML', block: 'B-IV', room: '215' },
      { day: 'Monday', slot: '03:30 - 04:30', semester: 'III', section: '3CSE2', subject: 'CN', block: 'B-V', room: '204' },
      { day: 'Tuesday', slot: '09:30 - 10:30', semester: 'III', section: '3CSE2', subject: 'CN', block: 'B-V', room: '204' },
      { day: 'Tuesday', slot: '02:30 - 03:30', semester: 'III', section: '3CSE2', subject: 'CN (T)', block: 'B-V', room: '204' },
      { day: 'Wednesday', slot: '10:30 - 11:30', semester: 'V', section: '5CSE4', subject: 'ML', block: 'B-IV', room: '215' },
      { day: 'Wednesday', slot: '12:30 - 01:30', semester: 'V', section: '5CSE4', subject: 'ML (T)', block: 'B-IV', room: '215' },
      { day: 'Thursday', slot: '12:30 - 01:30', semester: 'V', section: '5CSE4', subject: 'ML', block: 'B-IV', room: '215' },
      { day: 'Thursday', slot: '02:30 - 03:30', semester: 'III', section: '3CSE2', subject: 'CN', block: 'B-V', room: '204' },
      { day: 'Friday', slot: '02:30 - 04:30', semester: 'V', section: '5CSE4', subject: 'ML Lab', block: 'B5', room: '201' }
    ]
  },
  {
    facultyId: 'FAC-CSE-049',
    password: 'faculty123',
    name: 'Dr. D. Sudha (DS)',
    phone: '7893170336',
    mainPhone: '0870-2564888, Ext. 299',
    email: 'ds.cse@kitsw.ac.in',
    alternateEmail: 'sudha.sudha554@gmail.com',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    qualification: 'Ph.D. (Wireless Networks)',
    specialization: 'Network Function Virtualization, Network Management, Reinforcement Learning',
    office: 'Old Project Office Room, CSE',
    currentStatus: 'Available',
    currentLocation: 'Old Project Office Room, CSE',
    timetable: [
      { day: 'Monday', slot: '09:30 - 10:30', semester: 'V', section: '5CSE1', subject: 'DAA', block: 'B-IV', room: '014' },
      { day: 'Monday', slot: '11:30 - 12:30', semester: 'VII', section: '7CSE2', subject: 'ML', block: 'B5', room: '202' },
      { day: 'Tuesday', slot: '02:30 - 03:30', semester: 'VII', section: '7CSE2', subject: 'ML', block: 'B2', room: '217' },
      { day: 'Wednesday', slot: '12:30 - 01:30', semester: 'VII', section: '7CSE2', subject: 'ML', block: 'B5', room: '201' },
      { day: 'Wednesday', slot: '02:30 - 03:30', semester: 'V', section: '5CSE1', subject: 'DAA', block: 'B-IV', room: '014' },
      { day: 'Thursday', slot: '11:30 - 12:30', semester: 'V', section: '5CSE1', subject: 'DAA (T)', block: 'B-IV', room: '014' },
      { day: 'Friday', slot: '10:30 - 11:30', semester: 'V', section: '5CSE1', subject: 'DAA', block: 'B-IV', room: '014' },
      { day: 'Tuesday', slot: '02:30 - 03:30', semester: 'V', section: '5CSE5', subject: 'QC - Quantum Computing', block: 'B-IV', room: '014', sharedFaculty: 'CSK/DS' },
      { day: 'Friday', slot: '02:30 - 04:30', semester: 'V', section: '5CSE5', subject: 'QC - Quantum Computing', block: 'B-II', room: 'New Seminar Hall', sharedFaculty: 'CSK/DS' }
    ]
  },
  {
    facultyId: 'FAC-CSE-050',
    password: 'faculty123',
    name: 'Dr. T. Ranjith Kumar (TRK)',
    phone: '9347309750',
    mainPhone: '0870-2564888, Ext. 299',
    email: 'trk.cse@kitsw.ac.in',
    alternateEmail: 'ranjithmtech12@gmail.com',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    qualification: 'Ph.D.',
    specialization: 'Software Engineering',
    office: 'Room 207, Block-II, CSE',
    currentStatus: 'Available',
    currentLocation: 'Block-II, Room 207',
    timetable: [
      { day: 'Monday', slot: '10:30 - 11:30', semester: 'V', section: '5CSE2', subject: 'FSD', block: 'B-IV', room: '126' },
      { day: 'Monday', slot: '03:30 - 04:30', semester: 'V', section: '5CSE2', subject: 'FSD (T)', block: 'B-IV', room: '126' },
      { day: 'Tuesday', slot: '09:30 - 10:30', semester: 'III', section: '3CSE5', subject: 'TOC', block: 'B-IV', room: '213' },
      { day: 'Tuesday', slot: '11:30 - 12:30', semester: 'V', section: '5CSE2', subject: 'FSD', block: 'B-IV', room: '126' },
      { day: 'Tuesday', slot: '12:30 - 01:30', semester: 'III', section: '3CSE5', subject: 'TOC (T)', block: 'B-IV', room: '213' },
      { day: 'Tuesday', slot: '02:30 - 04:30', semester: 'V', section: '5CSE2', subject: 'FSD Lab', block: 'B5', room: '301' },
      { day: 'Wednesday', slot: '11:30 - 12:30', semester: 'III', section: '3CSE5', subject: 'TOC', block: 'B-IV', room: '213' },
      { day: 'Wednesday', slot: '02:30 - 04:30', semester: 'VII', section: '7CSE3', subject: 'Internship Evaluation', block: 'B2', room: '217' },
      { day: 'Thursday', slot: '12:30 - 01:30', semester: 'III', section: '3CSE5', subject: 'TOC', block: 'B-IV', room: '213' },
      { day: 'Friday', slot: '10:30 - 11:30', semester: 'V', section: '5CSE2', subject: 'FSD', block: 'B-IV', room: '126' }
    ]
  },
  {
    facultyId: 'FAC-CSE-051', password: 'faculty123', name: 'Dr. L. Tarasvi (LT)', phone: '8801553465', mainPhone: '0870-2564888, Ext. 299', email: 'lt.cse@kitsw.ac.in', designation: 'Assistant Professor', department: 'CSE', currentDepartment: 'Computer Science & Engineering', teachingDepartment: 'CSE', specialization: 'Cloud Computing, Network Security, Machine Learning', office: 'Room 203, Block-V', currentStatus: 'Available', currentLocation: 'Block-V, Room 203', timetable: [
      { day: 'Monday', slot: '03:30 - 04:30', semester: 'III', section: '3CSE3', subject: 'TOC', block: 'B-V', room: '302' }, { day: 'Tuesday', slot: '12:30 - 01:30', semester: 'III', section: '3CSE3', subject: 'TOC (T)', block: 'B-V', room: '302' }, { day: 'Tuesday', slot: '02:30 - 03:30', semester: 'III', section: '3CSE1', subject: 'CN', block: 'B-V', room: '202' }, { day: 'Wednesday', slot: '09:30 - 10:30', semester: 'III', section: '3CSE1', subject: 'CN', block: 'B-V', room: '202' }, { day: 'Wednesday', slot: '02:30 - 04:30', semester: 'I', section: '1CSE2', subject: 'PPSC Lab', block: 'B4', room: '202/B' }, { day: 'Thursday', slot: '10:30 - 11:30', semester: 'III', section: '3CSE3', subject: 'TOC', block: 'B-V', room: '302' }, { day: 'Thursday', slot: '12:30 - 01:30', semester: 'III', section: '3CSE1', subject: 'CN (T)', block: 'B-V', room: '202' }, { day: 'Thursday', slot: '02:30 - 04:30', semester: 'V', section: '5CSE5', subject: 'SEMINAR', block: 'B-IV', room: '127' }, { day: 'Friday', slot: '09:30 - 10:30', semester: 'III', section: '3CSE3', subject: 'TOC', block: 'B-V', room: '302' }, { day: 'Friday', slot: '11:30 - 12:30', semester: 'III', section: '3CSE1', subject: 'CN', block: 'B-V', room: '202' }
    ]
  },
  {
    facultyId: 'FAC-CSE-052', password: 'faculty123', name: 'Dr. P. Niranjan (PNR)', phone: '9849270755', mainPhone: '0870-2564888', email: 'pnr.cse@kitsw.ac.in', alternateEmail: 'hod.cse@kitsw.ac.in', designation: 'Professor & Head', department: 'CSE', currentDepartment: 'Computer Science & Engineering', teachingDepartment: 'CSE', currentStatus: 'Available', currentLocation: 'CSE Department', timetable: [
      { day: 'Tuesday', slot: '12:30 - 01:30', semester: 'III', section: '3CSE1', subject: 'TOC (T)', block: 'B-V', room: '202' }, { day: 'Wednesday', slot: '10:30 - 11:30', semester: 'III', section: '3CSE1', subject: 'TOC', block: 'B-V', room: '202' }, { day: 'Thursday', slot: '02:30 - 03:30', semester: 'III', section: '3CSE1', subject: 'TOC', block: 'B-V', room: '202' }, { day: 'Friday', slot: '09:30 - 10:30', semester: 'III', section: '3CSE1', subject: 'TOC', block: 'B-V', room: '202' }
    ]
  },
  {
    facultyId: 'FAC-CSE-053', password: 'faculty123', name: 'Dr. B. Raju (BR)', phone: '9885508384', mainPhone: '0870-2564888, Ext. 299', email: 'br.cse@kitsw.ac.in', designation: 'Assistant Professor', department: 'CSE', currentDepartment: 'Computer Science & Engineering', teachingDepartment: 'CSE', specialization: 'Machine Learning; Theoretical Computer Science', currentStatus: 'Available', currentLocation: 'B-IV, Room 014', timetable: [
      { day: 'Monday', slot: '09:30 - 10:30', semester: 'III', section: '3CSE2', subject: 'TOC', block: 'B-V', room: '204' }, { day: 'Monday', slot: '11:30 - 12:30', semester: 'V', section: '5CSE1', subject: 'ML', block: 'B-IV', room: '014' }, { day: 'Tuesday', slot: '09:30 - 10:30', semester: 'V', section: '5CSE1', subject: 'ML', block: 'B-IV', room: '014' }, { day: 'Tuesday', slot: '02:30 - 04:30', semester: 'V', section: '5CSE1', subject: 'ML Lab', block: 'B5', room: '201' }, { day: 'Wednesday', slot: '11:30 - 12:30', semester: 'V', section: '5CSE1', subject: 'ML (T)', block: 'B-IV', room: '014' }, { day: 'Wednesday', slot: '03:30 - 04:30', semester: 'III', section: '3CSE2', subject: 'TOC', block: 'B-V', room: '204' }, { day: 'Thursday', slot: '03:30 - 04:30', semester: 'III', section: '3CSE2', subject: 'TOC (T)', block: 'B-V', room: '204' }, { day: 'Friday', slot: '10:30 - 11:30', semester: 'III', section: '3CSE2', subject: 'TOC', block: 'B-V', room: '204' }, { day: 'Friday', slot: '02:30 - 03:30', semester: 'V', section: '5CSE1', subject: 'ML', block: 'B-IV', room: '014' }
    ]
  },
  {
    facultyId: 'FAC-CSE-054', password: 'faculty123', name: 'Dr. Syed Abdul Moeed (SAM)', phone: '9652428472', mainPhone: '0870-2564888', email: 'abdulmoeed.cse@kitsw.ac.in', designation: 'Assistant Professor', department: 'CSE', currentDepartment: 'Computer Science & Engineering', teachingDepartment: 'CSE', office: 'Room 303, Block-V', currentStatus: 'Available', currentLocation: 'Block-V, Room 303', timetable: [
      { day: 'Monday', slot: '09:30 - 10:30', semester: 'VII', section: '7CSE2', subject: 'CC', block: 'B5', room: '202' }, { day: 'Tuesday', slot: '09:30 - 11:30', semester: 'VII', section: '7CSE2', subject: 'CC Lab', block: 'B2', room: '213' }, { day: 'Tuesday', slot: '11:30 - 12:30', semester: 'VII', section: '7CSE2', subject: 'CC', block: 'B5', room: '204' }, { day: 'Wednesday', slot: '10:30 - 11:30', semester: 'VII', section: '7CSE2', subject: 'CC', block: 'B5', room: '304' }
    ]
  },
  {
    facultyId: 'FAC-CSE-055', password: 'faculty123', name: 'Dr. G. Rathnakar (GR)', phone: '9966408009', mainPhone: '0870-2564888', email: 'rathnakargatla@kitsw.ac.in', designation: 'Associate Professor', department: 'Management / MBA', currentDepartment: 'Management / MBA', teachingDepartment: 'CSE', currentStatus: 'Available', currentLocation: 'B5, Room 302', timetable: [
      { day: 'Monday', slot: '11:30 - 12:30', semester: 'VII', section: '7CSE1', subject: 'MEA', block: 'B5', room: '302' }, { day: 'Tuesday', slot: '10:30 - 11:30', semester: 'VII', section: '7CSE1', subject: 'MEA', block: 'B5', room: '202' }, { day: 'Wednesday', slot: '10:30 - 11:30', semester: 'VII', section: '7CSE1', subject: 'MEA', block: 'B5', room: '204' }
    ]
  },
  {
    facultyId: 'FAC-CSE-056', password: 'faculty123', name: 'Dr. W. Grace Shanthi (WGS)', phone: '9441003325', mainPhone: '0870-2564888', email: 'wgs.mh@kitsw.ac.in', designation: 'Assistant Professor', department: 'Mathematics & Humanities', currentDepartment: 'Mathematics & Humanities', teachingDepartment: 'CSE', specialization: 'English Language Teaching', currentStatus: 'Available', currentLocation: 'B-IV, Rooms 308/309', timetable: [
      { day: 'Tuesday', slot: '11:30 - 01:30', semester: 'V', section: '5CSE1', subject: 'TE', block: 'B-IV', room: '308/309' }, { day: 'Wednesday', slot: '09:30 - 11:30', semester: 'V', section: '5CSE2', subject: 'TE', block: 'B-IV', room: '308/309' }
    ]
  },
  {
    facultyId: 'FAC-CSE-057', password: 'faculty123', name: 'Dr. Asmathunnisa Begum (ASMA)', phone: '9963361156', mainPhone: '0870-2564888', email: 'asma.mh@kitsw.ac.in', designation: 'Assistant Professor', department: 'Mathematics & Humanities', currentDepartment: 'Mathematics & Humanities', teachingDepartment: 'CSE', currentStatus: 'Available', currentLocation: 'B-IV, Rooms 308/309', timetable: [
      { day: 'Monday', slot: '02:30 - 04:30', semester: 'V', section: '5CSE4', subject: 'TE', block: 'B-IV', room: '308/309' }, { day: 'Wednesday', slot: '11:30 - 01:30', semester: 'V', section: '5CSE3', subject: 'TE', block: 'B-IV', room: '308/309' }
    ]
  },
  {
    facultyId: 'FAC-CSE-058', password: 'faculty123', name: 'Dr. Md. Sharfuddin Waseem (W)', phone: '8019546945', mainPhone: '0870-2564888', email: 'waseem.cse@kitsw.ac.in', designation: 'Assistant Professor', department: 'CSE', currentDepartment: 'Computer Science & Engineering', teachingDepartment: 'CSE', currentStatus: 'Available', currentLocation: 'B-IV, Room 127', timetable: [
      { day: 'Monday', slot: '11:30 - 12:30', semester: 'V', section: '5CSE3', subject: 'FSD', block: 'B-IV', room: '127' }, { day: 'Monday', slot: '03:30 - 04:30', semester: 'V', section: '5CSE3', subject: 'FSD (T)', block: 'B-IV', room: '127' }, { day: 'Tuesday', slot: '03:30 - 04:30', semester: 'V', section: '5CSE3', subject: 'FSD', block: 'B-IV', room: '127' }, { day: 'Wednesday', slot: '09:30 - 10:30', semester: 'V', section: '5CSE3', subject: 'FSD', block: 'B-IV', room: '127' }, { day: 'Friday', slot: '02:30 - 04:30', semester: 'V', section: '5CSE3', subject: 'FSD Lab', block: 'B5', room: '301' }, { day: 'Thursday', slot: '09:30 - 11:30', semester: 'V', section: '5CSE1', subject: 'QC', block: 'B-II', room: 'New Seminar Hall', sharedFaculty: 'W / PVK / SW' }, { day: 'Friday', slot: '03:30 - 04:30', semester: 'V', section: '5CSE1', subject: 'QC', block: 'B-IV', room: '014', sharedFaculty: 'W / PVK / SW' }
    ]
  },
  {
    facultyId: 'FAC-CSE-059', password: 'faculty123', name: 'Sri. K. Ravi (KR)', phone: '8317512340', mainPhone: '0870-2564888, Ext. 299', email: 'kr.cse@kitsw.ac.in', designation: 'Assistant Professor', department: 'CSE', currentDepartment: 'Computer Science & Engineering', teachingDepartment: 'CSE', office: 'Room 210/A, Block-II', currentStatus: 'Available', currentLocation: 'Block-II, Room 210/A', timetable: [
      { day: 'Monday', slot: '09:30 - 11:30', semester: 'III', section: '3CSE6', subject: 'ADS Lab', block: 'B5', room: '301' }, { day: 'Monday', slot: '02:30 - 03:30', semester: 'III', section: '3CSE6', subject: 'ADS', block: 'B-IV', room: '214' }, { day: 'Tuesday', slot: '11:30 - 12:30', semester: 'V', section: '5CSE4', subject: 'DAA', block: 'B-IV', room: '215' }, { day: 'Wednesday', slot: '09:30 - 10:30', semester: 'V', section: '5CSE4', subject: 'DAA', block: 'B-IV', room: '215' }, { day: 'Wednesday', slot: '11:30 - 12:30', semester: 'III', section: '3CSE6', subject: 'ADS', block: 'B-IV', room: '214' }, { day: 'Wednesday', slot: '03:30 - 04:30', semester: 'III', section: '3CSE6', subject: 'ADS (T)', block: 'B-IV', room: '214' }, { day: 'Thursday', slot: '11:30 - 12:30', semester: 'V', section: '5CSE4', subject: 'DAA', block: 'B-IV', room: '215' }, { day: 'Thursday', slot: '03:30 - 04:30', semester: 'III', section: '3CSE6', subject: 'ADS', block: 'B-IV', room: '214' }, { day: 'Friday', slot: '11:30 - 12:30', semester: 'V', section: '5CSE4', subject: 'DAA (T)', block: 'B-IV', room: '215' }
    ]
  },
  {
    facultyId: 'FAC-CSE-060', password: 'faculty123', name: 'Sri. M. S. B. Phridviraj (MSBP)', phone: '9866576521 / 9030076521', mainPhone: '0870-2564888, Ext. 299', email: 'msbp.cse@kitsw.ac.in', designation: 'Assistant Professor', department: 'CSE', currentDepartment: 'Computer Science & Engineering', teachingDepartment: 'CSE', office: 'Room 205, Block-V', specialization: 'Big Data, Data Mining, Machine Learning, AI, IoT, Blockchain, Cloud Computing, Network Security', currentStatus: 'Available', currentLocation: 'Block-V, Room 205', timetable: [
      { day: 'Monday', slot: '09:30 - 10:30', semester: 'V', section: '5CSE2', subject: 'DAA', block: 'B-IV', room: '126' }, { day: 'Monday', slot: '02:30 - 03:30', semester: 'V', section: '5CSE2', subject: 'DAA', block: 'B-IV', room: '126' }, { day: 'Tuesday', slot: '10:30 - 11:30', semester: 'VII', section: '7CSE3', subject: 'ML', block: 'B5', room: '302' }, { day: 'Tuesday', slot: '12:30 - 01:30', semester: 'V', section: '5CSE2', subject: 'DAA (T)', block: 'B-IV', room: '126' }, { day: 'Wednesday', slot: '09:30 - 10:30', semester: 'VII', section: '7CSE3', subject: 'ML', block: 'B4', room: '213' }, { day: 'Wednesday', slot: '11:30 - 12:30', semester: 'V', section: '5CSE2', subject: 'DAA', block: 'B-IV', room: '126' }
    ]
  },
  {
    facultyId: 'FAC-CSE-061', password: 'faculty123', name: 'Sri. P. Prakash (PP)', phone: '8639577354', mainPhone: '0870-2564888, Ext. 299', email: 'prakash.cse@kitsw.ac.in', designation: 'Assistant Professor', department: 'CSE', currentDepartment: 'Computer Science & Engineering', teachingDepartment: 'CSE', office: 'Room 201, Block-V', specialization: 'Machine Learning', currentStatus: 'Available', currentLocation: 'Block-V, Room 201', timetable: [
      { day: 'Monday', slot: '09:30 - 10:30', semester: 'III', section: '3CSE4', subject: 'TOC', block: 'B-V', room: '304' }, { day: 'Monday', slot: '12:30 - 01:30', semester: 'VII', section: '7CSE2', subject: 'CSDF', block: 'B5', room: '202' }, { day: 'Monday', slot: '03:30 - 04:30', semester: 'III', section: '3CSE4', subject: 'TOC (T)', block: 'B-V', room: '304' }, { day: 'Tuesday', slot: '11:30 - 12:30', semester: 'III', section: '3CSE4', subject: 'TOC', block: 'B-V', room: '304' }, { day: 'Tuesday', slot: '03:30 - 04:30', semester: 'VII', section: '7CSE2', subject: 'CSDF', block: 'B2', room: '217' }, { day: 'Wednesday', slot: '09:30 - 10:30', semester: 'VII', section: '7CSE2', subject: 'CSDF', block: 'B5', room: '304' }, { day: 'Wednesday', slot: '02:30 - 03:30', semester: 'III', section: '3CSE4', subject: 'TOC', block: 'B-V', room: '304' }
    ]
  },
  {
    facultyId: 'FAC-CSE-062', password: 'faculty123', name: 'Sri. K. Shashank (KS)', phone: '', mainPhone: '0870-2564888, Ext. 299', email: '', designation: 'Assistant Professor', department: 'CSE', currentDepartment: 'Computer Science & Engineering', teachingDepartment: 'CSE', currentStatus: 'Available', currentLocation: 'B5, Room 202', timetable: [
      { day: 'Monday', slot: '10:30 - 11:30', semester: 'VII', section: '7CSE2', subject: 'MEA', block: 'B5', room: '202' }, { day: 'Tuesday', slot: '12:30 - 01:30', semester: 'VII', section: '7CSE2', subject: 'MEA', block: 'B5', room: '204' }, { day: 'Wednesday', slot: '11:30 - 12:30', semester: 'VII', section: '7CSE2', subject: 'MEA', block: 'B5', room: '304' }
    ]
  },
  {
    facultyId: 'FAC-CSE-063', password: 'faculty123', name: 'Smt. B. Vani (BV)', phone: '8106751361', mainPhone: '0870-2564888, Ext. 299', email: 'bv.cse@kitsw.ac.in', designation: 'Assistant Professor', department: 'CSE', currentDepartment: 'Computer Science & Engineering', teachingDepartment: 'CSE', office: 'Room 305, Block-V', specialization: 'Machine Learning, NLP', currentStatus: 'Available', currentLocation: 'Block-V, Room 305', timetable: [
      { day: 'Monday', slot: '11:30 - 12:30', semester: 'III', section: '3CSE4', subject: 'ADS', block: 'B-V', room: '304' }, { day: 'Tuesday', slot: '10:30 - 11:30', semester: 'III', section: '3CSE4', subject: 'ADS', block: 'B-V', room: '304' }, { day: 'Tuesday', slot: '12:30 - 01:30', semester: 'VII', section: '7CSE1', subject: 'CSDF', block: 'B5', room: '201' }, { day: 'Tuesday', slot: '03:30 - 04:30', semester: 'VII', section: '7CSE1', subject: 'CSDF', block: 'B-IV', room: '126' }, { day: 'Wednesday', slot: '09:30 - 11:30', semester: 'III', section: '3CSE4', subject: 'ADS Lab', block: 'B5', room: '201' }, { day: 'Wednesday', slot: '12:30 - 01:30', semester: 'VII', section: '7CSE1', subject: 'CSDF', block: 'B5', room: '301' }, { day: 'Wednesday', slot: '02:30 - 04:30', semester: 'V', section: '5CSE3', subject: 'SEMINAR', block: 'B-IV', room: '127' }, { day: 'Thursday', slot: '10:30 - 11:30', semester: 'III', section: '3CSE4', subject: 'ADS', block: 'B-V', room: '304' }, { day: 'Friday', slot: '03:30 - 04:30', semester: 'III', section: '3CSE4', subject: 'ADS (T)', block: 'B-V', room: '304' }
    ]
  },
  {
    facultyId: 'FAC-CSE-064', password: 'faculty123', name: 'Smt. D. Swetha (SW)', phone: '', mainPhone: '0870-2564888, Ext. 299', email: 'dswetha.cse@kitsw.ac.in', designation: 'Assistant Professor', department: 'CSE', currentDepartment: 'Computer Science & Engineering', teachingDepartment: 'CSE', specialization: 'Cloud Security', currentStatus: 'Available', currentLocation: 'CSE Department', timetable: [
      { day: 'Monday', slot: '02:30 - 03:30', semester: 'III', section: '3CSE5', subject: 'ADS', block: 'B-IV', room: '213' }, { day: 'Tuesday', slot: '10:30 - 11:30', semester: 'III', section: '3CSE5', subject: 'ADS', block: 'B-IV', room: '213' }, { day: 'Tuesday', slot: '11:30 - 01:30', semester: 'I', section: '1CSE4', subject: 'IT Workshop Lab', block: 'B4', room: '202/B' }, { day: 'Wednesday', slot: '12:30 - 01:30', semester: 'III', section: '3CSE5', subject: 'ADS (T)', block: 'B-IV', room: '213' }, { day: 'Friday', slot: '09:30 - 11:30', semester: 'III', section: '3CSE5', subject: 'ADS Lab', block: 'B5', room: '301' }, { day: 'Friday', slot: '02:30 - 03:30', semester: 'III', section: '3CSE5', subject: 'ADS', block: 'B-IV', room: '213' }, { day: 'Thursday', slot: '09:30 - 11:30', semester: 'V', section: '5CSE1', subject: 'QC', block: 'B-II', room: 'New Seminar Hall', sharedFaculty: 'W / PVK / SW' }, { day: 'Friday', slot: '03:30 - 04:30', semester: 'V', section: '5CSE1', subject: 'QC', block: 'B-IV', room: '014', sharedFaculty: 'W / PVK / SW' }
    ]
  },
  {
    facultyId: 'FAC-CSE-065', password: 'faculty123', name: 'Sri. R. Rajesh (RR)', phone: '9502949464 / 9700455960', mainPhone: '0870-2564888, Ext. 299', email: 'ravularajesh.cse@kitsw.ac.in', designation: 'Assistant Professor', department: 'CSE', currentDepartment: 'Computer Science & Engineering', teachingDepartment: 'CSE', office: 'Room 303, Block-V', currentStatus: 'Available', currentLocation: 'Block-V, Room 303', timetable: [
      { day: 'Monday', slot: '09:30 - 11:30', semester: 'VII', section: '7CSE1', subject: 'CC Lab', block: 'B2', room: '213' }, { day: 'Monday', slot: '12:30 - 01:30', semester: 'VII', section: '7CSE1', subject: 'CC', block: 'B5', room: '302' }, { day: 'Tuesday', slot: '09:30 - 10:30', semester: 'III', section: '3CSE4', subject: 'CN', block: 'B-V', room: '304' }, { day: 'Tuesday', slot: '11:30 - 12:30', semester: 'VII', section: '7CSE1', subject: 'CC', block: 'B5', room: '202' }, { day: 'Tuesday', slot: '03:30 - 04:30', semester: 'III', section: '3CSE4', subject: 'CN (T)', block: 'B-V', room: '304' }, { day: 'Wednesday', slot: '09:30 - 10:30', semester: 'VII', section: '7CSE1', subject: 'CC', block: 'B5', room: '204' }, { day: 'Wednesday', slot: '12:30 - 01:30', semester: 'III', section: '3CSE4', subject: 'CN', block: 'B-V', room: '304' }, { day: 'Wednesday', slot: '02:30 - 04:30', semester: 'VII', section: '7CSE1', subject: 'Internship Evaluation', block: 'B-IV', room: '126' }, { day: 'Thursday', slot: '02:30 - 03:30', semester: 'III', section: '3CSE4', subject: 'CN', block: 'B-V', room: '304' }
    ]
  },
  {
    facultyId: 'FAC-CSE-066', password: 'faculty123', name: 'Sri. Rakesh (RKSH)', phone: '', mainPhone: '0870-2564888, Ext. 299', email: '', designation: 'Not specified', department: 'CSE', currentDepartment: 'Computer Science & Engineering', teachingDepartment: 'CSE', currentStatus: 'Available', currentLocation: 'B-IV, Room 214', timetable: [
      { day: 'Monday', slot: '10:30 - 11:30', semester: 'V', section: '5CSE5', subject: 'DT', block: 'B-IV', room: '214' }, { day: 'Tuesday', slot: '12:30 - 01:30', semester: 'V', section: '5CSE5', subject: 'DT (T)', block: 'B-IV', room: '014' }, { day: 'Friday', slot: '09:30 - 10:30', semester: 'V', section: '5CSE5', subject: 'DT', block: 'B-IV', room: '127' }
    ]
  },
  {
    facultyId: 'FAC-CSE-067', password: 'faculty123', name: 'Smt. P. Divya Teja (PDT)', phone: '9390769823', mainPhone: '0870-2564888, Ext. 299', email: 'pdt.cse@kitsw.ac.in', designation: 'Assistant Professor', department: 'CSE', currentDepartment: 'Computer Science & Engineering', teachingDepartment: 'CSE', office: 'Room 203, Block-V', specialization: 'Cloud Computing, AI, ML', currentStatus: 'Available', currentLocation: 'Block-V, Room 203', timetable: [
      { day: 'Tuesday', slot: '09:30 - 10:30', semester: 'V', section: '5CSE5', subject: 'DAA', block: 'B-IV', room: '214' }, { day: 'Wednesday', slot: '10:30 - 11:30', semester: 'V', section: '5CSE5', subject: 'DAA', block: 'B-IV', room: '126' }, { day: 'Wednesday', slot: '12:30 - 01:30', semester: 'V', section: '5CSE5', subject: 'DAA (T)', block: 'B-IV', room: '127' }, { day: 'Friday', slot: '11:30 - 12:30', semester: 'V', section: '5CSE5', subject: 'DAA', block: 'B-IV', room: '213' }
    ]
  },
  {
    facultyId: 'FAC-CSE-068', password: 'faculty123', name: 'Dr. C. Sarika (SS)', phone: '', mainPhone: '0870-2564888, Ext. 299', email: '', designation: 'Assistant Professor', department: 'CSE', currentDepartment: 'Computer Science & Engineering', teachingDepartment: 'CSE', currentStatus: 'Available', currentLocation: 'B5, Room 302', timetable: [
      { day: 'Monday', slot: '10:30 - 11:30', semester: 'VII', section: '7CSE3', subject: 'MEA', block: 'B5', room: '302' }, { day: 'Tuesday', slot: '11:30 - 12:30', semester: 'VII', section: '7CSE3', subject: 'MEA', block: 'B5', room: '302' }, { day: 'Wednesday', slot: '12:30 - 01:30', semester: 'VII', section: '7CSE3', subject: 'MEA', block: 'B5', room: '302' }
    ]
  },
  {
    facultyId: 'FAC-CSE-069', password: 'faculty123', name: 'Dr. A. Devaraju (ADR)', phone: '9963336460', mainPhone: '0870-2564888, Ext. 299', email: 'adr.me@kitsw.ac.in', designation: 'Associate Professor', department: 'CSE', currentDepartment: 'Mechanical Engineering', teachingDepartment: 'CSE', office: 'Room 212, Block-III', specialization: 'Friction Stir Processing & Welding, EDM, Functionally Graded Materials', currentStatus: 'Available', currentLocation: 'Central Workshop', timetable: [
      { day: 'Friday', slot: '02:30 - 04:30', semester: 'I', section: '1CSE6', subject: 'IDEA Lab Maker Space', block: 'Central Workshop', room: '' }
    ]
  },
  {
    facultyId: 'FAC-CSE-070', password: 'faculty123', name: 'Dr. G. Srinivasa Rao (GSR)', phone: '', mainPhone: '0870-2564888', email: 'gsr.me@kitsw.ac.in', designation: 'Assistant Professor', department: 'CSE', currentDepartment: 'Mechanical Engineering', teachingDepartment: 'CSE', specialization: 'Heat Transfer', currentStatus: 'Available', currentLocation: 'Central Workshop', timetable: [
      { day: 'Friday', slot: '09:30 - 11:30', semester: 'I', section: '1CSE1', subject: 'IDEA Lab Maker Space', block: 'Central Workshop', room: '' }
    ]
  },
  {
    facultyId: 'FAC-CSE-071', password: 'faculty123', name: 'Dr. A. N. Mallika (ANM)', phone: '9866911005', mainPhone: '0870-2564888', email: 'amn.ps@kitsw.ac.in', designation: 'Assistant Professor', department: 'CSE', currentDepartment: 'Physical Sciences', teachingDepartment: 'CSE', office: 'Room 012, Block-IV', specialization: 'Materials Science / Nanomaterials', currentStatus: 'Available', currentLocation: 'Block-IV, Room 012', timetable: [
      { day: 'Wednesday', slot: '02:30 - 04:30', semester: 'I', section: '1CSE1', subject: 'EP Lab', block: 'B4', room: '019' }
    ]
  },
  {
    facultyId: 'FAC-CSE-072', password: 'faculty123', name: 'Dr. Md. Sameer (MDS)', phone: '9000710713', mainPhone: '0870-2564888', email: 'mds.me@kitsw.ac.in', designation: 'Assistant Professor', department: 'CSE', currentDepartment: 'Mechanical Engineering', teachingDepartment: 'CSE', specialization: 'Friction Stir Welding', currentStatus: 'Available', currentLocation: 'Central Workshop', timetable: [
      { day: 'Friday', slot: '09:30 - 11:30', semester: 'I', section: '1CSE1', subject: 'IDEA Lab Maker Space', block: 'Central Workshop', room: '' }
    ]
  },
  {
    facultyId: 'FAC-CSE-073', password: 'faculty123', name: 'Dr. A. Hari Kumar (AHK)', phone: '9618329820', mainPhone: '0870-2564888, Ext. 234', email: 'ahk.me@kitsw.ac.in', designation: 'Assistant Professor', department: 'CSE', currentDepartment: 'Mechanical Engineering', teachingDepartment: 'CSE', office: 'Room 212, Block-III', specialization: 'Design Engineering', currentStatus: 'Available', currentLocation: 'Central Workshop', timetable: [
      { day: 'Friday', slot: '11:30 - 01:30', semester: 'I', section: '1CSE2', subject: 'IDEA Lab Maker Space', block: 'Central Workshop', room: '' }
    ]
  },
  {
    facultyId: 'FAC-CSE-016',
    password: 'faculty123',
    name: 'Dr. E. Ranjith Kumar (ERK)',
    phone: '',
    email: '',
    designation: 'Not specified',
    department: 'CSE',
    currentDepartment: 'Mathematics & Humanities',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 329',
    timetable: [
      { day: 'Monday', slot: '02:30 - 03:30', semester: 'I', section: '1CSE4', subject: 'DCODE', block: 'B-IV', room: '329' },
      { day: 'Wednesday', slot: '12:30 - 01:30', semester: 'I', section: '1CSE4', subject: 'DCODE', block: 'B-IV', room: '329' },
      { day: 'Thursday', slot: '10:30 - 11:30', semester: 'I', section: '1CSE4', subject: 'DCODE', block: 'B-IV', room: '329' },
      { day: 'Thursday', slot: '02:30 - 03:30', semester: 'I', section: '1CSE4', subject: 'DCODE (T)', block: 'B-IV', room: '329' }
    ]
  },
  {
    facultyId: 'FAC-CSE-017',
    password: 'faculty123',
    name: 'Dr. B. Vijay Kumar (BVK)',
    phone: '9963310059',
    email: 'bairuvijaykumar@gmail.com',
    designation: 'Associate Professor',
    department: 'CSE',
    currentDepartment: 'Electrical & Electronics Engineering (EEE)',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 329',
    timetable: [
      { day: 'Tuesday', slot: '09:30 - 10:30', semester: 'I', section: '1CSE4', subject: 'BEEE', block: 'B-IV', room: '329' },
      { day: 'Wednesday', slot: '03:30 - 04:30', semester: 'I', section: '1CSE4', subject: 'BEEE', block: 'B-IV', room: '329' },
      { day: 'Thursday', slot: '09:30 - 10:30', semester: 'I', section: '1CSE4', subject: 'BEEE', block: 'B-IV', room: '329' },
      { day: 'Friday', slot: '11:30 - 12:30', semester: 'I', section: '1CSE4', subject: 'BEEE (T)', block: 'B-IV', room: '329' },
      { day: 'Friday', slot: '02:30 - 04:30', semester: 'I', section: '1CSE4', subject: 'BEEE Lab', block: 'B4', room: '015' }
    ]
  },
  {
    facultyId: 'FAC-CSE-018',
    password: 'faculty123',
    name: 'Dr. K. Raja Narender Reddy (KRN)',
    phone: '',
    email: '',
    designation: 'Not specified',
    department: 'CSE',
    currentDepartment: 'Mechanical Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'Central Workshop',
    timetable: [
      { day: 'Wednesday', slot: '10:30 - 11:30', semester: 'V', section: '5CSE1', subject: 'DT', block: 'B-IV', room: '014' },
      { day: 'Wednesday', slot: '12:30 - 01:30', semester: 'V', section: '5CSE1', subject: 'DT (T)', block: 'B-IV', room: '014' },
      { day: 'Friday', slot: '09:30 - 10:30', semester: 'V', section: '5CSE1', subject: 'DT', block: 'B-IV', room: '014' },
      { day: 'Tuesday', slot: '02:30 - 04:30', semester: 'I', section: '1CSE4', subject: 'IDEA Lab', block: 'Maker Space', room: '' }
    ]
  },
  {
    facultyId: 'FAC-CSE-019',
    password: 'faculty123',
    name: 'Sri. K. Kishore Kumar (KKK)',
    phone: '9440431548',
    email: 'kkk.me@kitsw.ac.in',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Mechanical Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 127',
    timetable: [
      { day: 'Monday', slot: '10:30 - 11:30', semester: 'V', section: '5CSE3', subject: 'DT', block: 'B-IV', room: '127' },
      { day: 'Tuesday', slot: '10:30 - 11:30', semester: 'V', section: '5CSE3', subject: 'DT', block: 'B-IV', room: '127' },
      { day: 'Thursday', slot: '11:30 - 12:30', semester: 'V', section: '5CSE3', subject: 'DT (T)', block: 'B-IV', room: '127' }
    ]
  },
  {
    facultyId: 'FAC-CSE-020',
    password: 'faculty123',
    name: 'Dr. D. Madhavi Latha (DML)',
    phone: '9247709098',
    email: 'dml.ps@kitsw.ac.in',
    designation: 'Associate Dean',
    department: 'CSE',
    currentDepartment: 'Engineering / Academic Administration',
    teachingDepartment: 'CSE',
    officialRole: 'CSE-IV Coordinator',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 323',
    timetable: [
      { day: 'Monday', slot: '11:30 - 12:30', semester: 'I', section: '1CSE6', subject: 'EP', block: 'B4', room: '328' },
      { day: 'Tuesday', slot: '09:30 - 11:30', semester: 'I', section: '1CSE6', subject: 'EP Lab', block: 'B4', room: '019' },
      { day: 'Tuesday', slot: '12:30 - 01:30', semester: 'I', section: '1CSE6', subject: 'EP (T)', block: 'B-IV', room: '323' },
      { day: 'Wednesday', slot: '10:30 - 11:30', semester: 'I', section: '1CSE6', subject: 'EP', block: 'B-IV', room: '323' },
      { day: 'Thursday', slot: '10:30 - 11:30', semester: 'I', section: '1CSE6', subject: 'EP', block: 'B-IV', room: '323' },
      { day: 'Thursday', slot: '11:30 - 01:30', semester: 'I', section: '1CSE4', subject: 'EP Lab', block: 'B4', room: '019' },
      { day: 'Friday', slot: '02:30 - 04:30', semester: 'I', section: '1CSE3', subject: 'EP Lab', block: 'B4', room: '019' }
    ]
  },
  {
    facultyId: 'FAC-CSE-074',
    password: 'faculty123',
    name: 'Dr. B. Raghuram (BRR)',
    phone: '9493218993',
    email: 'brr.cse@kitsw.ac.in',
    designation: 'Associate Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    office: 'Room 208/B, Block-II',
    currentStatus: 'Available',
    currentLocation: 'Block-II, Room 208/B',
    timetable: [
      { day: 'Monday', slot: '09:30 - 10:30', semester: 'V', section: '5CSE5', subject: 'ML', block: 'B-IV', room: '214' },
      { day: 'Monday', slot: '02:30 - 04:30', semester: 'V', section: '5CSE5', subject: 'ML Lab', block: 'B5', room: '201' },
      { day: 'Tuesday', slot: '03:30 - 04:30', semester: 'V', section: '5CSE5', subject: 'ML (T)', block: 'B-IV', room: '014' },
      { day: 'Wednesday', slot: '11:30 - 12:30', semester: 'V', section: '5CSE5', subject: 'ML', block: 'B-IV', room: '127' },
      { day: 'Thursday', slot: '10:30 - 11:30', semester: 'V', section: '5CSE5', subject: 'ML', block: 'B-IV', room: '014' }
    ]
  },
  {
    facultyId: 'FAC-CSE-075',
    password: 'faculty123',
    name: 'Meet Your Counselor (MYC) - Faculty To Be Assigned',
    phone: '',
    email: '',
    designation: 'Common Course',
    department: 'CSE',
    currentDepartment: 'Common Course',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'Room/Block To Be Assigned',
    timetable: [
      { day: 'Monday', slot: '12:30 - 01:30', semester: 'III', section: '3CSE1', subject: 'Meet Your Counselor (MYC)', block: '', room: '' },
      { day: 'Monday', slot: '12:30 - 01:30', semester: 'III', section: '3CSE2', subject: 'Meet Your Counselor (MYC)', block: '', room: '' },
      { day: 'Monday', slot: '12:30 - 01:30', semester: 'III', section: '3CSE3', subject: 'Meet Your Counselor (MYC)', block: '', room: '' },
      { day: 'Monday', slot: '12:30 - 01:30', semester: 'III', section: '3CSE4', subject: 'Meet Your Counselor (MYC)', block: '', room: '' },
      { day: 'Monday', slot: '12:30 - 01:30', semester: 'III', section: '3CSE5', subject: 'Meet Your Counselor (MYC)', block: '', room: '' },
      { day: 'Monday', slot: '12:30 - 01:30', semester: 'III', section: '3CSE6', subject: 'Meet Your Counselor (MYC)', block: '', room: '' },
      { day: 'Monday', slot: '12:30 - 01:30', semester: 'V', section: '5CSE1', subject: 'Meet Your Counselor (MYC)', block: '', room: '' },
      { day: 'Monday', slot: '12:30 - 01:30', semester: 'V', section: '5CSE2', subject: 'Meet Your Counselor (MYC)', block: '', room: '' },
      { day: 'Monday', slot: '12:30 - 01:30', semester: 'V', section: '5CSE3', subject: 'Meet Your Counselor (MYC)', block: '', room: '' },
      { day: 'Monday', slot: '12:30 - 01:30', semester: 'V', section: '5CSE4', subject: 'Meet Your Counselor (MYC)', block: '', room: '' },
      { day: 'Monday', slot: '12:30 - 01:30', semester: 'V', section: '5CSE5', subject: 'Meet Your Counselor (MYC)', block: '', room: '' }
    ]
  },
  {
    facultyId: 'FAC-CSE-076',
    password: 'faculty123',
    name: 'Smt. T. Veena Raj',
    phone: '8309105623',
    email: 'tvs.mh@kitsw.ac.in',
    designation: 'Not specified',
    department: 'CSE',
    currentDepartment: 'Mathematics & Humanities',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Rooms 308/309',
    timetable: [
      { day: 'Thursday', slot: '11:30 - 12:30', semester: 'V', section: '5CSE5', subject: 'Technical English (TE)', block: 'B-IV', room: '308/309' },
      { day: 'Thursday', slot: '12:30 - 01:30', semester: 'V', section: '5CSE5', subject: 'Technical English (TE)', block: 'B-IV', room: '308/309' }
    ]
  },
  {
    facultyId: 'FAC-CSE-077',
    password: 'faculty123',
    name: 'Association Hour (Faculty To Be Assigned)',
    phone: '',
    email: '',
    designation: 'Common Academic Activity',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'Room/Block To Be Assigned',
    timetable: [
      { day: 'Friday', slot: '12:30 - 01:30', semester: 'III', section: '3CSE1', subject: 'Association Hour', block: '', room: '' },
      { day: 'Friday', slot: '12:30 - 01:30', semester: 'III', section: '3CSE2', subject: 'Association Hour', block: '', room: '' },
      { day: 'Friday', slot: '12:30 - 01:30', semester: 'III', section: '3CSE3', subject: 'Association Hour', block: '', room: '' },
      { day: 'Friday', slot: '12:30 - 01:30', semester: 'III', section: '3CSE4', subject: 'Association Hour', block: '', room: '' },
      { day: 'Friday', slot: '12:30 - 01:30', semester: 'III', section: '3CSE5', subject: 'Association Hour', block: '', room: '' },
      { day: 'Friday', slot: '12:30 - 01:30', semester: 'III', section: '3CSE6', subject: 'Association Hour', block: '', room: '' },
      { day: 'Friday', slot: '12:30 - 01:30', semester: 'V', section: '5CSE1', subject: 'Association Hour', block: '', room: '' },
      { day: 'Friday', slot: '12:30 - 01:30', semester: 'V', section: '5CSE2', subject: 'Association Hour', block: '', room: '' },
      { day: 'Friday', slot: '12:30 - 01:30', semester: 'V', section: '5CSE3', subject: 'Association Hour', block: '', room: '' },
      { day: 'Friday', slot: '12:30 - 01:30', semester: 'V', section: '5CSE4', subject: 'Association Hour', block: '', room: '' },
      { day: 'Friday', slot: '12:30 - 01:30', semester: 'V', section: '5CSE5', subject: 'Association Hour', block: '', room: '' }
    ]
  },
  {
    facultyId: 'FAC-CSE-078',
    password: 'faculty123',
    name: 'Dr. D. Rakesh Chandra (DRC)',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Electrical & Electronics Engineering (EEE)',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 015',
    timetable: [
      { day: 'Thursday', slot: '02:30 - 04:30', semester: 'I', section: '1CSE1', subject: 'BEE Lab / BEEEL', block: 'B-IV', room: '015 - BEEE Lab' }
    ]
  },
  {
    facultyId: 'FAC-CSE-079',
    password: 'faculty123',
    name: 'Smt. A. Swathi (ASW)',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Electrical & Electronics Engineering (EEE)',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 015',
    timetable: [
      { day: 'Thursday', slot: '02:30 - 04:30', semester: 'I', section: '1CSE1', subject: 'BEE Lab / BEEEL', block: 'B-IV', room: '015 - BEEE Lab' }
    ]
  },
  {
    facultyId: 'FAC-CSE-080',
    password: 'faculty123',
    name: 'Sri. P. Srinivas (PS)',
    phone: '',
    email: '',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 327',
    timetable: [
      { day: 'Monday', slot: '03:30 - 04:30', semester: 'I', section: '1CSE2', subject: 'CAO', block: 'B-IV', room: '327' },
      { day: 'Thursday', slot: '12:30 - 01:30', semester: 'I', section: '1CSE2', subject: 'CAO (T)', block: 'B-IV', room: '328' },
      { day: 'Friday', slot: '09:30 - 10:30', semester: 'I', section: '1CSE2', subject: 'CAO', block: 'B-IV', room: '327' },
      { day: 'Friday', slot: '03:30 - 04:30', semester: 'I', section: '1CSE2', subject: 'CAO (T)', block: 'B-IV', room: '327' }
    ]
  },
  {
    facultyId: 'FAC-CSE-081',
    password: 'faculty123',
    name: 'Dr. U. Srinivas Balaji (USB)',
    phone: '',
    email: '',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'Central Workshop',
    timetable: [
      { day: 'Wednesday', slot: '09:30 - 11:30', semester: 'I', section: '1CSE3', subject: 'ILMS', block: 'Central Workshop', room: '' }
    ]
  },
  {
    facultyId: 'FAC-CSE-082',
    password: 'faculty123',
    name: 'Dr. G. Sai Kumar (GSK)',
    phone: '',
    email: '',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'Central Workshop',
    timetable: [
      { day: 'Wednesday', slot: '09:30 - 11:30', semester: 'I', section: '1CSE3', subject: 'ILMS', block: 'Central Workshop', room: '' }
    ]
  },
  {
    facultyId: 'FAC-CSE-083',
    password: 'faculty123',
    name: 'P. Anik Kumar (PAK)',
    phone: '',
    email: '',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'Central Workshop',
    timetable: [
      { day: 'Wednesday', slot: '09:30 - 11:30', semester: 'I', section: '1CSE3', subject: 'ILMS', block: 'Central Workshop', room: '' }
    ]
  },
  {
    facultyId: 'FAC-CSE-084',
    password: 'faculty123',
    name: 'Sri. D. Naveen Kumar (DNK)',
    phone: '',
    email: '',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 328',
    timetable: [
      { day: 'Monday', slot: '02:30 - 03:30', semester: 'I', section: '1CSE3', subject: 'PPSC – Programming for Problem Solving with C', block: 'B-IV', room: '328' },
      { day: 'Tuesday', slot: '03:30 - 04:30', semester: 'I', section: '1CSE3', subject: 'PPSC – Programming for Problem Solving with C', block: 'B-IV', room: '328' },
      { day: 'Wednesday', slot: '12:30 - 01:30', semester: 'I', section: '1CSE3', subject: 'PPSC (T) – Tutorial', block: 'B-IV', room: '328' },
      { day: 'Thursday', slot: '10:30 - 11:30', semester: 'I', section: '1CSE3', subject: 'PPSC – Programming for Problem Solving with C', block: 'B-IV', room: '328' },
      { day: 'Thursday', slot: '12:30 - 02:30', semester: 'I', section: '1CSE3', subject: 'PPSCL – PPSC Lab', block: 'B-IV', room: '202/B, Core Lab' }
    ]
  },
  {
    facultyId: 'FAC-CSE-085',
    password: 'faculty123',
    facultyCode: 'KVM',
    name: 'Dr. K. Venumadav (KVM)',
    phone: '',
    email: '',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 323',
    timetable: [
      { day: 'Tuesday', slot: '02:30 - 03:30', semester: 'I', section: '1CSE6', subject: 'DCODE', block: 'B-IV', room: '323' },
      { day: 'Wednesday', slot: '09:30 - 10:30', semester: 'I', section: '1CSE6', subject: 'DCODE', block: 'B-IV', room: '323' },
      { day: 'Wednesday', slot: '11:30 - 12:30', semester: 'I', section: '1CSE6', subject: 'DCODE (T)', block: 'B-IV', room: '323' },
      { day: 'Thursday', slot: '11:30 - 12:30', semester: 'I', section: '1CSE6', subject: 'DCODE', block: 'B-IV', room: '323' },
      { day: 'Thursday', slot: '12:30 - 01:30', semester: 'I', section: '1CSE6', subject: 'DCODE', block: 'B-IV', room: '323' }
    ]
  },
  {
    facultyId: 'FAC-CSE-086',
    password: 'faculty123',
    facultyCode: 'GA',
    name: 'Smt. G. Ashmitha (GA)',
    phone: '',
    email: '',
    designation: 'Not specified',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-V, Room 202',
    timetable: []
  },
  {
    facultyId: 'FAC-CSE-087',
    password: 'faculty123',
    facultyCode: 'TP',
    name: 'Smt. T. Parameshwari (TP)',
    phone: '',
    email: '',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-V, Room 302',
    timetable: []
  },
  {
    facultyId: 'FAC-CSE-088',
    password: 'faculty123',
    facultyCode: 'NJ',
    name: 'Ms. N. Jayashree (NJ)',
    phone: '',
    email: '',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 214',
    timetable: []
  },
  {
    facultyId: 'FAC-CSE-089',
    password: 'faculty123',
    facultyCode: 'DSD',
    name: 'Dhruti S. Das (DSD)',
    phone: '',
    email: '',
    designation: 'Assistant Professor',
    department: 'CSE',
    currentDepartment: 'Computer Science & Engineering',
    teachingDepartment: 'CSE',
    currentStatus: 'Available',
    currentLocation: 'B-IV, Room 126',
    timetable: []
  }
]

const sectionThreeCseOneEntries = [
  { facultyIds: ['FAC-CSE-022', 'FAC-CSE-084'], day: 'Monday', slot: '09:30 - 12:30', subject: 'ADS Lab – B1', block: 'B5', room: 'SE Lab 205' },
  { facultyIds: ['FAC-CSE-041', 'FAC-CSE-037', 'FAC-CSE-038'], day: 'Monday', slot: '09:30 - 12:30', subject: 'OOPJ Lab – B2', block: 'B2', room: 'Graphics Lab 217' },
  { facultyIds: ['FAC-CSE-075'], day: 'Monday', slot: '12:30 - 01:30', subject: 'MYC', block: 'B-V', room: '202' },
  { facultyIds: ['FAC-CSE-041'], day: 'Monday', slot: '02:30 - 03:30', subject: 'OOPJ', block: 'B-V', room: '202' },
  { facultyIds: ['FAC-CSE-022'], day: 'Monday', slot: '03:30 - 04:30', subject: 'ADS', block: 'B-V', room: '202' },
  { facultyIds: ['FAC-CSE-041', 'FAC-CSE-037', 'FAC-CSE-038'], day: 'Tuesday', slot: '09:30 - 12:30', subject: 'OOPJ Lab – B1', block: 'B2', room: 'Graphics Lab 217' },
  { facultyIds: ['FAC-CSE-022', 'FAC-CSE-084'], day: 'Tuesday', slot: '09:30 - 12:30', subject: 'ADS Lab – B2', block: 'B5', room: 'SE Lab 205' },
  { facultyIds: ['FAC-CSE-052'], day: 'Tuesday', slot: '12:30 - 01:30', subject: 'TOC (T)', block: 'B-V', room: '202' },
  { facultyIds: ['FAC-CSE-051'], day: 'Tuesday', slot: '02:30 - 03:30', subject: 'CN', block: 'B-V', room: '202' },
  { facultyIds: ['FAC-CSE-022'], day: 'Tuesday', slot: '03:30 - 04:30', subject: 'ADS (T)', block: 'B-V', room: '202' },
  { facultyIds: ['FAC-CSE-051'], day: 'Wednesday', slot: '09:30 - 10:30', subject: 'CN', block: 'B-V', room: '202' },
  { facultyIds: ['FAC-CSE-052'], day: 'Wednesday', slot: '10:30 - 11:30', subject: 'TOC', block: 'B-V', room: '202' },
  { facultyIds: ['FAC-CSE-022'], day: 'Wednesday', slot: '11:30 - 12:30', subject: 'ADS', block: 'B-V', room: '202' },
  { facultyIds: ['FAC-CSE-086'], day: 'Wednesday', slot: '12:30 - 01:30', subject: 'SE (T)', block: 'B-V', room: '202' },
  { facultyIds: ['FAC-CSE-086'], day: 'Wednesday', slot: '02:30 - 03:30', subject: 'SE', block: 'B-V', room: '202' },
  { facultyIds: ['FAC-CSE-041'], day: 'Wednesday', slot: '03:30 - 04:30', subject: 'OOPJ (T)', block: 'B-V', room: '202' },
  { facultyIds: ['FAC-CSE-043', 'FAC-CSE-032', 'FAC-CSE-059'], day: 'Thursday', slot: '09:30 - 11:30', subject: 'PSD-2 Lab – B1 & B2', block: 'B2', room: 'IBM Lab 213' },
  { facultyIds: ['FAC-CSE-041'], day: 'Thursday', slot: '11:30 - 12:30', subject: 'OOPJ', block: 'B-V', room: '202' },
  { facultyIds: ['FAC-CSE-051'], day: 'Thursday', slot: '12:30 - 01:30', subject: 'CN (T)', block: 'B-V', room: '202' },
  { facultyIds: ['FAC-CSE-052'], day: 'Thursday', slot: '02:30 - 03:30', subject: 'TOC', block: 'B-V', room: '202' },
  { facultyIds: ['FAC-CSE-086'], day: 'Thursday', slot: '03:30 - 04:30', subject: 'SE', block: 'B-V', room: '202' },
  { facultyIds: ['FAC-CSE-052'], day: 'Friday', slot: '09:30 - 10:30', subject: 'TOC', block: 'B-V', room: '202' },
  { facultyIds: ['FAC-CSE-022'], day: 'Friday', slot: '10:30 - 11:30', subject: 'ADS', block: 'B-V', room: '202' },
  { facultyIds: ['FAC-CSE-051'], day: 'Friday', slot: '11:30 - 12:30', subject: 'CN', block: 'B-V', room: '202' },
  { facultyIds: ['FAC-CSE-077'], day: 'Friday', slot: '12:30 - 01:30', subject: 'Association Hour', block: 'B-V', room: '202' },
  { facultyIds: ['FAC-CSE-086'], day: 'Friday', slot: '02:30 - 03:30', subject: 'SE', block: 'B-V', room: '202' },
  { facultyIds: ['FAC-CSE-041'], day: 'Friday', slot: '03:30 - 04:30', subject: 'OOPJ', block: 'B-V', room: '202' }
]

sampleFaculty.forEach((faculty) => {
  faculty.timetable = faculty.timetable.filter((entry) => !(entry.semester === 'III' && entry.section === '3CSE1'))
})

sectionThreeCseOneEntries.forEach(({ facultyIds, ...entry }) => {
  facultyIds.forEach((facultyId) => {
    const faculty = sampleFaculty.find((member) => member.facultyId === facultyId)
    if (!faculty) throw new Error(`Missing faculty profile for ${facultyId}`)
    faculty.timetable.push({ semester: 'III', section: '3CSE1', ...entry })
  })
})

const sectionThreeCseTwoEntries = [
  { facultyIds: ['FAC-CSE-053'], day: 'Monday', slot: '09:30 - 10:30', subject: 'TOC', block: 'B-V', room: '204' },
  { facultyIds: ['FAC-CSE-040'], day: 'Monday', slot: '10:30 - 11:30', subject: 'ADS', block: 'B-V', room: '204' },
  { facultyIds: ['FAC-CSE-024'], day: 'Monday', slot: '11:30 - 12:30', subject: 'OOPJ', block: 'B-V', room: '204' },
  { facultyIds: ['FAC-CSE-075'], day: 'Monday', slot: '12:30 - 01:30', subject: 'MYC', block: 'B-V', room: '204' },
  { facultyIds: ['FAC-CSE-033'], day: 'Monday', slot: '02:30 - 03:30', subject: 'SE', block: 'B-V', room: '204' },
  { facultyIds: ['FAC-CSE-048'], day: 'Monday', slot: '03:30 - 04:30', subject: 'CN', block: 'B-V', room: '204' },
  { facultyIds: ['FAC-CSE-048'], day: 'Tuesday', slot: '09:30 - 10:30', subject: 'CN', block: 'B-V', room: '204' },
  { facultyIds: ['FAC-CSE-040'], day: 'Tuesday', slot: '10:30 - 11:30', subject: 'ADS', block: 'B-V', room: '204' },
  { facultyIds: ['FAC-CSE-049', 'FAC-CSE-021', 'FAC-CSE-042'], day: 'Tuesday', slot: '11:30 - 01:30', subject: 'PSD-2 LAB', block: 'B2', room: 'IBM Lab 213' },
  { facultyIds: ['FAC-CSE-048'], day: 'Tuesday', slot: '02:30 - 03:30', subject: 'CN (T)', block: 'B-V', room: '204' },
  { facultyIds: ['FAC-CSE-024'], day: 'Tuesday', slot: '03:30 - 04:30', subject: 'OOPJ (T)', block: 'B-V', room: '204' },
  { facultyIds: ['FAC-CSE-040', 'FAC-CSE-049', 'FAC-CSE-064'], day: 'Wednesday', slot: '09:30 - 12:30', subject: 'ADS LAB', block: 'B5', room: 'VC Lab 301' },
  { facultyIds: ['FAC-CSE-033'], day: 'Wednesday', slot: '12:30 - 01:30', subject: 'SE (T)', block: 'B-V', room: '204' },
  { facultyIds: ['FAC-CSE-024'], day: 'Wednesday', slot: '02:30 - 03:30', subject: 'OOPJ', block: 'B-V', room: '204' },
  { facultyIds: ['FAC-CSE-053'], day: 'Wednesday', slot: '03:30 - 04:30', subject: 'TOC', block: 'B-V', room: '204' },
  { facultyIds: ['FAC-CSE-024', 'FAC-CSE-050', 'FAC-CSE-033'], day: 'Thursday', slot: '09:30 - 12:30', subject: 'OOPJ LAB', block: 'B5', room: 'VC Lab 301' },
  { facultyIds: ['FAC-CSE-040'], day: 'Thursday', slot: '12:30 - 01:30', subject: 'ADS (T)', block: 'B-V', room: '204' },
  { facultyIds: ['FAC-CSE-048'], day: 'Thursday', slot: '02:30 - 03:30', subject: 'CN', block: 'B-V', room: '204' },
  { facultyIds: ['FAC-CSE-053'], day: 'Thursday', slot: '03:30 - 04:30', subject: 'TOC (T)', block: 'B-V', room: '204' },
  { facultyIds: ['FAC-CSE-033'], day: 'Friday', slot: '09:30 - 10:30', subject: 'SE', block: 'B-V', room: '204' },
  { facultyIds: ['FAC-CSE-053'], day: 'Friday', slot: '10:30 - 11:30', subject: 'TOC', block: 'B-V', room: '204' },
  { facultyIds: ['FAC-CSE-024'], day: 'Friday', slot: '11:30 - 12:30', subject: 'OOPJ', block: 'B-V', room: '204' },
  { facultyIds: ['FAC-CSE-077'], day: 'Friday', slot: '12:30 - 01:30', subject: 'Association Hour', block: 'B-V', room: '204' },
  { facultyIds: ['FAC-CSE-040'], day: 'Friday', slot: '02:30 - 03:30', subject: 'ADS', block: 'B-V', room: '204' },
  { facultyIds: ['FAC-CSE-033'], day: 'Friday', slot: '03:30 - 04:30', subject: 'SE', block: 'B-V', room: '204' }
]

sampleFaculty.forEach((faculty) => {
  faculty.timetable = faculty.timetable.filter((entry) => !(entry.semester === 'III' && entry.section === '3CSE2'))
})

sectionThreeCseTwoEntries.forEach(({ facultyIds, ...entry }) => {
  facultyIds.forEach((facultyId) => {
    const faculty = sampleFaculty.find((member) => member.facultyId === facultyId)
    if (!faculty) throw new Error(`Missing faculty profile for ${facultyId}`)
    faculty.timetable.push({ semester: 'III', section: '3CSE2', ...entry })
  })
})

const sectionThreeCseThreeEntries = [
  { facultyIds: ['FAC-CSE-012'], day: 'Monday', slot: '09:30 - 12:30', subject: 'ADS Lab', block: 'B5', room: 'WT Lab 201' },
  { facultyIds: ['FAC-CSE-075'], day: 'Monday', slot: '12:30 - 01:30', subject: 'MYC', block: 'B-V', room: '302' },
  { facultyIds: ['FAC-CSE-038'], day: 'Monday', slot: '02:30 - 03:30', subject: 'OOPJ', block: 'B-V', room: '302' },
  { facultyIds: ['FAC-CSE-051'], day: 'Monday', slot: '03:30 - 04:30', subject: 'TOC', block: 'B-V', room: '302' },
  { facultyIds: ['FAC-CSE-038'], day: 'Tuesday', slot: '09:30 - 12:30', subject: 'OOPJ Lab', block: 'B5', room: 'WT Lab 201' },
  { facultyIds: ['FAC-CSE-051'], day: 'Tuesday', slot: '12:30 - 01:30', subject: 'TOC (T)', block: 'B-V', room: '302' },
  { facultyIds: ['FAC-CSE-035'], day: 'Tuesday', slot: '02:30 - 03:30', subject: 'SE', block: 'B-V', room: '302' },
  { facultyIds: ['FAC-CSE-087'], day: 'Tuesday', slot: '03:30 - 04:30', subject: 'CN', block: 'B-V', room: '302' },
  { facultyIds: ['FAC-CSE-087'], day: 'Wednesday', slot: '09:30 - 10:30', subject: 'CN', block: 'B-V', room: '302' },
  { facultyIds: ['FAC-CSE-035'], day: 'Wednesday', slot: '10:30 - 11:30', subject: 'SE', block: 'B-V', room: '302' },
  { facultyIds: ['FAC-CSE-034'], day: 'Wednesday', slot: '11:30 - 01:30', subject: 'PSD-2 Lab', block: 'B2', room: 'IBM Lab 213' },
  { facultyIds: ['FAC-CSE-012'], day: 'Wednesday', slot: '02:30 - 03:30', subject: 'ADS', block: 'B-V', room: '302' },
  { facultyIds: ['FAC-CSE-087'], day: 'Wednesday', slot: '03:30 - 04:30', subject: 'CN (T)', block: 'B-V', room: '302' },
  { facultyIds: ['FAC-CSE-012'], day: 'Thursday', slot: '09:30 - 10:30', subject: 'ADS', block: 'B-V', room: '302' },
  { facultyIds: ['FAC-CSE-051'], day: 'Thursday', slot: '10:30 - 11:30', subject: 'TOC', block: 'B-V', room: '302' },
  { facultyIds: ['FAC-CSE-087'], day: 'Thursday', slot: '11:30 - 12:30', subject: 'CN', block: 'B-V', room: '302' },
  { facultyIds: ['FAC-CSE-012'], day: 'Thursday', slot: '12:30 - 01:30', subject: 'ADS (T)', block: 'B-V', room: '302' },
  { facultyIds: ['FAC-CSE-038'], day: 'Thursday', slot: '02:30 - 03:30', subject: 'OOPJ', block: 'B-V', room: '302' },
  { facultyIds: ['FAC-CSE-038'], day: 'Thursday', slot: '03:30 - 04:30', subject: 'OOPJ (T)', block: 'B-V', room: '302' },
  { facultyIds: ['FAC-CSE-051'], day: 'Friday', slot: '09:30 - 10:30', subject: 'TOC', block: 'B-V', room: '302' },
  { facultyIds: ['FAC-CSE-038'], day: 'Friday', slot: '10:30 - 11:30', subject: 'OOPJ', block: 'B-V', room: '302' },
  { facultyIds: ['FAC-CSE-035'], day: 'Friday', slot: '11:30 - 12:30', subject: 'SE', block: 'B-V', room: '302' },
  { facultyIds: ['FAC-CSE-077'], day: 'Friday', slot: '12:30 - 01:30', subject: 'Association Hour', block: 'B-V', room: '302' },
  { facultyIds: ['FAC-CSE-012'], day: 'Friday', slot: '02:30 - 03:30', subject: 'ADS', block: 'B-V', room: '302' },
  { facultyIds: ['FAC-CSE-035'], day: 'Friday', slot: '03:30 - 04:30', subject: 'SE (T)', block: 'B-V', room: '302' }
]

const sectionThreeCseFourEntries = [
  { facultyIds: ['FAC-CSE-061'], day: 'Monday', slot: '09:30 - 10:30', subject: 'TOC', block: 'B-V', room: '304' },
  { facultyIds: ['FAC-CSE-037'], day: 'Monday', slot: '10:30 - 11:30', subject: 'OOPJ', block: 'B-V', room: '304' },
  { facultyIds: ['FAC-CSE-063'], day: 'Monday', slot: '11:30 - 12:30', subject: 'ADS', block: 'B-V', room: '304' },
  { facultyIds: ['FAC-CSE-075'], day: 'Monday', slot: '12:30 - 01:30', subject: 'MYC', block: 'B-V', room: '304' },
  { facultyIds: ['FAC-CSE-023'], day: 'Monday', slot: '02:30 - 03:30', subject: 'SE', block: 'B-V', room: '304' },
  { facultyIds: ['FAC-CSE-061'], day: 'Monday', slot: '03:30 - 04:30', subject: 'TOC (T)', block: 'B-V', room: '304' },
  { facultyIds: ['FAC-CSE-065'], day: 'Tuesday', slot: '09:30 - 10:30', subject: 'CN', block: 'B-V', room: '304' },
  { facultyIds: ['FAC-CSE-063'], day: 'Tuesday', slot: '10:30 - 11:30', subject: 'ADS', block: 'B-V', room: '304' },
  { facultyIds: ['FAC-CSE-061'], day: 'Tuesday', slot: '11:30 - 12:30', subject: 'TOC', block: 'B-V', room: '304' },
  { facultyIds: ['FAC-CSE-037'], day: 'Tuesday', slot: '12:30 - 01:30', subject: 'OOPJ (T)', block: 'B-V', room: '304' },
  { facultyIds: ['FAC-CSE-037'], day: 'Tuesday', slot: '02:30 - 03:30', subject: 'OOPJ', block: 'B-V', room: '304' },
  { facultyIds: ['FAC-CSE-065'], day: 'Tuesday', slot: '03:30 - 04:30', subject: 'CN (T)', block: 'B-V', room: '304' },
  { facultyIds: ['FAC-CSE-063'], day: 'Wednesday', slot: '09:30 - 12:30', subject: 'ADS Lab', block: 'B5', room: 'WT Lab 201' },
  { facultyIds: ['FAC-CSE-065'], day: 'Wednesday', slot: '12:30 - 01:30', subject: 'CN', block: 'B-V', room: '304' },
  { facultyIds: ['FAC-CSE-061'], day: 'Wednesday', slot: '02:30 - 03:30', subject: 'TOC', block: 'B-V', room: '304' },
  { facultyIds: ['FAC-CSE-037'], day: 'Wednesday', slot: '03:30 - 04:30', subject: 'OOPJ', block: 'B-V', room: '304' },
  { facultyIds: ['FAC-CSE-023'], day: 'Thursday', slot: '09:30 - 10:30', subject: 'SE', block: 'B-V', room: '304' },
  { facultyIds: ['FAC-CSE-063'], day: 'Thursday', slot: '10:30 - 11:30', subject: 'ADS', block: 'B-V', room: '304' },
  { facultyIds: ['FAC-CSE-035'], day: 'Thursday', slot: '11:30 - 01:30', subject: 'PSD-2 Lab', block: 'B2', room: 'IBM Lab 213' },
  { facultyIds: ['FAC-CSE-065'], day: 'Thursday', slot: '02:30 - 03:30', subject: 'CN', block: 'B-V', room: '304' },
  { facultyIds: ['FAC-CSE-023'], day: 'Thursday', slot: '03:30 - 04:30', subject: 'SE (T)', block: 'B-V', room: '304' },
  { facultyIds: ['FAC-CSE-037'], day: 'Friday', slot: '09:30 - 12:30', subject: 'OOPJ Lab', block: 'B5', room: 'WT Lab 201' },
  { facultyIds: ['FAC-CSE-077'], day: 'Friday', slot: '12:30 - 01:30', subject: 'Association Hour', block: 'B-V', room: '304' },
  { facultyIds: ['FAC-CSE-023'], day: 'Friday', slot: '02:30 - 03:30', subject: 'SE', block: 'B-V', room: '304' },
  { facultyIds: ['FAC-CSE-063'], day: 'Friday', slot: '03:30 - 04:30', subject: 'ADS (T)', block: 'B-V', room: '304' }
]

const sectionThreeCseFiveEntries = [
  { facultyIds: ['FAC-CSE-023'], day: 'Monday', slot: '09:30 - 10:30', subject: 'CN', block: 'B-IV', room: '213' },
  { facultyIds: ['FAC-CSE-047'], day: 'Monday', slot: '10:30 - 11:30', subject: 'SE', block: 'B-IV', room: '213' },
  { facultyIds: ['FAC-CSE-034'], day: 'Monday', slot: '11:30 - 12:30', subject: 'OOPJ', block: 'B-IV', room: '213' },
  { facultyIds: ['FAC-CSE-075'], day: 'Monday', slot: '12:30 - 01:30', subject: 'MYC', block: 'B-IV', room: '213' },
  { facultyIds: ['FAC-CSE-064'], day: 'Monday', slot: '02:30 - 03:30', subject: 'ADS', block: 'B-IV', room: '213' },
  { facultyIds: ['FAC-CSE-034'], day: 'Monday', slot: '03:30 - 04:30', subject: 'OOPJ (T)', block: 'B-IV', room: '213' },
  { facultyIds: ['FAC-CSE-050'], day: 'Tuesday', slot: '09:30 - 10:30', subject: 'TOC', block: 'B-IV', room: '213' },
  { facultyIds: ['FAC-CSE-064'], day: 'Tuesday', slot: '10:30 - 11:30', subject: 'ADS', block: 'B-IV', room: '213' },
  { facultyIds: ['FAC-CSE-034'], day: 'Tuesday', slot: '11:30 - 12:30', subject: 'OOPJ', block: 'B-IV', room: '213' },
  { facultyIds: ['FAC-CSE-050'], day: 'Tuesday', slot: '12:30 - 01:30', subject: 'TOC (T)', block: 'B-IV', room: '213' },
  { facultyIds: ['FAC-CSE-047'], day: 'Tuesday', slot: '02:30 - 03:30', subject: 'SE', block: 'B-IV', room: '213' },
  { facultyIds: ['FAC-CSE-023'], day: 'Tuesday', slot: '03:30 - 04:30', subject: 'CN', block: 'B-IV', room: '213' },
  { facultyIds: ['FAC-CSE-045'], day: 'Wednesday', slot: '09:30 - 11:30', subject: 'PSD-2 Lab', block: 'B2', room: 'IBM Lab 213' },
  { facultyIds: ['FAC-CSE-050'], day: 'Wednesday', slot: '11:30 - 12:30', subject: 'TOC', block: 'B-IV', room: '213' },
  { facultyIds: ['FAC-CSE-064'], day: 'Wednesday', slot: '12:30 - 01:30', subject: 'ADS (T)', block: 'B-IV', room: '213' },
  { facultyIds: ['FAC-CSE-023'], day: 'Wednesday', slot: '02:30 - 03:30', subject: 'CN', block: 'B-IV', room: '213' },
  { facultyIds: ['FAC-CSE-023'], day: 'Wednesday', slot: '03:30 - 04:30', subject: 'CN (T)', block: 'B-IV', room: '213' },
  { facultyIds: ['FAC-CSE-034'], day: 'Thursday', slot: '09:30 - 12:30', subject: 'OOPJ Lab', block: 'B5', room: 'WT Lab 201' },
  { facultyIds: ['FAC-CSE-050'], day: 'Thursday', slot: '12:30 - 01:30', subject: 'TOC', block: 'B-IV', room: '213' },
  { facultyIds: ['FAC-CSE-047'], day: 'Thursday', slot: '02:30 - 03:30', subject: 'SE', block: 'B-IV', room: '213' },
  { facultyIds: ['FAC-CSE-034'], day: 'Thursday', slot: '03:30 - 04:30', subject: 'OOPJ', block: 'B-IV', room: '213' },
  { facultyIds: ['FAC-CSE-064'], day: 'Friday', slot: '09:30 - 12:30', subject: 'ADS Lab', block: 'B5', room: 'VC Lab 301' },
  { facultyIds: ['FAC-CSE-077'], day: 'Friday', slot: '12:30 - 01:30', subject: 'Association Hour', block: 'B-IV', room: '213' },
  { facultyIds: ['FAC-CSE-064'], day: 'Friday', slot: '02:30 - 03:30', subject: 'ADS', block: 'B-IV', room: '213' },
  { facultyIds: ['FAC-CSE-047'], day: 'Friday', slot: '03:30 - 04:30', subject: 'SE (T)', block: 'B-IV', room: '213' }
]

const sectionThreeCseSixEntries = [
  { facultyIds: ['FAC-CSE-059'], day: 'Monday', slot: '09:30 - 12:30', subject: 'ADS Lab', block: 'B5', room: 'VC Lab 301' },
  { facultyIds: ['FAC-CSE-075'], day: 'Monday', slot: '12:30 - 01:30', subject: 'MYC', block: 'B-IV', room: '214' },
  { facultyIds: ['FAC-CSE-059'], day: 'Monday', slot: '02:30 - 03:30', subject: 'ADS', block: 'B-IV', room: '214' },
  { facultyIds: ['FAC-CSE-013'], day: 'Monday', slot: '03:30 - 04:30', subject: 'OOPJ (T)', block: 'B-IV', room: '214' },
  { facultyIds: ['FAC-CSE-013'], day: 'Tuesday', slot: '09:30 - 12:30', subject: 'OOPJ Lab', block: 'B5', room: 'VC Lab 301' },
  { facultyIds: ['FAC-CSE-040'], day: 'Tuesday', slot: '12:30 - 01:30', subject: 'TOC (T)', block: 'B-IV', room: '214' },
  { facultyIds: ['FAC-CSE-013'], day: 'Tuesday', slot: '02:30 - 03:30', subject: 'OOPJ', block: 'B-IV', room: '214' },
  { facultyIds: ['FAC-CSE-088'], day: 'Tuesday', slot: '03:30 - 04:30', subject: 'SE (T)', block: 'B-IV', room: '214' },
  { facultyIds: ['FAC-CSE-042'], day: 'Wednesday', slot: '09:30 - 10:30', subject: 'CN', block: 'B-IV', room: '214' },
  { facultyIds: ['FAC-CSE-088'], day: 'Wednesday', slot: '10:30 - 11:30', subject: 'SE', block: 'B-IV', room: '214' },
  { facultyIds: ['FAC-CSE-059'], day: 'Wednesday', slot: '11:30 - 12:30', subject: 'ADS', block: 'B-IV', room: '214' },
  { facultyIds: ['FAC-CSE-013'], day: 'Wednesday', slot: '12:30 - 01:30', subject: 'OOPJ', block: 'B-IV', room: '214' },
  { facultyIds: ['FAC-CSE-040'], day: 'Wednesday', slot: '02:30 - 03:30', subject: 'TOC', block: 'B-IV', room: '214' },
  { facultyIds: ['FAC-CSE-059'], day: 'Wednesday', slot: '03:30 - 04:30', subject: 'ADS (T)', block: 'B-IV', room: '214' },
  { facultyIds: ['FAC-CSE-040'], day: 'Thursday', slot: '09:30 - 10:30', subject: 'TOC', block: 'B-IV', room: '214' },
  { facultyIds: ['FAC-CSE-013'], day: 'Thursday', slot: '10:30 - 11:30', subject: 'OOPJ', block: 'B-IV', room: '214' },
  { facultyIds: ['FAC-CSE-088'], day: 'Thursday', slot: '11:30 - 12:30', subject: 'SE', block: 'B-IV', room: '214' },
  { facultyIds: ['FAC-CSE-042'], day: 'Thursday', slot: '12:30 - 01:30', subject: 'CN (T)', block: 'B-IV', room: '214' },
  { facultyIds: ['FAC-CSE-042'], day: 'Thursday', slot: '02:30 - 03:30', subject: 'CN', block: 'B-IV', room: '214' },
  { facultyIds: ['FAC-CSE-059'], day: 'Thursday', slot: '03:30 - 04:30', subject: 'ADS', block: 'B-IV', room: '214' },
  { facultyIds: ['FAC-CSE-036'], day: 'Friday', slot: '09:30 - 11:30', subject: 'PSD-2 Lab', block: 'B2', room: 'IBM Lab 213' },
  { facultyIds: ['FAC-CSE-040'], day: 'Friday', slot: '11:30 - 12:30', subject: 'TOC', block: 'B-IV', room: '214' },
  { facultyIds: ['FAC-CSE-077'], day: 'Friday', slot: '12:30 - 01:30', subject: 'Association Hour', block: 'B-IV', room: '214' },
  { facultyIds: ['FAC-CSE-042'], day: 'Friday', slot: '02:30 - 03:30', subject: 'CN', block: 'B-IV', room: '214' },
  { facultyIds: ['FAC-CSE-088'], day: 'Friday', slot: '03:30 - 04:30', subject: 'SE', block: 'B-IV', room: '214' }
]

const sectionThreeCseEntries = [
  ['3CSE3', sectionThreeCseThreeEntries],
  ['3CSE4', sectionThreeCseFourEntries],
  ['3CSE5', sectionThreeCseFiveEntries],
  ['3CSE6', sectionThreeCseSixEntries]
]

sectionThreeCseEntries.forEach(([section, entries]) => {
  sampleFaculty.forEach((faculty) => {
    faculty.timetable = faculty.timetable.filter((entry) => !(entry.semester === 'III' && entry.section === section))
  })

  entries.forEach(({ facultyIds, ...entry }) => {
    facultyIds.forEach((facultyId) => {
      const faculty = sampleFaculty.find((member) => member.facultyId === facultyId)
      if (!faculty) throw new Error(`Missing faculty profile for ${facultyId}`)
      faculty.timetable.push({ semester: 'III', section, ...entry })
    })
  })
})

const semesterFiveCseEntries = {
  '5CSE1': [
    { facultyIds: ['FAC-CSE-049'], day: 'Monday', slot: '09:30 - 10:30', subject: 'DAA', block: 'B-IV', room: '014' },
    { facultyIds: ['FAC-CSE-045'], day: 'Monday', slot: '10:30 - 11:30', subject: 'EITK', block: 'B-IV', room: '014' },
    { facultyIds: ['FAC-CSE-053'], day: 'Monday', slot: '11:30 - 12:30', subject: 'ML', block: 'B-IV', room: '014' },
    { facultyIds: ['FAC-CSE-075'], day: 'Monday', slot: '12:30 - 01:30', subject: 'MYC', block: 'B-IV', room: '014' },
    { facultyIds: ['FAC-CSE-047'], day: 'Monday', slot: '02:30 - 04:30', subject: 'FSD Lab', block: 'B5', room: 'VC Lab 301' },
    { facultyIds: ['FAC-CSE-053'], day: 'Tuesday', slot: '09:30 - 10:30', subject: 'ML', block: 'B-IV', room: '014' },
    { facultyIds: ['FAC-CSE-047'], day: 'Tuesday', slot: '10:30 - 11:30', subject: 'FSD', block: 'B-IV', room: '014' },
    { facultyIds: ['FAC-CSE-056'], day: 'Tuesday', slot: '11:30 - 01:30', subject: 'TE', block: 'B-IV', room: '308/309' },
    { facultyIds: ['FAC-CSE-053'], day: 'Tuesday', slot: '02:30 - 04:30', subject: 'ML Lab', block: 'B5', room: 'WT Lab 201' },
    { facultyIds: ['FAC-CSE-047'], day: 'Wednesday', slot: '09:30 - 10:30', subject: 'FSD', block: 'B-IV', room: '014' },
    { facultyIds: ['FAC-CSE-018'], day: 'Wednesday', slot: '10:30 - 11:30', subject: 'DT', block: 'B-IV', room: '014' },
    { facultyIds: ['FAC-CSE-053'], day: 'Wednesday', slot: '11:30 - 12:30', subject: 'ML (T)', block: 'B-IV', room: '014' },
    { facultyIds: ['FAC-CSE-018'], day: 'Wednesday', slot: '12:30 - 01:30', subject: 'DT (T)', block: 'B-IV', room: '014' },
    { facultyIds: ['FAC-CSE-049'], day: 'Wednesday', slot: '02:30 - 03:30', subject: 'DAA', block: 'B-IV', room: '014' },
    { facultyIds: ['FAC-CSE-045'], day: 'Wednesday', slot: '03:30 - 04:30', subject: 'EITK', block: 'B-IV', room: '014' },
    { facultyIds: ['FAC-CSE-058', 'FAC-CSE-046', 'FAC-CSE-064'], day: 'Thursday', slot: '09:30 - 11:30', subject: 'QC', block: 'B-II', room: 'New Seminar Hall', sharedFaculty: 'W / PVK / SW' },
    { facultyIds: ['FAC-CSE-049'], day: 'Thursday', slot: '11:30 - 12:30', subject: 'DAA (T)', block: 'B-IV', room: '014' },
    { facultyIds: ['FAC-CSE-047'], day: 'Thursday', slot: '12:30 - 01:30', subject: 'FSD (T)', block: 'B-IV', room: '014' },
    { facultyIds: ['FAC-CSE-084', 'FAC-CSE-015'], day: 'Thursday', slot: '02:30 - 04:30', subject: 'SEMINAR', block: 'B-IV', room: '014', sharedFaculty: 'DNK / NDPK' },
    { facultyIds: ['FAC-CSE-018'], day: 'Friday', slot: '09:30 - 10:30', subject: 'DT', block: 'B-IV', room: '014' },
    { facultyIds: ['FAC-CSE-049'], day: 'Friday', slot: '10:30 - 11:30', subject: 'DAA', block: 'B-IV', room: '014' },
    { facultyIds: ['FAC-CSE-047'], day: 'Friday', slot: '11:30 - 12:30', subject: 'FSD', block: 'B-IV', room: '014' },
    { facultyIds: ['FAC-CSE-077'], day: 'Friday', slot: '12:30 - 01:30', subject: 'Association Hour', block: 'B-IV', room: '014' },
    { facultyIds: ['FAC-CSE-053'], day: 'Friday', slot: '02:30 - 03:30', subject: 'ML', block: 'B-IV', room: '014' },
    { facultyIds: ['FAC-CSE-058', 'FAC-CSE-046', 'FAC-CSE-064'], day: 'Friday', slot: '03:30 - 04:30', subject: 'QC', block: 'B-IV', room: '014', sharedFaculty: 'W / PVK / SW' }
  ],
  '5CSE2': [
    { facultyIds: ['FAC-CSE-060'], day: 'Monday', slot: '09:30 - 10:30', subject: 'DAA', block: 'B-IV', room: '126' },
    { facultyIds: ['FAC-CSE-050'], day: 'Monday', slot: '10:30 - 11:30', subject: 'FSD', block: 'B-IV', room: '126' },
    { facultyIds: ['FAC-CSE-089'], day: 'Monday', slot: '11:30 - 12:30', subject: 'DT', block: 'B-IV', room: '126' },
    { facultyIds: ['FAC-CSE-075'], day: 'Monday', slot: '12:30 - 01:30', subject: 'MYC', block: 'B-IV', room: '126' },
    { facultyIds: ['FAC-CSE-060'], day: 'Monday', slot: '02:30 - 03:30', subject: 'DAA', block: 'B-IV', room: '126' },
    { facultyIds: ['FAC-CSE-050'], day: 'Monday', slot: '03:30 - 04:30', subject: 'FSD (T)', block: 'B-IV', room: '126' },
    { facultyIds: ['FAC-CSE-025'], day: 'Tuesday', slot: '09:30 - 10:30', subject: 'ML', block: 'B-IV', room: '126' },
    { facultyIds: ['FAC-CSE-043'], day: 'Tuesday', slot: '10:30 - 11:30', subject: 'EITK', block: 'B-IV', room: '126' },
    { facultyIds: ['FAC-CSE-050'], day: 'Tuesday', slot: '11:30 - 12:30', subject: 'FSD', block: 'B-IV', room: '126' },
    { facultyIds: ['FAC-CSE-060'], day: 'Tuesday', slot: '12:30 - 01:30', subject: 'DAA (T)', block: 'B-IV', room: '126' },
    { facultyIds: ['FAC-CSE-050'], day: 'Tuesday', slot: '02:30 - 04:30', subject: 'FSD Lab', block: 'B5', room: 'VC Lab 301' },
    { facultyIds: ['FAC-CSE-056'], day: 'Wednesday', slot: '09:30 - 11:30', subject: 'TE', block: 'B-IV', room: '308/309' },
    { facultyIds: ['FAC-CSE-060'], day: 'Wednesday', slot: '11:30 - 12:30', subject: 'DAA', block: 'B-IV', room: '126' },
    { facultyIds: ['FAC-CSE-025'], day: 'Wednesday', slot: '12:30 - 01:30', subject: 'ML (T)', block: 'B-IV', room: '126' },
    { facultyIds: ['FAC-CSE-025'], day: 'Wednesday', slot: '02:30 - 04:30', subject: 'ML Lab', block: 'B5', room: 'WT Lab 201' },
    { facultyIds: ['FAC-CSE-058', 'FAC-CSE-046', 'FAC-CSE-064'], day: 'Thursday', slot: '09:30 - 11:30', subject: 'QC', block: 'B-II', room: 'New Seminar Hall', sharedFaculty: 'W / PVK / SW' },
    { facultyIds: ['FAC-CSE-025'], day: 'Thursday', slot: '11:30 - 12:30', subject: 'ML', block: 'B-IV', room: '126' },
    { facultyIds: ['FAC-CSE-089'], day: 'Thursday', slot: '12:30 - 01:30', subject: 'DT (T)', block: 'B-IV', room: '126' },
    { facultyIds: ['FAC-CSE-066', 'FAC-CSE-021'], day: 'Thursday', slot: '02:30 - 04:30', subject: 'SEMINAR', block: 'B-IV', room: '126', sharedFaculty: 'RK / CSK' },
    { facultyIds: ['FAC-CSE-058', 'FAC-CSE-046', 'FAC-CSE-064'], day: 'Friday', slot: '09:30 - 10:30', subject: 'QC', block: 'B-IV', room: '126', sharedFaculty: 'W / PVK / SW' },
    { facultyIds: ['FAC-CSE-050'], day: 'Friday', slot: '10:30 - 11:30', subject: 'FSD', block: 'B-IV', room: '126' },
    { facultyIds: ['FAC-CSE-089'], day: 'Friday', slot: '11:30 - 12:30', subject: 'DT', block: 'B-IV', room: '126' },
    { facultyIds: ['FAC-CSE-077'], day: 'Friday', slot: '12:30 - 01:30', subject: 'Association Hour', block: 'B-IV', room: '126' },
    { facultyIds: ['FAC-CSE-025'], day: 'Friday', slot: '02:30 - 03:30', subject: 'ML', block: 'B-IV', room: '126' },
    { facultyIds: ['FAC-CSE-043'], day: 'Friday', slot: '03:30 - 04:30', subject: 'EITK', block: 'B-IV', room: '126' }
  ],
  '5CSE3': [
    { facultyIds: ['FAC-CSE-046'], day: 'Monday', slot: '09:30 - 10:30', subject: 'DAA', block: 'B-IV', room: '127' },
    { facultyIds: ['FAC-CSE-019'], day: 'Monday', slot: '10:30 - 11:30', subject: 'DT', block: 'B-IV', room: '127' },
    { facultyIds: ['FAC-CSE-058'], day: 'Monday', slot: '11:30 - 12:30', subject: 'FSD', block: 'B-IV', room: '127' },
    { facultyIds: ['FAC-CSE-075'], day: 'Monday', slot: '12:30 - 01:30', subject: 'MYC', block: 'B-IV', room: '127' },
    { facultyIds: ['FAC-CSE-046'], day: 'Monday', slot: '02:30 - 03:30', subject: 'DAA (T)', block: 'B-IV', room: '127' },
    { facultyIds: ['FAC-CSE-058'], day: 'Monday', slot: '03:30 - 04:30', subject: 'FSD (T)', block: 'B-IV', room: '127' },
    { facultyIds: ['FAC-CSE-080'], day: 'Tuesday', slot: '09:30 - 10:30', subject: 'ML', block: 'B-IV', room: '127' },
    { facultyIds: ['FAC-CSE-019'], day: 'Tuesday', slot: '10:30 - 11:30', subject: 'DT', block: 'B-IV', room: '127' },
    { facultyIds: ['FAC-CSE-046'], day: 'Tuesday', slot: '11:30 - 12:30', subject: 'DAA', block: 'B-IV', room: '127' },
    { facultyIds: ['FAC-CSE-035'], day: 'Tuesday', slot: '12:30 - 01:30', subject: 'EITK', block: 'B-IV', room: '127' },
    { facultyIds: ['FAC-CSE-054', 'FAC-CSE-084', 'FAC-CSE-067'], day: 'Tuesday', slot: '02:30 - 03:30', subject: 'QC', block: 'B-IV', room: '127', sharedFaculty: 'SAM / DNK / PDT' },
    { facultyIds: ['FAC-CSE-058'], day: 'Tuesday', slot: '03:30 - 04:30', subject: 'FSD', block: 'B-IV', room: '127' },
    { facultyIds: ['FAC-CSE-058'], day: 'Wednesday', slot: '09:30 - 10:30', subject: 'FSD', block: 'B-IV', room: '127' },
    { facultyIds: ['FAC-CSE-080'], day: 'Wednesday', slot: '10:30 - 11:30', subject: 'ML', block: 'B-IV', room: '127' },
    { facultyIds: ['FAC-CSE-057'], day: 'Wednesday', slot: '11:30 - 01:30', subject: 'TE', block: 'B-IV', room: '308/309' },
    { facultyIds: ['FAC-CSE-063', 'FAC-CSE-033'], day: 'Wednesday', slot: '02:30 - 04:30', subject: 'SEMINAR', block: 'B-IV', room: '127', sharedFaculty: 'BV / BDR' },
    { facultyIds: ['FAC-CSE-035'], day: 'Thursday', slot: '09:30 - 10:30', subject: 'EITK', block: 'B-IV', room: '127' },
    { facultyIds: ['FAC-CSE-080'], day: 'Thursday', slot: '10:30 - 11:30', subject: 'ML', block: 'B-IV', room: '127' },
    { facultyIds: ['FAC-CSE-019'], day: 'Thursday', slot: '11:30 - 12:30', subject: 'DT (T)', block: 'B-IV', room: '127' },
    { facultyIds: ['FAC-CSE-046'], day: 'Thursday', slot: '12:30 - 01:30', subject: 'DAA', block: 'B-IV', room: '127' },
    { facultyIds: ['FAC-CSE-080'], day: 'Thursday', slot: '02:30 - 04:30', subject: 'ML Lab', block: 'B5', room: 'WT Lab 201' },
    { facultyIds: ['FAC-CSE-054', 'FAC-CSE-084', 'FAC-CSE-067'], day: 'Friday', slot: '09:30 - 11:30', subject: 'QC', block: 'B-II', room: 'New Seminar Hall', sharedFaculty: 'SAM / DNK / PDT' },
    { facultyIds: ['FAC-CSE-080'], day: 'Friday', slot: '11:30 - 12:30', subject: 'ML (T)', block: 'B-IV', room: '127' },
    { facultyIds: ['FAC-CSE-077'], day: 'Friday', slot: '12:30 - 01:30', subject: 'Association Hour', block: 'B-IV', room: '127' },
    { facultyIds: ['FAC-CSE-058'], day: 'Friday', slot: '02:30 - 04:30', subject: 'FSD Lab', block: 'B5', room: 'VC Lab 301' }
  ],
  '5CSE4': [
    { facultyIds: ['FAC-CSE-048'], day: 'Monday', slot: '09:30 - 10:30', subject: 'ML', block: 'B-IV', room: '215' },
    { facultyIds: ['FAC-CSE-018'], day: 'Monday', slot: '10:30 - 11:30', subject: 'DT', block: 'B-IV', room: '215' },
    { facultyIds: ['FAC-CSE-088'], day: 'Monday', slot: '11:30 - 12:30', subject: 'FSD', block: 'B-IV', room: '215' },
    { facultyIds: ['FAC-CSE-075'], day: 'Monday', slot: '12:30 - 01:30', subject: 'MYC', block: 'B-IV', room: '215' },
    { facultyIds: ['FAC-CSE-057'], day: 'Monday', slot: '02:30 - 04:30', subject: 'TE', block: 'B-IV', room: '308/309' },
    { facultyIds: ['FAC-CSE-065'], day: 'Tuesday', slot: '09:30 - 10:30', subject: 'CN', block: 'B-IV', room: '215' },
    { facultyIds: ['FAC-CSE-063'], day: 'Tuesday', slot: '10:30 - 11:30', subject: 'ADS', block: 'B-IV', room: '215' },
    { facultyIds: ['FAC-CSE-059'], day: 'Tuesday', slot: '11:30 - 12:30', subject: 'DAA', block: 'B-IV', room: '215' },
    { facultyIds: ['FAC-CSE-018'], day: 'Tuesday', slot: '12:30 - 01:30', subject: 'DT (T)', block: 'B-IV', room: '215' },
    { facultyIds: ['FAC-CSE-063', 'FAC-CSE-067'], day: 'Tuesday', slot: '02:30 - 04:30', subject: 'SEMINAR', block: 'B-IV', room: '215', sharedFaculty: 'SD / PDT' },
    { facultyIds: ['FAC-CSE-059'], day: 'Wednesday', slot: '09:30 - 10:30', subject: 'DAA', block: 'B-IV', room: '215' },
    { facultyIds: ['FAC-CSE-048'], day: 'Wednesday', slot: '10:30 - 11:30', subject: 'ML', block: 'B-IV', room: '215' },
    { facultyIds: ['FAC-CSE-087'], day: 'Wednesday', slot: '11:30 - 12:30', subject: 'EITK', block: 'B-IV', room: '215' },
    { facultyIds: ['FAC-CSE-048'], day: 'Wednesday', slot: '12:30 - 01:30', subject: 'ML (T)', block: 'B-IV', room: '215' },
    { facultyIds: ['FAC-CSE-054', 'FAC-CSE-084', 'FAC-CSE-067'], day: 'Wednesday', slot: '02:30 - 03:30', subject: 'QC', block: 'B-IV', room: '215', sharedFaculty: 'SAM / DNK / PDT' },
    { facultyIds: ['FAC-CSE-088'], day: 'Wednesday', slot: '03:30 - 04:30', subject: 'FSD (T)', block: 'B-IV', room: '215' },
    { facultyIds: ['FAC-CSE-088'], day: 'Thursday', slot: '09:30 - 10:30', subject: 'FSD', block: 'B-IV', room: '215' },
    { facultyIds: ['FAC-CSE-018'], day: 'Thursday', slot: '10:30 - 11:30', subject: 'DT', block: 'B-IV', room: '215' },
    { facultyIds: ['FAC-CSE-059'], day: 'Thursday', slot: '11:30 - 12:30', subject: 'DAA', block: 'B-IV', room: '215' },
    { facultyIds: ['FAC-CSE-048'], day: 'Thursday', slot: '12:30 - 01:30', subject: 'ML', block: 'B-IV', room: '215' },
    { facultyIds: ['FAC-CSE-088'], day: 'Thursday', slot: '02:30 - 04:30', subject: 'FSD Lab', block: 'B5', room: 'VC Lab 301' },
    { facultyIds: ['FAC-CSE-054', 'FAC-CSE-084', 'FAC-CSE-067'], day: 'Friday', slot: '09:30 - 11:30', subject: 'QC', block: 'B-II', room: 'New Seminar Hall', sharedFaculty: 'SAM / DNK / PDT' },
    { facultyIds: ['FAC-CSE-059'], day: 'Friday', slot: '11:30 - 12:30', subject: 'DAA (T)', block: 'B-IV', room: '215' },
    { facultyIds: ['FAC-CSE-077'], day: 'Friday', slot: '12:30 - 01:30', subject: 'Association Hour', block: 'B-IV', room: '215' },
    { facultyIds: ['FAC-CSE-048'], day: 'Friday', slot: '02:30 - 04:30', subject: 'ML Lab', block: 'B5', room: 'WT Lab 201' }
  ],
  '5CSE5': [
    { facultyIds: ['FAC-CSE-074'], day: 'Monday', slot: '09:30 - 10:30', subject: 'ML', block: 'B-IV', room: '214' },
    { facultyIds: ['FAC-CSE-066'], day: 'Monday', slot: '10:30 - 11:30', subject: 'DT', block: 'B-IV', room: '214' },
    { facultyIds: ['FAC-CSE-039'], day: 'Monday', slot: '11:30 - 12:30', subject: 'FSD', block: 'B-IV', room: '214' },
    { facultyIds: ['FAC-CSE-075'], day: 'Monday', slot: '12:30 - 01:30', subject: 'MYC', block: 'B-IV', room: '214' },
    { facultyIds: ['FAC-CSE-074'], day: 'Monday', slot: '02:30 - 04:30', subject: 'ML Lab', block: 'B5', room: 'WT Lab 201' },
    { facultyIds: ['FAC-CSE-067'], day: 'Tuesday', slot: '09:30 - 10:30', subject: 'DAA', block: 'B-IV', room: '214' },
    { facultyIds: ['FAC-CSE-044'], day: 'Tuesday', slot: '10:30 - 11:30', subject: 'EITK', block: 'B-IV', room: '214' },
    { facultyIds: ['FAC-CSE-039'], day: 'Tuesday', slot: '11:30 - 12:30', subject: 'FSD (T)', block: 'B-IV', room: '214' },
    { facultyIds: ['FAC-CSE-066'], day: 'Tuesday', slot: '12:30 - 01:30', subject: 'DT (T)', block: 'B-IV', room: '014' },
    { facultyIds: ['FAC-CSE-021', 'FAC-CSE-049'], day: 'Tuesday', slot: '02:30 - 03:30', subject: 'QC', block: 'B-IV', room: '014', sharedFaculty: 'CSK / DS' },
    { facultyIds: ['FAC-CSE-074'], day: 'Tuesday', slot: '03:30 - 04:30', subject: 'ML (T)', block: 'B-IV', room: '014' },
    { facultyIds: ['FAC-CSE-039'], day: 'Wednesday', slot: '09:30 - 10:30', subject: 'FSD', block: 'B-IV', room: '126' },
    { facultyIds: ['FAC-CSE-067'], day: 'Wednesday', slot: '10:30 - 11:30', subject: 'DAA', block: 'B-IV', room: '126' },
    { facultyIds: ['FAC-CSE-074'], day: 'Wednesday', slot: '11:30 - 12:30', subject: 'ML', block: 'B-IV', room: '127' },
    { facultyIds: ['FAC-CSE-067'], day: 'Wednesday', slot: '12:30 - 01:30', subject: 'DAA (T)', block: 'B-IV', room: '127' },
    { facultyIds: ['FAC-CSE-039'], day: 'Wednesday', slot: '02:30 - 04:30', subject: 'FSD Lab', block: 'B5', room: 'VC Lab 301' },
    { facultyIds: ['FAC-CSE-039'], day: 'Thursday', slot: '09:30 - 10:30', subject: 'FSD', block: 'B-IV', room: '014' },
    { facultyIds: ['FAC-CSE-074'], day: 'Thursday', slot: '10:30 - 11:30', subject: 'ML', block: 'B-IV', room: '014' },
    { facultyIds: ['FAC-CSE-076'], day: 'Thursday', slot: '11:30 - 01:30', subject: 'TE', block: 'B-IV', room: '308/309' },
    { facultyIds: ['FAC-CSE-051', 'FAC-CSE-032'], day: 'Thursday', slot: '02:30 - 04:30', subject: 'SEMINAR', block: 'B-IV', room: '127', sharedFaculty: 'LT / EP' },
    { facultyIds: ['FAC-CSE-066'], day: 'Friday', slot: '09:30 - 10:30', subject: 'DT', block: 'B-IV', room: '127' },
    { facultyIds: ['FAC-CSE-044'], day: 'Friday', slot: '10:30 - 11:30', subject: 'EITK', block: 'B-IV', room: '127' },
    { facultyIds: ['FAC-CSE-067'], day: 'Friday', slot: '11:30 - 12:30', subject: 'DAA', block: 'B-IV', room: '213' },
    { facultyIds: ['FAC-CSE-077'], day: 'Friday', slot: '12:30 - 01:30', subject: 'Association Hour', block: 'B-IV', room: '213' },
    { facultyIds: ['FAC-CSE-021', 'FAC-CSE-049'], day: 'Friday', slot: '02:30 - 04:30', subject: 'QC', block: 'B-II', room: 'New Seminar Hall', sharedFaculty: 'CSK / DS' }
  ]
}

Object.entries(semesterFiveCseEntries).forEach(([section, entries]) => {
  sampleFaculty.forEach((faculty) => {
    faculty.timetable = faculty.timetable.filter((entry) => !(entry.semester === 'V' && entry.section === section))
  })

  entries.forEach(({ facultyIds, ...entry }) => {
    facultyIds.forEach((facultyId) => {
      const faculty = sampleFaculty.find((member) => member.facultyId === facultyId)
      if (!faculty) throw new Error(`Missing faculty profile for ${facultyId}`)
      faculty.timetable.push({ semester: 'V', section, ...entry })
    })
  })
})