> Based on: https://github.com/EvaMalinina/todo-list-react-hooks
> This app is by no means production ready!

Following API endpoints have to be provided by the student:

/api/todos
This endpoint will return a list of all todos in the system.
Method: GET
Returns:
`[{ id: string; text: string; isCompleted:boolean ]}`

/api/todos
This endpoint store a todo item. The id is computed on the server.
Method: POST
BODY: `{ text: string; isCompleted:boolean // set to false initially }`
Returns:
`{ ok: boolean }`

/api/todos/{id}
This endpoint will set the todo item to status "completed".
Method: UPDATE
Returns:
`{ ok: boolean }`

/api/todos/{id}
This endpoint will delete a todo item. The endpoint removes the todo form the database
Method: DELETE
Returns:
`{ ok: boolean }`

Hints:

- You have to have Node installed.
- You have to have all dependencies installed (`npm i`)
- Use `npm run build` to obtain a bundle of the web application.
