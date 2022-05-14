import { addTodo } from "./action";

const initState = { todos: [] };

export const TodoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case addTodo:
      return {
        todos: [...state.todos, payload],
      };
    default:
      return state;
  }
};
