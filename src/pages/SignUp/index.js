import { useState } from "react";
import { api } from "../../services";
import {loading} from "../../assets/Spinners";

import * as Screen from "../../styles/Screen";
import * as Form from "../../styles/Form";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function inputControl(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function signUp(event) {
    setIsLoading(true);
    event.preventDefault();
    if (form.password !== form.confirmPassword) {
      setIsLoading(false);
      alert("Password doesn't match!");
      return;
    }
    api
      .post("/signup", form)
      .then(() => {
        navigate("/signin");
      })
      .catch((err) => {
        alert(err.response.data.message);
        setIsLoading(false);
      });
  }

  return (
    <Screen.Container>
      <h1>Sign up</h1>
      <Form.Form onSubmit={signUp}>
        <Form.Input
          name="name"
          placeholder="Username"
          disabled={isLoading}
          type="text"
          required={true}
          onChange={inputControl}
        />
        <Form.Input
          name="email"
          placeholder="E-mail"
          disabled={isLoading}
          type="email"
          required={true}
          onChange={inputControl}
        />
        <Form.Input
          name="password"
          placeholder="Password"
          disabled={isLoading}
          type="password"
          required={true}
          onChange={inputControl}
        />
        <Form.Input
          name="confirmPassword"
          placeholder="Confirm password"
          disabled={isLoading}
          type="password"
          required={true}
          onChange={inputControl}
        />
        <Form.Button disabled={isLoading} type="submit">
          {isLoading ? loading : "Create Account"}
        </Form.Button>
      </Form.Form>
      <Link to="/signin">
        <p>Already have an account? Sign in!</p>
      </Link>
    </Screen.Container>
  );
}
