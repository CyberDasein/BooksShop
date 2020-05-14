import React from "react";
import { connect } from "react-redux";
import { removeFromCart, addToCart } from "../actions/books";
import uniqBy from "lodash/uniqBy";
import { MenuComponent } from './../components/MenuComponent';

class MenuContainer extends React.Component {
  render() {
    return <MenuComponent {...this.props} />;
  }
}

const mapStateToProps = ({ cart }) => ({
  totalPrice: cart.items.reduce((total, book) => total + book.price, 0),
  count: cart.items.length,
  items: uniqBy(cart.items, (o) => o.id),
});

const mapDispatchToProps = {
  removeFromCart,
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
