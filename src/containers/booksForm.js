import React from 'react';
import { CREATE_BOOK } from '../actions/index';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  addBook: book => {
    dispatch(CREATE_BOOK(book));
  }
});


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

  handleSubmit(e) {
    e.preventDefault()
    this.props.addBook(this.state)
    this.setState({
      title: '',
      category: ''
    })
  }

  render() {
    const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
      <form >
        <fieldset className="form-field">
          <label htmlFor="title">
            Book Title
          <input type="text" value={this.state.title} name="title" id="title" onChange={(e) => this.handleChange(e, 'title')} className="input-title" />
          </label>

        </fieldset>
        <fieldset>
          <label htmlFor="category">
            Book Category
          <select name="category" value={this.state.category} className="select-field" onChange={(e) => this.handleChange(e, 'category')}>
              {bookCategories.map(cat => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </label>
        </fieldset>
        <button type="submit" onClick={this.handleSubmit.bind(this)}>Add Book</button>
      </form>
    );
  }
};


export default connect(null, mapDispatchToProps)(BookForm);
