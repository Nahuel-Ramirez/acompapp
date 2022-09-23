import React from "react";
import Swal from "sweetalert2";

function Contacto() {
  const exito = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "¡Gracias por tu mensaje!",
      text: "Te estare contestando a la brevedad",
      icon: "success",
      timer: 3000,
    });
  };

  return (
    <>
      <form>
        <h3>¡Hablemos!</h3>

        <label htmlFor="input">Nombre</label>
        <input type="text" />

        <label htmlFor="input">Apellido</label>
        <input type="text" />

        <label htmlFor="input">Email</label>
        <input type="email" />

        <label htmlFor="textarea">Mensaje</label>
        <textarea />

        <button onClick={exito}>Enviar</button>
      </form>
    </>
  );
}

export default Contacto;
