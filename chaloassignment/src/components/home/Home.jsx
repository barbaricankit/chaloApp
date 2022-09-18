import AddRoute from "./AddRoute";
import ViewRoute from "./ViewRoute";
import style from "../../styles/homepage.module.css";
const Home = () => {
  return (
    <div className={style.home_page}>
      <ViewRoute />
      <AddRoute />
    </div>
  );
};

export default Home;
