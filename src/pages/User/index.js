import * as Screen from "../../styles/Screen";
import * as Form from "../../styles/Form";

export default function User() {
  return (
    <Screen.Container>
      <h1>Shorten an URL</h1>
      <Form.Form>
        <Form.Input placeholder="http://" type="url" />
        <Form.Button>Shorten it!</Form.Button>
      </Form.Form>
    </Screen.Container>
  );
}
