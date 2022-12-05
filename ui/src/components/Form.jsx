import { createMuiTheme } from "@material-ui/core/styles";
import React, { useEffect, useRef, useState } from 'react';
import { completeTodoItem, deleteTodoItem, getAllTodoItems, saveTodoItem } from "./../api";
import TodoCreator from "./FormInput";
import TodoList from "./List";


const theme = createMuiTheme({
    palette: {
        primary: { main: '#000000' },
    },
});

const Form = () => {

    const [ newTodo, setNewTodo ] = useState('');
    const [ todos, setTodos ] = useState(undefined);
    useEffect(() => {
        getAllTodoItems().then(e => setTodos(e))
    },[])
    const inputRef = useRef();
    const noteRef = useRef({});
    const [ isInputEmpty, setInputEmpty ] = useState(false)


    const handleSubmit = e => {
        e.preventDefault();
        saveTodo(newTodo);
        clearInput();
        inputRef.current.focus();
    };

    const preventSubmit = e => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    };

    const saveTodo = async text => {
        if ( text !== '') {
            await saveTodoItem({ 
                text: text,
                isCompleted: false,
            })
            const todos = await getAllTodoItems();
            setTodos(todos);
           
        } else {
            setInputEmpty(true);
        }
    };

    const completeTodo = async id => {
        await completeTodoItem(id)
        const todos = await getAllTodoItems();
        setTodos(todos);
    };
    const deleteTodo = async id => {
        await deleteTodoItem(id)
        const todos = await getAllTodoItems();
        setTodos(todos);
    }
    const clearInput = () => {
        setNewTodo('');
    }

    const setTodo = todo => {
        setInputEmpty(false);
        setNewTodo(todo);
    }

   


    return (
        <form onSubmit={handleSubmit} className="form">

                <TodoCreator
                    theme={theme}
                    todo={newTodo}
                    setTodo={setTodo}
                    clearInput={clearInput}
                    inputRef={inputRef}
                    isInputEmpty={isInputEmpty}
                    preventSubmit={preventSubmit}
                />

                <TodoList
                    theme={theme}
                    todos={todos}
                    completeTodo={completeTodo}
                    saveTodo={saveTodo}
                    noteRef={noteRef}
                    deleteTodo={deleteTodo}
                    preventSubmit={preventSubmit}
                />
            </form>
    )
}

export default Form;