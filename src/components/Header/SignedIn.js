import { AiFillHome as HomeIcon } from "react-icons/ai";
import { TbLogout as LogoutIcon } from "react-icons/tb";
import { IoIosStats as StatsIcon } from "react-icons/io";

import { Link } from "react-router-dom";

export default function SignedInCard() {
  return (
    <>
      <Link to="/me">
        <HomeIcon />
      </Link>
      <Link to="/metrics">
        <StatsIcon />
      </Link>
      <p>Hi, User!</p>
      <LogoutIcon />
    </>
  );
}
