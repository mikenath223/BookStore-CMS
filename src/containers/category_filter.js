import React from 'react';

 const CategoryFilter = (props) => {

    const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const { onClick } = props;
    return (
      <div>
        <label htmlFor="category">
          Select Book Category
            <select name="category" className="select-field" onChange={(e) => onClick(e)}>
            <option value='ALL'>All</option>
            {bookCategories.map(cat => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>
      </div>
    )
}

export default CategoryFilter;