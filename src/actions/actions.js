import { SET_BOOKS } from "../reducers/booksReducer";

export const setBooks = (books) => {
  return {
    type: SET_BOOKS,
    payload: books,
  };
};
