import { useRoute } from "../../context/routes-context";
import { AiOutlineSearch } from "react-icons/ai";
import style from "../../styles/routes.module.css";
const SearchBus = () => {
  const { searchedBusText, searchedBus } = useRoute();

  return (
    <div className={style.search_field}>
      <span className={style.search_icon}>
        <AiOutlineSearch />
      </span>
      <input
        type="search"
        placeholder="Search Bus Number"
        value={searchedBusText}
        onChange={searchedBus}
        className={style.search_input_field}
      />
    </div>
  );
};

export default SearchBus;
