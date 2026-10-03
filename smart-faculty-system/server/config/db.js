import mongoose from 'mongoose'

export async function connectDatabase() {
  const connectionString = process.env.MONGODB_URI

  if (!connectionString) {
    throw new Error('MONGODB_URI is not configured')
  }

  await mongoose.connect(connectionString)
  console.log('MongoDB connected')
}
