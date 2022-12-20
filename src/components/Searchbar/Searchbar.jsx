// import { Component } from 'react';
import style from './Searchbar.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { BiSearchAlt } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { useState } from 'react';

export const SearchBar = ({ onSubmit }) => {
  const [imageName, setImageName] = useState('');

  const handleImageNameChange = event => {
    setImageName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (imageName.trim() === '') {
      toast(`Enter the name of the picture`);
      return;
    }

    onSubmit(imageName);
    setImageName('');
  };

  return (
    <header className={style.Searchbar}>
      <form className={style.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={style.SearchFormButton}>
          <IconContext.Provider
            value={{
              color: 'blue',
              size: '3em',
              className: 'global-class-name',
            }}
          >
            <div>
              <BiSearchAlt />
            </div>
          </IconContext.Provider>
          ;<span className={style.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={style.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={imageName}
          onChange={handleImageNameChange}
        />
      </form>
      <Toaster position="top-right" />
    </header>
  );
};
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
