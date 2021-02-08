import React, { Fragment } from "react";

//Un componente debe retornar 1 solo contenedor y entre parentesis
const PrimerApp = () => {
    return (
        //Se puede retornar un fragment o un div o no colocar nada
        <Fragment>
            <h1>Hola Mundo</h1>
            <p>Mi primera aplicación</p>
        </Fragment>
    );
};

export default PrimerApp;
