export const todoReducer = (
  state = { todos: [], todoToShow: "all", toggleAllDone: true },
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
    case "UPDATE_TOGGLE_ALL_DONE":
      return {
        ...state,
        todos: state.todos.map(todo => ({
          ...todo,
          done: state.toggleAllDone
        })),
        toggleAllDone: !state.toggleAllDone
      };
    case "REMOVE_ALL_DONE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.done)
      };
    default:
      return state;
  }
};
