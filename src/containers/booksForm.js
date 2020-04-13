import React from 'react';

const BookForm = () => {
  const bookCategories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]
  return (
    <form>
      <fieldset>
        <label for="title">Book Title</label>
        <input type="text" name="title" id="title" />
      </fieldset>
      <fieldset>
        <label for="category">Book Category</label>
        <select name="category">
          {bookCategories.map(cat => <option value={cat}>{cat}
            </option>)}
        </select>
      </fieldset>
    </form>
  )
}

export default BookForm;