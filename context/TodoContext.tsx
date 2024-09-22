"use client";

import {
  createContext,
  useReducer,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { todoReducer, Todo } from "@/reducers/todoReducer";

export const TodoContext = createContext<TodoContextProps | undefined>(
  undefined
);

interface TodoContextProps {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  setTodos: (todos: Todo[]) => void;
  loading: boolean;
  error: string | null;
}

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTodos() {
      try {
        setLoading(true);
        const response = await fetch("/api/todos");
        if (!response.ok) {
          throw new Error("Erro ao buscar as tarefas");
        }
        const { data } = await response.json();
        dispatch({ type: "SET_TODOS", payload: data });
      } catch (error: any) {
        setError(error.message);
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchTodos();
  }, []);

  const addTodo = (todo: Todo) => dispatch({ type: "ADD_TODO", payload: todo });
  const removeTodo = (id: string) =>
    dispatch({ type: "REMOVE_TODO", payload: id });
  const toggleTodo = (id: string) =>
    dispatch({ type: "TOGGLE_TODO", payload: id });
  const setTodos = (todos: Todo[]) =>
    dispatch({ type: "SET_TODOS", payload: todos });

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        toggleTodo,
        setTodos,
        loading,
        error,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
