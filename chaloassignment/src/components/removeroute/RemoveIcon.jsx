import { BsFillTrashFill } from "react-icons/bs";
import { useRoute } from "../../context/routes-context";

const RemoveIcon = ({ route }) => {
  const { removeRoute } = useRoute();
  return (
    <span onClick={() => removeRoute(route)}>
      <BsFillTrashFill />
    </span>
  );
};
export default RemoveIcon;
