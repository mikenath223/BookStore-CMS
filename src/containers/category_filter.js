import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = props => {
  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const { onClick } = props;
  return (
    <div className="form-group">
      <label htmlFor="category">
        <h5  className="">Select Book Category</h5>
        <select name="category" className="select-field form-control" onChange={e => onClick(e)}>
          <option value="">All</option>
          {bookCategories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

CategoryFilter.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CategoryFilter;
