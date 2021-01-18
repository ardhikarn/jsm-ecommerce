import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";

import CartItem from "./CartItem/CartItem";
import useStyles from "./styles";

const Cart = ({ cart }) => {
  const classes = useStyles();

  if (!cart.line_items) return "loading ...";

  const emptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart
    </Typography>
  );

  const filledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <CartItem item={lineItem} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
          >
            Empty cart
          </Button>
          <Button
            className={classes.checkoutButton}
            to="/checkout"
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {/* 0 = falsy !0 = truthy */}
      {!cart.line_items.length ? emptyCart() : filledCart()}
    </Container>
  );
};
export default Cart;
