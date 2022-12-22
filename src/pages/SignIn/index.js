import * as Screen from "../../styles/Screen";
import * as Form from "../../styles/Form";

export default function Signin() {
  return (
    <Screen.Container>
      <h1>Sign in</h1>
      <Form.Form>
        <Form.Input placeholder="E-mail" type="email" />
        <Form.Input placeholder="Password" type="password" />
        <Form.Button>Sign in</Form.Button>
      </Form.Form>
    </Screen.Container>
  );
}
