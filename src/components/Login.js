import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    var login = false;
    event.preventDefault();
    console.log("logging " + email + "  " + password);
    //validation code
    login = true;
    if (login) navigate("/home");
  }
  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="sm" controlId="email">
          <Form.Label>Email :</Form.Label>

          <Form.Control
      
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              console.log({ email });
            }}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <Form.Label>Password :</Form.Label>

          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div styles="height:20px"></div>
        </Form.Group>

        <Button
          className="submitbutton"
          block
          size="lg"
          type="submit"
          disabled={!validateForm()}
        >
          Login
        </Button>
      </Form>
      <h2>{password}</h2>
    </div>
  );
};

export default Login;
