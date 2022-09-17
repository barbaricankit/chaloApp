import { Link } from "react-router-dom";
import style from "../../styles/navheader.module.css";

const NavHeader = () => {
  return (
    <div className={style.nav_header}>
      <Link to="/">
        <nav className={style.nav_option}>Home</nav>
      </Link>
      <div className={style.app}>
        <p className={style.app_name}>Chalo</p>
      </div>
    </div>
  );
};

export default NavHeader;
