import { combineReducers } from 'redux';
import {booksReducer} from './booksReducer';
import {filterReducer} from './filterReducer';
import {cartReducer} from './cartReducer';


export default combineReducers({
  books: booksReducer,
  filter: filterReducer,
  cart: cartReducer
});
