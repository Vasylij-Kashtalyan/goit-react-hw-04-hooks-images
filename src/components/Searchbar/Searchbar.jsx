import "react-toastify/dist/ReactToastify.css";
import { ImSearch } from "react-icons/im";
import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import s from "./Searchbar.module.css";

function Searchbar({ onSubmit }) {
  const [name, setName] = useState("");

  const handlerNameChanche = (evt) => setName(evt.currentTarget.value);

  const handlerSubmit = (evt) => {
    evt.preventDefault();

    if (name.trim() === "") {
      toast.error("Введіть імя для пошуку...");
      return;
    }

    onSubmit(name);
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handlerSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <ImSearch className={s.ImSearch} />
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          name="name"
          onChange={handlerNameChanche}
          value={name}
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
