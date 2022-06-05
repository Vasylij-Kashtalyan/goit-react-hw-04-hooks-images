import { API } from "./api/Fetch.js";
import { ToastContainer } from "react-toastify";
import ImageGallery from "./components/ImageGallery";
import { toast } from "react-toastify";
import Searchbar from "./components/Searchbar/Searchbar";
import Loader from "./components/Loader/";
import Button from "./components/Button";
import s from "./components/ImageGallery/ImageGallery.module.css";
import { useState, useEffect } from "react";

function App() {
  const [totalPicture, setTotalPicture] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pictures, setPictures] = useState([]);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!name) {
      return;
    }

    try {
      if ({ name: name, page: page }) {
        setLoading(true);

        API(name, page).then((pictures) => {
          setLoading(false);
          if (pictures.hits.length === 0) {
            return toast.error(`No pictures with name: "${name}".`);
          }

          setPictures((prevState) => [...prevState, ...pictures.hits]);
          setTotalPicture(pictures.totalHits);
          setLoading(false);
        });
      }
    } catch (error) {
      setError(error);
    }
  }, [name, page]);

  const handleButtonMore = (ev) => {
    setPage((page) => page + 1);
  };

  const resetPage = () => {
    setPage(1);
    setPictures([]);
  };

  const handlerSearchBar = (nameSearchbar) => {
    setName(nameSearchbar);
    resetPage();
  };

  return (
    <div>
      {loading && <Loader />}
      <ToastContainer autoClose={3000} />
      <Searchbar onSubmit={handlerSearchBar} />
      <ImageGallery pictures={pictures} />

      <div className={s.boxButton}>
        {pictures.length !== 0 && page !== Math.ceil(totalPicture / 12) && (
          <Button onClickLoad={handleButtonMore} />
        )}
      </div>
    </div>
  );
}

export default App;
