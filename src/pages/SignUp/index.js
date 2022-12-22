import * as Screen from "../../styles/Screen"
import * as Form from "../../styles/Form"

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
    </Screen.Container>
  );
}
