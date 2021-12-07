import React, { useRef, useState } from "react";
import useForm from "../utils/useForm";
import validateForm from "../utils/validateForm";
import "../css/ContactDetails.css";
import ReCAPTCHA from "react-google-recaptcha";

export default function Form({ submitForm }) {
  const { handleChange, handleSubmit, values, errors, form } = useForm(
    submitForm,
    validateForm
  );
  const [activeButton, setActiveButton] = useState(true);
  const captchaRef = useRef(null);

  const onchangeRecaptcha = () => {
    if (captchaRef.current.getValue()) {
      setActiveButton(false);
      // get value nos da el valor del captcha
      // si tenemos valor, significa q el usuarion no es un robot
    } else {
      console.log("recaptch - ok");
    }
  };

  return (
    <div className="Form mt-5">
      <h5>REALICE SU CONSULTA</h5>
      <hr />
      <div className="form-content">
        <form ref={form} onSubmit={handleSubmit}>
          <div className="form-inputs">
            <input
              type="text"
              placeholder="Nombre"
              name="firstName"
              className="w-50"
              onChange={handleChange}
              value={values.firstName}
            />
            {errors.firstName && <p>*{errors.firstName}</p>}
          </div>
          <div className="form-inputs">
            <input
              type="email"
              placeholder="Tu email"
              name="email"
              className="w-50"
              onChange={handleChange}
              value={values.email}
            />
            {errors.email && <p>*{errors.email}</p>}
          </div>
          <div className="form-inputs">
            <input
              type="text"
              placeholder="Asunto"
              name="asunto"
              className="w-50"
              onChange={handleChange}
              value={values.asunto}
            />
            {errors.asunto && <p>*{errors.asunto}</p>}
          </div>
          <div className="form-inputs">
            <textarea
              placeholder="Mensaje"
              name="message"
              className="message w-100"
              onChange={handleChange}
              value={values.message}
            />
            {errors.message && <p>*{errors.message}</p>}
          </div>
          <div className="form-inputs">
            <input
              type="checkbox"
              placeholder="Mensaje"
              name="checkbox"
              className="ms-3 me-3  mb-0"
              onChange={handleChange}
              checked={values.checkbox}
            />
            <label>
              *Acepto los términos y condiciones de la política de privacidad.
            </label>
            {errors.checkbox && <p>*{errors.checkbox}</p>}
          </div>

          <div className="recaptcha">
            {" "}
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_API_KEY_RECAPTCHA}
              onChange={onchangeRecaptcha}
              ref={captchaRef}
              name="captcha"
              className="mt-4 ms-2 mb-3"
            />
          </div>
          <button
            type="submit"
            disabled={activeButton}
            onClick={() => setActiveButton(false)}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
