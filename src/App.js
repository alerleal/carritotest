import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";
import "./css/bootstrap.min.css";

function app() {
    return (
        <header>
            <NavBar />
            <h1>Busca el producto que tanto queres!!</h1>
        </header>
    );
}

export default app;