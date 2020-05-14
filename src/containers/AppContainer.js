import { connect } from 'react-redux';
import App from '../components/App'
import {setBooks} from '../actions/actions'
import orderBy from 'lodash/orderBy';

const sortBy = (books, filterBy) => {
  switch (filterBy) {
    case 'high':
      return orderBy(books, 'price', 'desc');
    case 'low':
      return orderBy(books, 'price', 'asc');
    case 'author':
      return orderBy(books, 'author', 'asc');
    default:
      return books;
  }
};

const filterBooks = (books, searchQuery) =>
  books.filter(
    o =>
      o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
  );

const searchBooks = (books, filterBy, searchQuery) => {
  return sortBy(filterBooks(books, searchQuery), filterBy);
};


const mapStateToProps = ({ books, filter }) => {
  
  return {
    books: books.items && searchBooks(books.items, filter.filterBy, filter.searchQuery),
    isReady: books.isReady,
  };
};
const mapDispatchToProps = {
  setBooks
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
