import React, { UseState } from "react";
import "./Styles/Form.css";

const Form = ({ formId }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Button pressed");
  };

  return (
    <div className="container-fluid bg">
      <div className="container row mainCard">
        <h1 className="row h-9 formTitle">Contacta con nosotros</h1>
        <div className="row">
          <div className="col-sm formText">GG</div>
          <div className="col-sm formMain">
            <form id={formId} onSubmit={handleSubmit} className="form">
              <fieldset className="row">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeHolder="Nombre"
                  className="row-sm font textBox"
                />
                <input
                  type="text"
                  name="objective"
                  id="objective"
                  placeholder="Objetivo del proyecto"
                  className="row-sm font textBox"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                  className="row-sm font textBox"
                />
                <input
                  type="tel"
                  name="telephone"
                  id="telephone"
                  placeholder="Teléfono"
                  className="row-sm font textBox"
                />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <button type="submit" className="font bold submitButton">
        Enviar
      </button>
    </div>
  );
};

export default Form;
