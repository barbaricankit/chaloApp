import AddRoute from "./AddRoute";
import ViewRoute from "./ViewRoute";
import style from "../../styles/homepage.module.css";
import NavHeader from "../navheader/NavHeader";
import BulkUpload from "./BulkUpdate";
const Home = () => {
  return (
    <>
      <NavHeader home={true} />
      <div className={style.home_page}>
        <img
          src="/icons/home_screen.jpeg"
          alt="Home screen image"
          className={style.home_screen_image}
        />
        <div className={style.home_page_btns}>
          <ViewRoute />
          <AddRoute />
          <BulkUpload />
        </div>
      </div>
    </>
  );
};

export default Home;
