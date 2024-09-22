export interface Todo {
  _id: string;
  description: string;
  completed: boolean;
}

type Action =
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "REMOVE_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: string }
  | { type: "SET_TODOS"; payload: Todo[] };

export const todoReducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "REMOVE_TODO":
      return state.filter((todo) => todo._id !== action.payload);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo._id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "SET_TODOS":
      return action.payload;
    default:
      return state;
  }
};
