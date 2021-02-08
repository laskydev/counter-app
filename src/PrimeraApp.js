import React, { Fragment } from "react";
//Para recibir elementos del index hay que recibir haciendo desestructuring del elemento
// Se le pude colocar un default param
const PrimerApp = ({ saludo = "Hola mundo" }) => {
    return (
        <Fragment>
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
        </Fragment>
    );
};

export default PrimerApp;
