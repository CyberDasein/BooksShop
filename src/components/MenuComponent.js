import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import { CartComponent } from "./CartComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    
    [theme.breakpoints.down("sm")]: {
      marginRight: 20,
      fontSize: "1rem"
    },
  },
  typography: {
    padding: theme.spacing(2),
  },
  price: {
    marginRight: "20px",
  },
}));

export const MenuComponent = ({ totalPrice, count, items, removeFromCart }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Магазин книг
          </Typography>
          <Typography className={classes.price}>
            {" "}
            Итого: &nbsp; <strong>{totalPrice}</strong>&nbsp;rub{" "}
          </Typography>
          <Button
            aria-describedby={id}
            variant="contained"
            color="secondary"
            onClick={handleClick}
          >
            Корзина
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Typography className={classes.typography}>
              {items.map((book) => (
                <CartComponent key={book.id} removeFromCart={removeFromCart} items={book} />
              ))}
            </Typography>
          </Popover>
        </Toolbar>
      </AppBar>
    </div>
  );
};
