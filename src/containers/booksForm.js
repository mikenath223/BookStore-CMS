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
    const bookCategories = ['Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const { category, title } = this.state;
    return (
      <div className="container-fluid">
        <h3>Add new book</h3>
        <form onSubmit={this.handleSubmit.bind(this)} className="d-flex row">
        
          <fieldset className="form-group col-6">
            <input type="text" value={title} className="form-control" name="title" id="title" onChange={e => this.handleChange(e, 'title')} required />
          </fieldset>
          <fieldset className="form-group col-4">
            <select name="category" value={category} className="form-control select-field" onChange={e => this.handleChange(e, 'category')} required>
              <option value="">Category</option>
              {bookCategories.map(cat => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          
          </fieldset>
          <button type="submit" className="col-2 submit-button">Add Book</button>
        </form>
      </div>
    );
  }
}

BookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BookForm);
