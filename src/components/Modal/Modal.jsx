// import { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Modal.module.css';
import { useEffect } from 'react';

export const Modal = ({ onClose, largeImageURL, tags }) => {
  useEffect(() => {
    window.addEventListener('keydown', closeModalByEsc);
    return () => {
      window.removeEventListener('keydown', closeModalByEsc);
    };
  });
  const closeModalByEsc = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };
  const closeModalOverlay = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  return (
    <div className={style.Overlay} onClick={closeModalOverlay}>
      <div className={style.Modal}>
        <img src={largeImageURL} alt={tags} width="850" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
