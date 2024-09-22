export interface Todo {
  _id: string;
  description: string;
  completed: boolean;
}

// Function to create a new todo (POST)
export async function postTodo(description: string): Promise<Todo> {
  const response = await fetch("/api/todos/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ description }),
  });

  if (!response.ok) {
    throw new Error("Error creating todo");
  }

  const data = await response.json();
  return data.data;
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

// Function to update a todo (PUT)
export async function updateTodo(
  _id: string,
  completed: boolean
): Promise<Todo> {
  const response = await fetch(`/api/todos/${_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed }),
  });

  if (!response.ok) {
    throw new Error("Error updating todo");
  }

  const data = await response.json();
  return data.data;
}

// Function to delete a todo (DELETE)
export async function deleteTodo(_id: string): Promise<void> {
  const response = await fetch(`/api/todos/${_id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Error deleting todo");
  }
}
