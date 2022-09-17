import AddRoute from "./AddRoute"
import EditRoute from "./EditRoute"
import RemoveRoute from "./RemoveRoute"
import ViewRoute from "./ViewRoute"
import style from "../../styles/homepage.module.css";
const Home = () => {

    return <div className={style.home_page}>
        <ViewRoute />
        <AddRoute />
        <EditRoute />
        <RemoveRoute />
    </div>
}

export default Home