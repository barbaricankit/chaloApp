import { useRoute } from "../../context/routes-context";
import NavHeader from "../navheader/NavHeader";
import RouteDetail from "../viewroutes/RouteDetail";
import SearchBus from "./SearchBus";

const RemoveRoute = () => {
  const { filteredBuses } = useRoute();
  return (
    <>
      <NavHeader />
      <div>
        <SearchBus />
        {filteredBuses.map((route) => (
          <RouteDetail route={route} remove={true} />
        ))}
      </div>
    </>
  );
};

export default RemoveRoute;
