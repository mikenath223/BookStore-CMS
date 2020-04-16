import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CREATE_BOOK } from '../actions/index';

const mapDispatchToProps = dispatch => ({
  addBook: book => {
    dispatch(CREATE_BOOK(book));
  },
});


class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, elem) {
    switch (elem) {
      case 'title':
        this.setState({
          title: e.target.value,
        });
        break;
      default:
        this.setState({
          category: e.target.value,
        });
        break;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { addBook } = this.props;
    addBook(this.state);
    this.setState({
      title: '',
      category: '',
    });
  }

  render() {
    const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const { category, title } = this.state;
    return (
      <form>
        <fieldset className="form-field">
          <label htmlFor="title">
            Book Title
            <input type="text" value={title} name="title" id="title" onChange={e => this.handleChange(e, 'title')} className="input-title" />
          </label>

        </fieldset>
        <fieldset>
          <label htmlFor="category">
            Book Category
            <select name="category" value={category} className="select-field" onChange={e => this.handleChange(e, 'category')}>
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
}

BookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BookForm);
