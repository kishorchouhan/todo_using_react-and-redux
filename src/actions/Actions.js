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
