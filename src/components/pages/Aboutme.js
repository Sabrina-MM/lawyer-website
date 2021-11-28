import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import Footer from "../Footer";
import ControlledCarousel from "../ControlledCarousel";
import WindowContactNumber from "../WindowContactNumber";
import "../../css/CookiesAndPages.css";

export default function Aboutme() {
  return (
    <div className="Pages">
      <div className="hero">
        <h2>Tu abogado...</h2>
      </div>
      <WindowContactNumber />
      <div className="container p-5 mb-5">
        <div className="pages-content">
          <div className="row">
            <div className="col-sm-10">
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
              <p className="mt-5 mb-5">
                {" "}
                <AiOutlineMail style={{ marginRight: 10, fontSize: 25 }} />
                Correo Electrónico:{" "}
                <a href="mailto:noresponderestemail2021@gmail.com">
                  Ernestor Javier Martinez
                </a>
              </p>
              <ControlledCarousel />
            </div>
            <div className="col-sm-2">
              <ul className="mt-5 ">
                <li>
                  <AiFillStar /> Casos ganados: 45
                </li>

                <li>
                  <AiOutlineStar /> Casos pendientes: 13
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
