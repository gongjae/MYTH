import mongoose, { Schema } from 'mongoose'
const resultSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
)

const Result = mongoose.models.Result || mongoose.model('Result', resultSchema)

export default Result
