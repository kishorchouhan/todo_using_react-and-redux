export const addTodo = todo => {
  return {
    type: "ADD_TODO",
    payload: todo
  };
};

export const toggleDone = id => {
  return {
    type: "TOGGLE_DONE",
    payload: id
  };
};

export const handleDeleteTodo = id => {
  return {
    type: "HANDLE_DELETE_TODO",
    payload: id
  };
};

export const updateTodoToShow = input => {
  return {
    type: "UPDATE_TODO_TO_SHOW",
    payload: input
  };
};

export const updateToggleAllDone = () => {
  return {
    type: "UPDATE_TOGGLE_ALL_DONE"
  };
};
