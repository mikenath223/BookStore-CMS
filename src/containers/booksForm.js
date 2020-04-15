import React from 'react';

class BookForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      category: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  render() {
    const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
      <form >
        <fieldset className="form-field">
          <label htmlFor="title">
            Book Title
          <input type="text" name="title" id="title"  className="input-title" />
          </label>

        </fieldset>
        <fieldset>
          <label htmlFor="category">
            Book Category
          <select name="category" className="select-field" >
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
  }
};

export default BookForm;
