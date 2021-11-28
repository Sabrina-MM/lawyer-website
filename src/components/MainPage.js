import React from "react";
import alegandroPhoto from "../img/alejandroPhoto.jpg";
import Specialization from "./Specialization";
import ContactDetails from "./ContactDetails";
import WindowContactNumber from "./WindowContactNumber";
import Reviews from "./Reviews";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../css/MainPage.css";
export default function MainPage() {
  return (
    <div className="MainPage">
      <WindowContactNumber />
      <div className="container">
        <div className="first-title">
          <div className="first-title-content">
            <h1>Abogado en Las Palmas de Gran Canaria</h1>
            <h3>Especializado en Derecho Penal, Penitenciario y Extranjería</h3>
          </div>
        </div>

        <div className="main-photo-and-description">
          <div className="row">
            <div className="col-sm-4">
              <img
                src={alegandroPhoto}
                alt="foto de abogado"
                className="img-fluid"
              />
            </div>
            <div className="about-the-lawyer col-sm-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="about-layer-button">
                <Link to="/Biografia">Leer mas ...</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Specialization />
      <ContactDetails />
      <Reviews />
      <Footer />
    </div>
  );
}
