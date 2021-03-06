import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== '') {
      setCategories(categories => [inputValue, ...categories]);
      setInputValue('');
    };

  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{inputValue}</p>
      <input type="text" value={inputValue} onChange={handleChange} placeholder="Escribe algo aqui..." />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;