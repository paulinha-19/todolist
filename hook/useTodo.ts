"use client";

import { useContext } from "react";
import { TodoContext } from "@/context/TodoContext";

export default function useTodo() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("Error loading context");
  }
  return context;
}
