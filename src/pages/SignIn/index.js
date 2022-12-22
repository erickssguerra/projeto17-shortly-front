import * as Screen from "../../styles/Screen";
import * as Form from "../../styles/Form";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <Screen.Container>
      <h1>Sign in</h1>
      <Form.Form>
        <Form.Input placeholder="E-mail" type="email" />
        <Form.Input placeholder="Password" type="password" />
        <Form.Button>Sign in</Form.Button>
      </Form.Form>
      <Link to="/signup"><p>Don't have an account? Sign up!</p></Link>
    </Screen.Container>
  );
}
