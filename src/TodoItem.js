import React from 'react';


function TodoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#c5e2d2",
        textDecoration: "line-through",
    };
    const { completed, id, title } = props.todo;
    return (
        <li className="c-todoItem">
            <input
                type="checkbox"
                checked={completed}
                onChange={() => props.handleChangeProps(id)}
            />
            <button className="c-delete" onClick={() =>
                props.deleteTodoProps(id)}>X</button>
            <span style={completed ? completedStyle : null}>
                {title}
            </span>
        </li>
    )
}

export default TodoItem;