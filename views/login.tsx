import React from "react";
//import { FaUser, FaLock} from "react-icons/fa";
import { useState } from "react";
//import "./login.css";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [username, SetUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(username, password);
    console.log("Envio");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>LOGIN</h1>
        <div className="input-field">
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => SetUsername(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="lembrar">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>

          <Link to="/RecuperarSenha">Esqueceu a senha?</Link>
        </div>
        <button>Acessar</button>
      </form>
    </div>
  );
};

export default Login;
