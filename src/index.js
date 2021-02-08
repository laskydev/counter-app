import React from "react";
import ReactDOM from "react-dom";
import CounterApp from "./components/CounterApp";
import "./index.css";

const divRoot = document.querySelector("#root");

// Para enviar elementos del index a los componentes se hace de la siguiente manera:
ReactDOM.render(<CounterApp value={1} />, divRoot);
