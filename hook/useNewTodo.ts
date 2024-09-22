import { useState } from "react";
import { todoSchema } from "@/schema/todo-schema";
import { postTodo } from "@/lib/todoApi";
import useTodo from "./useTodo";

export function useNewTodo() {
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<string | null>(null);
  const [notifications, setNotifications] = useState<
    { message: string; type: "success" | "error" }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addTodo } = useTodo();

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setDescription("");
    setErrors(null);
    setLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setDescription(value);

    const validation = todoSchema.safeParse({ description: value });
    if (!validation.success) {
      setErrors(validation.error.errors[0].message);
    } else {
      setErrors(null);
    }
  };

  const handleAddTodo = async () => {
    const validation = todoSchema.safeParse({ description });
    if (!validation.success) {
      setErrors(validation.error.errors[0].message);
      return;
    }
    setLoading(true);
    try {
      const newTodo = await postTodo(description);
      addTodo(newTodo);
      handleCloseModal();
      setNotifications((prev) => [
        ...prev,
        { message: "Tarefa criada com sucesso!", type: "success" },
      ]);
    } catch (error) {
      setNotifications((prev) => [
        ...prev,
        { message: "Erro ao criar tarefa!", type: "error" },
      ]);
      setLoading(false);
    }
  };

  const removeNotification = (index: number) => {
    setNotifications((prev) => prev.filter((_, i) => i !== index));
  };

  return {
    description,
    errors,
    loading,
    isModalOpen,
    notifications,
    handleOpenModal,
    handleCloseModal,
    handleInputChange,
    handleAddTodo,
    removeNotification,
  };
}
