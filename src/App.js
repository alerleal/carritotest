import React from "react";
import ReactDOM from "react-dom";
import "./css/bootstrap.min.css";
import "./css/estilo.css";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function App() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

export default App;