import { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";

const useForm = (callback, validateForm) => {
  const [values, setValues] = useState({
    firstName: "",
    email: "",
    asunto: "",
    message: "",
    checkbox: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(values));
    setIsSubmitting(true);
    let debug = false;

    if (isSubmitting) {
      emailjs
        .sendForm(
          "service_8kcka4q",
          "template_i9cujq3",
          form.current,
          process.env.REACT_APP_API_KEY
        )
        .then(
          (result) => {
            if (debug) console.log(result.text);
          },
          (error) => {
            if (debug) console.log(error.text);
          }
        );
      e.target.reset();
    } else return null;
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors, isSubmitting, callback]);

  return { handleChange, handleSubmit, values, errors, form };
};

export default useForm;
