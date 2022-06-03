import PropTypes from "prop-types";
import Modal from "../Modal";
import s from "./ImageGalleryItem.module.css";
import { useState } from "react";

function ImageGalleryItem({ largeImageURL, webformatURL }) {
  const [showModal, setShowModal] = useState(false);

  const handlerModal = () => {
    setShowModal(!showModal);
  };
  return (
    <li className={s.ImageGalleryItem}>
      <img
        className={s.ImageGalleryItemImage}
        src={webformatURL}
        alt=""
        onClick={handlerModal}
      />
      {showModal && (
        <Modal onModalClose={handlerModal}>
          <img src={largeImageURL} alt="" />
        </Modal>
      )}
    </li>
  );
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,

  webformatURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
