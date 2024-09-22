"use client";

import useTodo from "@/hook/useTodo";
import TodoItems from "../TodoItem";
import styles from "@/styles/TodoList.module.scss";
import LoadingOverlay from "../LoadingOverlay";

export default function TodoList() {
  const { todos, loading } = useTodo();

  if (todos.length === 0) {
    return <h4 style={{ textAlign: "center" }}>Nenhuma tarefa cadastrada</h4>;
  }

  // Check if there are pending or completed todos
  const pendingTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className={styles.todolistContainer}>
      <div className={styles.contentContainer}>
        <p className={styles.todoTitles}>Suas tarefas de hoje</p>
        <TodoItems todos={pendingTodos} />
        <p className={styles.todoTitles}>Tarefas finalizadas</p>
        <TodoItems todos={completedTodos} />
      </div>
    </div>
  );
}
