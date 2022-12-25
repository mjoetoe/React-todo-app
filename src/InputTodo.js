import React, { useState } from "react"

function InputTodo(props) {
    const [inputText, setInputText] = useState({
        title: "",
    });

    function onChange(e) {
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value,
        });
    };

    function onSubmit(e) {
        e.preventDefault();
        props.addTodo(inputText.title);
        setInputText({
            title: "",
        });
    }

    return (
        <form onSubmit={onSubmit} className="o-formContainer">
            <input
                type="text"
                className="c-inputText"
                placeholder="Todo toevoegen..."
                value={inputText.title}
                name="title"
                onChange={onChange}
            />
            <input className="c-inputSubmit" type="submit" value="Toevoegen" />
        </form>
    )
}
export default InputTodo;