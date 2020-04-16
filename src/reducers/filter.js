import { FILTER_BOOK } from '../actions';

const filterCategory = (state = [], action) => {
  switch (action.type) {
    case FILTER_BOOK:
      return { ...state, filter: action.category };
    default:
      return state;
  }
};

export default filterCategory;
