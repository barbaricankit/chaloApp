import { Link } from "react-router-dom";
import style from "../../styles/homepage.module.css";

const BulkUpload = () => {
  return (
    <Link to="/routes">
      <button
        className={`${style.bulk_upload_btn} border_none m_1 btn_pd br_4`}
      >
        Bulk Upload
      </button>
    </Link>
  );
};
export default BulkUpload;
