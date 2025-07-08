import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const RecoverPassword: React.FC = () => {
  const [username, SetUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(username);
    console.log("Envio");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Recuperar senha</h1>
        <div className="input-field">
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => SetUsername(e.target.value)}
          />
        </div>

        <button> Recuperar senha </button>
        <Link to="/Login"> Cancelar </Link>
      </form>
    </div>
  );
};

export default RecoverPassword;
