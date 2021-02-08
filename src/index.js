import React from "react";
import ReactDOM from "react-dom";
import PrimerApp from "./PrimeraApp";
import "./index.css";

const divRoot = document.querySelector("#root");

// Para enviar elementos del index a los componentes se hace de la siguiente manera:
ReactDOM.render(<PrimerApp saludo="Hola, soy Goku" />, divRoot);
