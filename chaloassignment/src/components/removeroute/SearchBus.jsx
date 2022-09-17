import { useRoute } from "../../context/routes-context";

const SearchBus = () => {
  const { searchedBusText, searchedBus } = useRoute();

  return (
    <div>
      <input
        type="search"
        placeholder="Search Bus Number"
        value={searchedBusText}
        onChange={searchedBus}
      />
    </div>
  );
};

export default SearchBus;
