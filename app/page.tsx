import { TodoProvider } from "@/context/TodoContext";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <TodoProvider>
      <Welcome />
    </TodoProvider>
  );
}
