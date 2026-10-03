export function notFound(request, response) {
  response.status(404).json({ message: `Route not found: ${request.method} ${request.originalUrl}` })
}

export function errorHandler(error, request, response, next) {
  console.error(error)
  response.status(500).json({ message: 'Unexpected server error' })
}
