import ImageGalleryItem from "../ImageGalleryItem";
import PropTypes from "prop-types";
import s from "./ImageGallery.module.css";

function ImageGallery({ pictures }) {
  return (
    <main className={s.container}>
      <ul className={s.ImageGallery}>
        {pictures.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              largeImageURL={largeImageURL}
              webformatURL={webformatURL}
            />
          );
        })}
      </ul>
    </main>
  );
}

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default ImageGallery;
