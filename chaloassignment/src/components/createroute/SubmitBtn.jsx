import { useNavigate } from "react-router";
import { useCreateRoute } from "../../context/createroute-context";
import { useRoute } from "../../context/routes-context";
import style from "../../styles/createroute.module.css";
import { checkErrorMessages } from "../../utils";

const SubmitBtn = ({ edit }) => {
  const {
    createRoute: { route },
    dispatch,
  } = useCreateRoute();
  const { routes, addRoute, editRoute } = useRoute();
  const navigate = useNavigate();

  const submit = () => {
    const { errorObj, flag } = checkErrorMessages({ route, routes, edit });
    if (flag) {
      dispatch({ type: "SET_ERROR_MESSAGES", payload: { error: errorObj } });
    } else if (!edit) {
      addRoute(route);
      dispatch({ type: "RESET_ERROR_MESSAGES" });
      navigate(`/route/${route.routeId}`);
    } else {
      console.log("Entered");
      editRoute(route);
      dispatch({ type: "RESET_ERROR_MESSAGES" });
      navigate(`/route/${route.routeId}`);
    }
  };
  return (
    <div className={style.submit} onClick={submit}>
      <button className={`${style.submit_btn} border_none btn_pd m_1 br_4`}>
        Submit
      </button>
    </div>
  );
};

export default SubmitBtn;
