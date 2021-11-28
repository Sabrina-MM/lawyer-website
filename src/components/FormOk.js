import React, { useState, useEffect } from "react";

import Form from "../components/Form";

import "../css/ContactDetails.css";

function FormOk() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!show) {
    return <Form />;
  }

  return (
    <>
      <div className="FormOk-warning">
        <p className="bg-warning">Tu consulta se ha enviado correctamente!</p>
      </div>
    </>
  );
}

export default FormOk;
