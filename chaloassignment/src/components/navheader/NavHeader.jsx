import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { BiLeftArrowAlt } from "react-icons/bi";
import style from "../../styles/navheader.module.css";

const NavHeader = ({ home }) => {
  const navigate = useNavigate();
  return (
    <div className={style.nav_header}>
      {!home && (
        <span className={style.nav_back_option} onClick={() => navigate(-1)}>
          <BiLeftArrowAlt />
        </span>
      )}
      {!home && (
        <Link to="/" className={style.nav_option}>
          <nav>Home</nav>
        </Link>
      )}
      {home && <nav className={style.selected_nav}>Home</nav>}
      <div className={style.app}>
        <p className={style.app_name}>CHALO</p>
      </div>
    </div>
  );
};

export default NavHeader;
