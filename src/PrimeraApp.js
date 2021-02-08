import React, { Fragment } from "react";
import PropTypes from "prop-types";
const PrimerApp = ({ saludo }) => {
    return (
        <Fragment>
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
        </Fragment>
    );
};

//Para poder forzar que manden el dato necesario se utiliza PropTypes | Es necesario importarlo
PrimerApp.propTypes = {
    // Se coloca el nombre del elemento que se validará, si se tienen más elementos simplemente se agregan a este objeto
    saludo: PropTypes.string.isRequired,
};

export default PrimerApp;
