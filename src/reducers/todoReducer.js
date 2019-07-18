export const todoReducer = (
  state = { todos: [], todoToShow: "all" },
  action
) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };
    case "TOGGLE_DONE":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              done: !todo.done
            };
          } else {
            return todo;
          }
        })
      };
    case "HANDLE_DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case "UPDATE_TODO_TO_SHOW":
      return {
        ...state,
        todoToShow: action.payload
      };
    default:
      return state;
  }
};
