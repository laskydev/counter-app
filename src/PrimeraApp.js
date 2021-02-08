import React, { Fragment } from "react";
import PropTypes from "prop-types";
const PrimerApp = ({ saludo, subtitulo }) => {
    return (
        <Fragment>
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <p>{subtitulo}</p>
        </Fragment>
    );
};

PrimerApp.propTypes = {
    saludo: PropTypes.string.isRequired,
};

PrimerApp.defaultProps = {
    subtitulo: "Subtitulo por defecto",
};

export default PrimerApp;
