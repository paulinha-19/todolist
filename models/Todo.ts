import mongoose, { Document, Schema } from "mongoose";

export interface ITodo extends Document {
  description: string;
  completed: boolean;
}

const todosSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    // Automatically add 'createdAt' and 'updatedAt' fields to the document
    timestamps: true,
  }
);

// export default mongoose.model("todos", todosSchema);
export const Todos = mongoose.models.todos || mongoose.model("todos", todosSchema);
