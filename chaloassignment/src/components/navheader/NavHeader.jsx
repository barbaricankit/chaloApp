import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { BiLeftArrowAlt } from "react-icons/bi";
import style from "../../styles/navheader.module.css";

const NavHeader = () => {
  const navigate = useNavigate();
  return (
    <div className={style.nav_header}>
      <span className={style.nav_back_option} onClick={() => navigate(-1)}>
        <BiLeftArrowAlt />
      </span>
      <Link to="/" className={style.nav_option}>
        <nav>Home</nav>
      </Link>
      <div className={style.app}>
        <p className={style.app_name}>Chalo</p>
      </div>
    </div>
  );
};

export default NavHeader;
