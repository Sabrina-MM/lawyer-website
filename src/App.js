import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Aboutme from "./components/pages/Aboutme";
import CookieConsent from "react-cookie-consent";
import CookiesAndPrivacy from "./components/CookiesAndPrivacy";
import ContactDetails from "./components/ContactDetails";
import Extranjeria from "./components/pages/Extranjeria";
import justice from "./img/justice.png";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import Penal from "./components/pages/Penal";
import Penitenciario from "./components/pages/Penitenciario";
import Page404 from "./components/pages/Page404";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <ul className="text-center text-white mb-0">
            <li>
              <img
                src={justice}
                alt="símbolo de la justicia"
                className="img-fluid"
              />
            </li>
            <li className="name">
              {" "}
              <h1>Ernestor Javier Martinez</h1>
            </li>
          </ul>
        </div>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/Contacto" component={ContactDetails} />
          <Route path="/Biografia" component={Aboutme} />
          <Route path="/Penal" component={Penal} />
          <Route path="/Penitenciario" component={Penitenciario} />
          <Route path="/Extranjeria" component={Extranjeria} />
          <Route path="/Cookies" component={CookiesAndPrivacy} />
          <Route component={Page404} />
        </Switch>
        <CookieConsent
          debug={false}
          style={{ fontSize: 18, padding: 18, textAlign: "center" }}
          buttonStyle={{
            background: "#6aa84f",
            color: "white",
            borderRadius: 4,
            fontSize: 18,
            marginRight: 50,
          }}
          buttonText="Aceptar"
        >
          *Usamos cookies para mejorar la experiencia de navegación y uso de la
          web. Para obtener mas informacion consulte nuestra{" "}
          <Link to="/Cookies" alt="cookies link">
            Declaración de privacidad y cookies
          </Link>
        </CookieConsent>
      </Router>
    </div>
  );
}

export default App;
