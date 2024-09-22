import { useState } from "react";
import useTodo from "./useTodo";
import { deleteTodo, updateTodo } from "@/lib/todoApi";

export default function useTodoItem() {
  const { toggleTodo, removeTodo } = useTodo();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<string | null>(null);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleDeleteClick = (id: string) => {
    setSelectedTodo(id);
    setIsModalOpen(true);
  };

  const confirmDelete = async () => {
    setLoading(true);
    try {
      await deleteTodo(selectedTodo!);
      removeTodo(selectedTodo!);
      setIsModalOpen(false);
      setSelectedTodo(null);
      setNotification({
        message: "Tarefa deletada com sucesso!",
        type: "success",
      });
    } catch (error) {
      setNotification({ message: "Erro ao deletar tarefa!", type: "error" });
      console.error("Error deleting todo", error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = async (_id: string, completed: boolean) => {
    setLoading(true);
    try {
      await updateTodo(_id, !completed);
      toggleTodo(_id);
      setNotification({
        message: "Tarefa atualizada com sucesso!",
        type: "success",
      });
    } catch (error) {
      setNotification({ message: "Erro ao atualizar tarefa!", type: "error" });
      console.error("Error updating todo", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    isModalOpen,
    setIsModalOpen,
    selectedTodo,
    setSelectedTodo,
    notification,
    setNotification,
    loading,
    setLoading,
    handleDeleteClick,
    confirmDelete,
    handleToggle,
  };
}
