import { Link } from "react-router-dom";
import { api } from "../../services";
import { useAuth } from "../../providers";

import { AiFillHome as HomeIcon } from "react-icons/ai";
import { TbLogout as LogoutIcon } from "react-icons/tb";
import { IoIosStats as StatsIcon } from "react-icons/io";
import { loadingButton } from "../../assets/Spinners";
import { useEffect, useState } from "react";

export default function SignedInCard() {
  const { userData, setUserData, userAuth } = useAuth();
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    api
      .get("/users/me", userAuth)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }, [update]);

  if (!userData) {
    return <>{loadingButton}</>;
  }

  return (
    <>
      <Link to="/me">
        <HomeIcon />
      </Link>
      <Link to="/metrics">
        <StatsIcon />
      </Link>
      <p>Hi, {userData.name}!</p>
      <LogoutIcon />
    </>
  );
}
