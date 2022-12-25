import React from "react";


function Header() {
    const headerStyle = {
        backgroundColor: "#678c89",
        color: "#fff",
        padding: "10px 15px",
    };
    return (
        <header>
            <h1 style={headerStyle}>
                Todo App
            </h1>
        </header>
    )
}
export default Header;