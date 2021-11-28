import React from "react";
import Form from "./Form";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import paper from "../img/paper.jpg";

import "../css/ContactDetails.css";

export default function ContactDetails() {
  return (
    <div className="Contact-details" id="contact-links">
      <div className="main-title-content">
        <h3 className="main-title">CONTACTO</h3>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-sm-6 pe-5">
            <ul>
              <li className="contact-information-title">
                <h5>INFORMACIÓN DE CONTACTO</h5>
                <hr />
              </li>
              <li>
                <BsFillPhoneVibrateFill
                  style={{ marginRight: 10, fontSize: 25 }}
                />{" "}
                (+34) XXX-XX-XX-XX
              </li>
              <li>
                <AiOutlineMail style={{ marginRight: 10, fontSize: 25 }} />
                <a href="mailto:noresponderestemail2021@gmail.com">
                  Ernestor Javier Martinez
                </a>
              </li>
              <li>Viernes: 9:00 – 14:00 Lunes y</li>
              <li>Lunes a viernes: 9:00-15:00</li>
              <li>miércoles: 16:00-18:00</li>
              <li className="facebook-icon">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="instagram-icon"
                  rel="noreferrer"
                >
                  <AiFillInstagram style={{ marginTop: 15 }} />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  className="facebook-icon"
                  rel="noreferrer"
                >
                  <FaFacebook style={{ marginTop: 15 }} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6">
            <div className="photo-location">
              <img
                src={paper}
                alt=""
                className="img-fluid d-none d-sm-none d-lg-block"
              />
            </div>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
}
