import PropTypes from 'prop-types';
import style from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';
// import { Component } from 'react';
import { useState } from 'react';

export const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  return (
    <>
      <li key={id} className={style.GalleryItem} onClick={toggleModal}>
        <img
          className={style.GalleryItemImg}
          src={webformatURL}
          width="400"
          alt={tags}
        />
      </li>

      {showModal && (
        <Modal
          largeImageURL={largeImageURL}
          tags={tags}
          onClose={toggleModal}
        />
      )}
    </>
  );
};
ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
