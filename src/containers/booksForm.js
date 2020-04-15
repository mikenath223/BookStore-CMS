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
  handleChange(e, elem) {
    switch (elem) {
      case 'title':
        this.setState({
          title: e.target.value
        })
        break;
      default:
        this.setState({
          category: e.target.value
        })
        break;
    }
  }

  render() {
    const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
      <form >
        <fieldset className="form-field">
          <label htmlFor="title">
            Book Title
          <input type="text" name="title" id="title" onChange={(e) => this.handleChange(e, 'title')} className="input-title" />
          </label>

        </fieldset>
        <fieldset>
          <label htmlFor="category">
            Book Category
          <select name="category" className="select-field" onChange={(e) => this.handleChange(e, 'category')}>
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
