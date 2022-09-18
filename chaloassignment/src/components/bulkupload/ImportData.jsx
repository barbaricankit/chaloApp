import { useState } from "react";
import { useRoute } from "../../context/routes-context";
import { AiOutlineUpload } from "react-icons/ai";
import Error from "../Error";
import { handleImport } from "../../utils";
import style from "../../styles/bulkupload.module.css";

const ImportData = () => {
  const [route, setRoutes] = useState([]);
  const [message, setMessage] = useState("No File Choosen");
  const [error, setError] = useState("");
  const { bulkUploadRoutes } = useRoute();

  const uploadRoutes = () => {
    if (route.length > 0) {
      bulkUploadRoutes(route);
    } else {
      setError("There is no valid data to upload");
    }
  };
  const importFiles = (e) => {
    setMessage(handleImport(e, setRoutes));
  };
  return (
    <>
      <div className={style.file_choose_field}>
        <label>
          <span className={style.upload_icon}>
            <AiOutlineUpload />
            <span className={style.import_text}>Import Excel Sheet</span>
          </span>
          <input
            type="file"
            name="file"
            className={style.input_field}
            id="inputGroupFile"
            required
            onChange={importFiles}
          />
        </label>
      </div>

      <div className={style.upload}>
        <p className={style.imported_message}>{message}</p>
        <button
          className={`${style.upload_btn} border_none m_1 btn_pd br_4`}
          onClick={uploadRoutes}
        >
          Upload Data
        </button>
        {error && <Error message={error} />}
      </div>
    </>
  );
};

export default ImportData;
