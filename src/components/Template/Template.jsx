import { Outlet } from "react-router-dom";
import "../../../utils/reset.scss";
import "./Template.scss";

export default function Template() {
  return (
    <>
      <header>My portfolio 💻</header>
      <Outlet />
      <footer></footer>
    </>
  );
}
