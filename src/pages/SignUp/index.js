import * as Screen from "../../styles/Screen";
import * as Form from "../../styles/Form";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <Screen.Container>
      <h1>Sign up</h1>
      <Form.Form>
        <Form.Input placeholder="Name" type="text" />
        <Form.Input placeholder="E-mail" type="email" />
        <Form.Input placeholder="Password" type="password" />
        <Form.Input placeholder="Confirm password" type="password" />
        <Form.Button>Create Account</Form.Button>
      </Form.Form>
      <Link to="/signin">
        <p>Already have an account? Sign in!</p>
      </Link>
    </Screen.Container>
  );
}
