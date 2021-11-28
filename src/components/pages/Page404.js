import React from "react";
import { Link } from "react-router-dom";

import "../../css/Page404.css";

function Page404() {
  return (
    <div className="Page404">
      <div className="container">
        <div className="page404-content">
          <h3>
            No se encontraron resultados. La página solicitada no pudo
            encontrarse.
          </h3>
          <p>
            Trate de perfeccionar su búsqueda o utilice la navegación para
            localizar la entrada.
          </p>
          <Link to="/" className="page-404-link">
            Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page404;
