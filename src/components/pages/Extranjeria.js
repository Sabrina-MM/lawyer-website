import React from "react";
import Footer from "../Footer";
import consuladoArgentino from "../../img/consuladoArgentino.jpg";
import colombia from "../../img/colombia.jpg";
import british from "../../img/british.jpg";
import "../../css/CookiesAndPages.css";
import WindowContactNumber from "../WindowContactNumber";

export default function Extranjeria() {
  return (
    <div className="Pages">
      <div className="hero">
        <h2>Extranjería</h2>
      </div>
      <WindowContactNumber />
      <div className="container p-5">
        <div className="pages-content">
          <div className="row">
            <div className="col-sm-9">
              <h4 className="mb-3"> Lorem ipsum dolor sit amet</h4>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="col-sm-3 p-3">
              <h4 className="text-center mb-4">Noticias de interes</h4>
              <div className="card mb-2" style={{ width: "17rem" }}>
                <img
                  className="card-img-top img-fluid"
                  src={colombia}
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Consulado de Colombia
                  </h5>
                  <p className="card-text">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <div className="text-center">
                    <a
                      href="https://islascanarias.consulado.gov.co/"
                      className="btn btn-success"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver mas
                    </a>
                  </div>
                </div>
              </div>
              <div className="card mb-2" style={{ width: "17rem" }}>
                <img
                  className="card-img-top img-fluid"
                  src={consuladoArgentino}
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Consulado de Argentina
                  </h5>
                  <p className="card-text">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <div className="text-center">
                    <a
                      href="https://ctene.cancilleria.gob.ar/"
                      className="btn btn-success"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver mas
                    </a>
                  </div>
                </div>
              </div>
              <div className="card" style={{ width: "17rem" }}>
                <img
                  className="card-img-top img-fluid"
                  src={british}
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Consulado de UK</h5>
                  <p className="card-text">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <div className="text-center">
                    <a
                      href="https://www.gov.uk/world/organisations/british-consulate-las-palmas-de-gran-canaria"
                      className="btn btn-success"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver mas
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
