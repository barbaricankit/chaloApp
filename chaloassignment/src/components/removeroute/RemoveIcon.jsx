import { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import style from "../../styles/routes.module.css";
import ConfirmationModal from "./ConfirmationModal";

const RemoveIcon = ({ route }) => {
  const [state, setState] = useState(false);
  return (
    <>
      <span onClick={() => setState(true)} className={style.remove_btn}>
        <BsFillTrashFill />
      </span>
      {state && (
        <ConfirmationModal route={route} closeModal={() => setState(false)} />
      )}
    </>
  );
};
export default RemoveIcon;
