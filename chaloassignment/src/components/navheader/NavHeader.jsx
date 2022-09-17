
import style from "../../styles/navheader.module.css";

const NavHeader = () => {

    return <div className={style.nav_header} >
        <nav className={style.nav_option}>Home</nav>
        <div className={style.app}>
            <p className={style.app_name}>Chalo</p>
        </div>
    </div>
}

export default NavHeader