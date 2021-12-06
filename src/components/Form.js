import React, { useState, useCallback } from "react";
import FormSendEmail from "./FormSendEmail";
import FormOk from "./FormOk";

import "../css/ContactDetails.css";

export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = useCallback(() => {
    setIsSubmitting(true);
  }, [setIsSubmitting]);

  return !isSubmitting ? <FormSendEmail submitForm={submitForm} /> : <FormOk />;
}
