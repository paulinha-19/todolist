export interface Todo {
  _id: string;
  description: string;
  completed: boolean;
}

// Function to get all todos (GET)
export async function getTodos(): Promise<Todo[]> {
  const response = await fetch("/api/todos/", {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Error fetching todos");
  }

  const data = await response.json();
  return data.data;
}
