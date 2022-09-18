import { IoMdClose } from "react-icons/io";
import { useRoute } from "../../context/routes-context";
import style from "../../styles/modal.module.css";

const ConfirmationModal = ({ route, closeModal }) => {
  const { removeRoute } = useRoute();
  return (
    <>
      <div className={style.backdrop}></div>
      <div className={style.modal}>
        <div className={style.header}>
          <p className={style.header_text}>Are you sure you want to delete?</p>
          <span onClick={closeModal}>
            <IoMdClose />
          </span>
        </div>

        <div className={style.modal_btns}>
          <p onClick={closeModal} className={style.no_btn}>
            No
          </p>
          <p onClick={() => removeRoute(route)} className={style.yes_btn}>
            Yes
          </p>
        </div>
      </div>
    </>
  );
};
export default ConfirmationModal;
