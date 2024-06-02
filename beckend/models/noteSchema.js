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
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { versionKey: false }
);

export default mongoose.model("Note", notesSchema);
