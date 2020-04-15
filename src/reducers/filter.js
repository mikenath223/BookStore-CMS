import { FILTER_BOOK } from "../actions";

export default filter = (state = [], action) => {
  switch (action.type) {
    case FILTER_BOOK:
      return [
        ...state,
      ].filter(bk => bk.category === category)
    default:
      return state
  }
}