import React, { useState, useEffect } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

function TodoApp() {
    const [todos, setTodos] = useState([]);


    function handleChange(id) {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        );
    }

    function delTodo(id) {
        setTodos(
            todos.filter(todo => {
                return todo.id !== id;
            })
        )
    }

    function addTodo(title) {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then((res) => res.json())
            .then(setTodos)
            .catch(console.error);
    }, []);

    return (
        <div className="o-container">
            <Header />
            <InputTodo addTodo={addTodo} />
            <TodosList
                todos={todos}
                handleChangeProps={handleChange}
                deleteTodoProps={delTodo}
            />
        </div>

    )
}


export default TodoApp;