"use client";

import Container from "../Container";
import TodoList from "../TodoList";
import NewTodo from "../NewTodo";
import useTodo from "@/hook/useTodo";
import LoadingOverlay from "../LoadingOverlay";

export default function Welcome() {
  const { error, loading } = useTodo();

  if (error) {
    return (
      <h4 style={{ textAlign: "center" }}>
        Ocorreu um erro ao carregar a(s) tarefa(s)
      </h4>
    );
  }

  if (loading) {
    return <LoadingOverlay message="Carregando tarefas" />;
  }

  return (
    <Container maxWidthDesktop="450px" maxWidthMobile="880px">
      <TodoList />
      <NewTodo />
    </Container>
  );
}
