export default function validateForm(values) {
  let errors = {};

  //name
  if (!values.firstName.trim()) {
    errors.firstName = "Campo obligatorio";
  } /* else if (!/^[A-Za-z]+/.test(values.firstName.trim())) {
    errors.firstName = "Enter a valid name";
  }
 */
  //email
  if (!values.email) {
    errors.email = "Campo obligatorio";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Correo electronico invalido";
  }

  //asunto
  if (!values.asunto) {
    errors.asunto = "Campo obligatorio";
  }

  //message
  if (!values.message.trim()) {
    errors.message = "Campo obligatorio";
  } else if (values.message.length > 1000) {
    errors.message = "Has excedido el límite de palabras";
  }

  //checkbox
  if (!values.checkbox) {
    errors.checkbox = "Campo obligatorio";
  }

  return errors;
}
