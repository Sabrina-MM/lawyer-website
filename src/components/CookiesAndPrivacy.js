import React from "react";
import "../css/CookiesAndPages.css";

function CookiesAndPrivacy() {
  return (
    <div className="Pages">
      <div className="hero">
        <h2>Cookies</h2>
      </div>
      <div className="container p-5">
        <p>
          <strong>USO DE COOKIES Y DEL FICHERO DE ACTIVIDAD</strong>
        </p>
        <p>
          Las cookies son ficheros enviados al navegador por medio de un
          servidor web con la finalidad de registrar las actividades del usuario
          durante su tiempo de navegación. Las cookies utilizadas por el sitio
          web se asocian únicamente con un usuario anónimo y su ordenador, y no
          proporcionan por sí mismas los datos personales del usuario. Mediante
          el uso de las cookies resulta posible que el servidor donde se
          encuentra la web, reconozca el navegador web utilizado por el usuario
          con la finalidad de que la navegación sea más sencilla, permitiendo,
          por ejemplo, el acceso a los usuarios que se hayan registrado
          previamente, acceder a las áreas, servicios, promociones o concursos
          reservados exclusivamente a ellos sin tener que registrarse en cada
          visita. Se utilizan también para medir la audiencia y parámetros del
          tráfico, controlar el progreso y número de entradas.
        </p>
        <p>
          <strong>¿Qué es una cookie?</strong>
        </p>
        <p>
          Las cookies son usualmente son pequeños archivos de texto y se
          almacenan en el directorio del navegador de tu ordenador o en las
          subcarpetas de datos de programa.
        </p>
        <p>
          <strong>Cookies utilizadas en este sitio web</strong>
        </p>
        <p>
          <i>Este sitio web almacena dos tipos de cookies</i>: Cookies de
          sesión: Son cookies temporales que solo existen hasta que cierras el
          navegador que estás usando para acceder a la web.
          <i> Cookies duraderas</i>: Estas son cookies que permanecen en tu
          archivo de cookies después de que hayas visitado nuestra web. Estas
          cookies nos ayudan a identificarte cuando vuelves a nuestra web.
        </p>
      </div>
    </div>
  );
}

export default CookiesAndPrivacy;
