import mongoose from 'mongoose'

const adminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 4
    }
  },
  { timestamps: { createdAt: false, updatedAt: true } }
)

export default mongoose.model('Admin', adminSchema)
