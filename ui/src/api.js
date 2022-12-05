export const getAllTodoItems = async () => {
  const request = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/api/todos`
  );

  if (request.status !== 200) {
    alert("Error fetching todo items");
  }
  return await request.json();
};

export const saveTodoItem = async (todoItem) => {
  const request = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/api/todos`,
    { method: "POST", body: JSON.stringify(todoItem) }
  );

  if (request.status !== 200) {
    alert("Error while storing todo item");
  }
  return await request.json();
};

export const completeTodoItem = async (id) => {
  const request = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/api/todos/${id}`,
    { method: "UPDATE" }
  );

  if (request.status !== 200) {
    alert("Error while marking todo item as down");
  }
  return await request.json();
};

export const deleteTodoItem = async (id) => {
  const request = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/api/todos/${id}`,
    { method: "DELETE" }
  );

  if (request.status !== 200) {
    alert("Error while marking todo item as down");
  }
  return await request.json();
};
