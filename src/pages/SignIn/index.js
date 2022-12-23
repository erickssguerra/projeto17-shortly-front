import { useState } from "react";
import { api } from "../../services";
import { loadingButton } from "../../assets/Spinners";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../providers";

import * as Screen from "../../styles/Screen";
import * as Form from "../../styles/Form";

export default function Signin() {
  const [isLoading, setIsLoading] = useState(false);
  const { setUserAuth } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function inputControl(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function signIn(event) {
    setIsLoading(true);
    event.preventDefault();
    api
      .post("/signin", form)
      .then((res) => {
        const config = {
          headers: { Authorization: `Bearer ${res.data.token}` },
        };
        setUserAuth(config);
        navigate("/metrics");
      })
      .catch((err) => {
        alert(err.response.data.message);
        setIsLoading(false);
      });
  }
  return (
    <Screen.Container>
      <h1>Sign in</h1>
      <Form.Form onSubmit={signIn}>
        <Form.Input
          name="email"
          placeholder="E-mail"
          disabled={isLoading}
          type="email"
          required
          onChange={inputControl}
        />
        <Form.Input
          name="password"
          placeholder="Password"
          disabled={isLoading}
          type="password"
          required
          onChange={inputControl}
        />
        <Form.Button type="submit">
          {isLoading ? loadingButton : "Sign in"}
        </Form.Button>
      </Form.Form>
      <Link to="/signup">
        <p>Don't have an account? Sign up!</p>
      </Link>
    </Screen.Container>
  );
}
