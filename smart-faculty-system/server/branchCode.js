const branchCodes = [
  { match: ['mathematics', 'humanities'], code: 'MH' },
  { match: ['physical sciences', 'physics'], code: 'PS' },
  { match: ['electrical', 'electronics', 'eee'], code: 'EEE' },
  { match: ['mechanical'], code: 'ME' },
  { match: ['computer science', 'cse'], code: 'CSE' },
  { match: ['management', 'mba'], code: 'MBA' },
  { match: ['common course'], code: 'CC' },
  { match: ['academic administration'], code: 'EAA' }
]

export function getBranchCode(originalDepartment = '') {
  const department = String(originalDepartment).trim().toLowerCase()
  return branchCodes.find(({ match }) => match.some((term) => department.includes(term)))?.code ||
    department.split(/[^a-z0-9]+/).filter(Boolean).map((word) => word[0]).join('').toUpperCase() || 'NA'
}
