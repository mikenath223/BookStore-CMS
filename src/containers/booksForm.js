import React from 'react';

const BookForm = () => {
  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form>
      <fieldset>
        <label htmlFor="title">
          Book Title
          <input type="text" name="title" id="title" />
        </label>

      </fieldset>
      <fieldset>
        <label htmlFor="category">
          Book Category
          <select name="category">
            {bookCategories.map(cat => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>
      </fieldset>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
