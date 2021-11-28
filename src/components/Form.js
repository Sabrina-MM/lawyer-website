import React, { useState, useCallback } from "react";
import FormSignup from "./FormSignup";
import FormOk from "./FormOk";

import "../css/ContactDetails.css";

export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = useCallback(() => {
    setIsSubmitting(true);
  }, [setIsSubmitting]);

  return !isSubmitting ? <FormSignup submitForm={submitForm} /> : <FormOk />;
}
