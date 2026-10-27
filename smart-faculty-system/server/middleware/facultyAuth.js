import { createHmac, timingSafeEqual } from 'node:crypto'

function getSecret() {
  return process.env.AUTH_SECRET || 'smart-faculty-system-local-secret-change-before-deploying'
}

export function createFacultyToken(facultyId) {
  const payload = Buffer.from(JSON.stringify({
    role: 'faculty',
    facultyId,
    expiresAt: Date.now() + 8 * 60 * 60 * 1000
  })).toString('base64url')
  const signature = createHmac('sha256', getSecret()).update(payload).digest('base64url')
  return `${payload}.${signature}`
}

export function requireFaculty(request, response, next) {
  const token = String(request.headers.authorization || '').replace(/^Bearer\s+/i, '')
  const [payload, suppliedSignature] = token.split('.')
  if (!payload || !suppliedSignature) return response.status(401).json({ message: 'Faculty login is required.' })

  const expectedSignature = createHmac('sha256', getSecret()).update(payload).digest()
  const receivedSignature = Buffer.from(suppliedSignature, 'base64url')
  if (receivedSignature.length !== expectedSignature.length || !timingSafeEqual(receivedSignature, expectedSignature)) {
    return response.status(401).json({ message: 'Faculty login is required.' })
  }

  try {
    const session = JSON.parse(Buffer.from(payload, 'base64url').toString())
    if (session.role !== 'faculty' || !session.facultyId || session.expiresAt < Date.now()) {
      return response.status(401).json({ message: 'Faculty login has expired. Please log in again.' })
    }
    request.auth = session
    return next()
  } catch {
    return response.status(401).json({ message: 'Faculty login is required.' })
  }
}
