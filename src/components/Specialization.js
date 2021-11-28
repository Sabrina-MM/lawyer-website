import React from "react";
import { Link } from "react-router-dom";
import passport from "../img/passport.jpg";
import penal from "../img/penal.jpg";
import prison from "../img/prison.PNG";
import "../css/Specialization.css";

export default function Specialization() {
  return (
    <div className="Specialization" id="specialization-link">
      <h3 className="main-title">¿Necesita el asesoramiento?</h3>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-4">
            <div className="card column-content">
              <div className="card-body">
                <img src={prison} alt="" className="img-fluid" />
                <h4>
                  <i>Penal</i>
                </h4>
                <p>
                  El Derecho Penal se ubica dentro del Derecho Público toda vez
                  que el Estado interviene activamente en la solución de
                  conflictos buscando preservar el orden y la paz públicos.
                </p>
                <div className="card-button">
                  <Link to="/Penal">Ir</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card column-content">
              <div className="card-body">
                <img src={penal} alt="" className="img-fluid" />
                <h4>
                  <i>Penitenciario</i>
                </h4>
                <p>
                  El derecho penitenciario se conoce como aquellas normas
                  jurídicas y legales que rigen, regulan y determinan las penas
                  que recibirán las personas cuando cometen un delito; asimismo,
                  el derecho penitenciario analiza las medidas penales que
                  privan la libertad de los culpables.
                </p>
                <div className="card-button">
                  <Link to="/Penitenciario">Ir</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card column-content">
              <div className="card-body">
                <img src={passport} alt="" className="img-fluid" />
                <h4>
                  <i>Extranjería</i>
                </h4>
                <p>
                  El derecho de extranjería no es ni más ni menos que el derecho
                  a la libre circulación y residencia de los ciudadanos que el
                  ordenamiento jurídico internacional subordina su ejercicio al
                  hecho de que la persona, sea cual sea su nacionalidad,
                  nacional o extranjero, se halle legalmente en el territorio de
                  un Estado.
                </p>
                <div>
                  <div className="card-button">
                    <Link to="/Extranjeria">Ir</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
