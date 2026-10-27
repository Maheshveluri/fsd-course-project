import mongoose from 'mongoose'

const timetableImportSchema = new mongoose.Schema(
  {
    fileName: { type: String, required: true, trim: true },
    fileData: { type: Buffer, required: true },
    rowsImported: { type: Number, required: true },
    facultyWithImportedRows: { type: Number, required: true },
    semestersReplaced: { type: [String], default: [] }
  },
  { timestamps: { createdAt: true, updatedAt: false } }
)

export default mongoose.model('TimetableImport', timetableImportSchema)
