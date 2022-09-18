import NavHeader from "../navheader/NavHeader";
import ExportData from "./ExportData";
import ImportData from "./ImportData";

const BulkUpload = () => {
  return (
    <>
      <NavHeader />
      <ImportData />
      <ExportData />
    </>
  );
};

export default BulkUpload;
