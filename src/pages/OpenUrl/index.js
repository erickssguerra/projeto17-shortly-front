import { useState } from "react";
import { api } from "../../services";
import { loadingButton } from "../../assets/Spinners";

import * as Screen from "../../styles/Screen";
import * as Form from "../../styles/Form";
import { useAuth } from "../../providers";

export default function OpenUrl() {
  const [isLoading, setIsLoading] = useState(false);
  const { userAuth } = useAuth();
  const [form, setForm] = useState({
    shortUrl: "",
  });

  function inputControl(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function openUrl(event) {
    setIsLoading(true);
    event.preventDefault();
    api
      .get(`/urls/open/${form.shortUrl}`)
      .then((res) => {
        setIsLoading(false);
        window.location.assign(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }

  return (
    <Screen.Container>
      <h1>Open a short url</h1>
      <Form.Form onSubmit={openUrl}>
        <Form.Input
          name="shortUrl"
          placeholder="Paste your shortened Url"
          disabled={isLoading}
          type="text"
          required
          onChange={inputControl}
        />
        <Form.Button type="submit">
          {isLoading ? loadingButton : "Open"}
        </Form.Button>
      </Form.Form>
    </Screen.Container>
  );
}
