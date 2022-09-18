import { useRoute } from "../../context/routes-context";
import { AiOutlineDownload } from "react-icons/ai";
import style from "../../styles/bulkupload.module.css";
import { handleExport } from "../../utils";

const ExportData = () => {
  const { routes } = useRoute();

  const downloadData = () => {
    handleExport(routes);
  };
  return (
    <>
      <div className={style.export_data_btn}>
        <AiOutlineDownload />
        <span onClick={downloadData} className={style.export_text}>
          Export All the Bus Details
        </span>
      </div>
    </>
  );
};

export default ExportData;
