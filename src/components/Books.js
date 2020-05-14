import React from "react";
import { connect } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { addToCart, removeFromCart } from './../actions/books';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    minHeight: 320
  },
  author: {
      marginTop: 10,
      marginBottom: 21
  },
  addBtn: {
      width: "100%"
  }
});

export const Books = (book) => {
  const { title, author, price, image, addToCart, addedCount } = book;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography  component="h6">
            {title}
          </Typography>
          <Typography className={classes.author} variant="body2" color="textSecondary" component="p">
            {author}
          </Typography>
          <Typography variant="body3" color="textSecondary" component="p">
                Цена: <strong>{price}р</strong>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <Button onClick={() => addToCart(book)} className={classes.addBtn} size="small"color="primary">
          Добавить в корзину {addedCount > 0 && `(${addedCount})`}
        </Button>
      </CardActions>
    </Card>
  );
};

const mapStateToProps = ({ cart }, { id }) => ({
  addedCount: cart.items.reduce((count, book) => count + (book.id === id ? 1 : 0), 0)
});


const mapDispatchToProps = {
  addToCart,
  removeFromCart
};



export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Books);