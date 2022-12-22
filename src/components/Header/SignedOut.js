import { Link } from "react-router-dom";

export default function SignedOutCard() {
  return (
    <>
      <Link to="/signin">
        <button className="signIn">Sign in</button>
      </Link>
      <Link to="/signup">
        <button>Sign up</button>
      </Link>
    </>
  );
}
