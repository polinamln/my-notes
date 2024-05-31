import mongoose from "mongoose";
const { Schema } = mongoose;

const notesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
    },
  },
  { versionKey: false }
);

export default mongoose.model("Note", notesSchema);
