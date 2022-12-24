import * as Screen from "../../styles/Screen";
import * as Form from "../../styles/Form";
import { useState } from "react";
import { useAuth } from "../../providers";
import { useNavigate } from "react-router-dom";
import { api } from "../../services";
import Unauthorized from "../../components/Main/Unauthorized";

export default function New() {
  const [isLoading, setIsLoading] = useState(false);
  const { userAuth } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    url: "",
  });

  function inputControl(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function postUrl(event) {
    setIsLoading(true);
    event.preventDefault();
    api
      .post("/urls/shorten", form, userAuth)
      .then((res) => {
        console.log(res.data);
        navigate("/metrics");
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err.response.data);
      });
  }

  if (!userAuth) {
    return <Unauthorized />;
  }

  return (
    <Screen.Container>
      <h1>Shorten an URL</h1>
      <Form.Form onSubmit={postUrl}>
        <Form.Input
          name="url"
          placeholder="http://"
          disabled={false}
          type="url"
          required
          onChange={inputControl}
        />
        <Form.Button type="submit">Shorten it!</Form.Button>
      </Form.Form>
    </Screen.Container>
  );
}
