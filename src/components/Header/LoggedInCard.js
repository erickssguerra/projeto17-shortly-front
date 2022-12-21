import { IoMdStats as MetricsIcon } from "react-icons/io";
import { TbLogout as LogoutIcon } from "react-icons/tb";

export default function LoggedInCard() {
  return (
    <>
      <MetricsIcon /> <p>Hello, User!</p> <LogoutIcon />
    </>
  );
}
