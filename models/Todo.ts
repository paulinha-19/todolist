import mongoose, { Document } from "mongoose";

export interface ITodo extends Document {
    description: string;
    completed: boolean;
}

const TodoSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false
    },
  },
  {
    // Automatically add 'createdAt' and 'updatedAt' fields to the document
    timestamps: true,
  }
);

export default mongoose.models?.Todo || mongoose.model<ITodo>("Todo", TodoSchema);