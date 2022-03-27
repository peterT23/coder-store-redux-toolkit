import React from "react";
import { Col, Row } from "react-bootstrap";
import productOne from "../images/product1.gif";
import productTwo from "../images/product2.gif";
import ReactJson from "react-json-view";
import { useSelector, useDispatch } from "react-redux";
import cartActions from "../redux/actions/cart.actions";
import WrapperBox from "../components/WrapperBox";
import { Container, Button, Typography, Box, Grid } from "@mui/material"


const RootComponent = (props) => {
  return (
    <WrapperBox>
      <Typography p="0.5rem" variant="h5" sx={{ backgroundColor: "background.primary", color: "background.contrastText" }}>
        RootComponent {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>{Object.keys(props).join(", ")}</Box>
        {`})`}
      </Typography>
      <Grid container spacing={2} p="1rem">
        <Grid item md={6}>
          <ProductPage />
        </Grid>
        <Grid item md={6}>
          <CartPage />
        </Grid>
      </Grid>
    </WrapperBox>
  );
};

const ProductPage = (props) => {
  return (
    <WrapperBox>
      <Typography p="0.5rem" variant="h5" sx={{ backgroundColor: "background.primary", color: "background.contrastText" }}>
        Product Page {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>{Object.keys(props).join(", ")}</Box>
        {`})`}
      </Typography>
      <Grid container spacing={2} p="1rem">
        <Grid item md={6}>
          <ProductOne />
        </Grid>
        <Grid item md={6}>
          <ProductTwo />
        </Grid>
      </Grid>
    </WrapperBox>
  );
};

const CartPage = (props) => {
  // Step 6
  // Replace the line below to get data of the second product from state.cart.totalPrice
  // const totalPrice = "...";
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <WrapperBox>
      <Typography p="0.5rem" variant="h5" sx={{ backgroundColor: "background.primary", color: "background.contrastText" }}>
        Cart Page {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>{Object.keys(props).join(", ")}</Box>
        {`})`}
      </Typography>
      <Grid container spacing={2} p="1rem">
        <Grid item md={6}>
          <CartProductOne />
        </Grid>
        <Grid item md={6}>
          <CartProductTwo />
        </Grid>
        <Grid item md={12}>
          <Typography p="0.5rem" variant="h5">Total Price: 💵 {totalPrice}</Typography>
        </Grid>
      </Grid>
    </WrapperBox>
  );
};

const ProductOne = (props) => {
  // Step 4
  // Replace the line below to get data of the first product from state.product
  // You should see the price is updated
  // const product = { title: "Product 1", price: 0, qty: 0 };
  const product = useSelector((state) => state.product[0]);

  // Step 7
  // Define: const dispatch = useDispatch();
  // Create a function to handle click event of the button Add
  // In the function, dispatch cartActions.addProduct(product) to trigger the action add product to the cart
  // Make the function handle onClick event of the button
  const dispatch = useDispatch();

  const addProduct = () => {
    dispatch(cartActions.addProduct(product));
  };

  // Step 8
  // Create a function to handle click event of the button Remove
  // In the function, dispatch cartActions.removeProduct(product) to trigger the action remove product from the cart
  // Make the function handle onClick event of the button
  const removeProduct = () => {
    dispatch(cartActions.removeProduct(product));
  };

  return (
    <WrapperBox>
      <Typography p="0.5rem" variant="h5" sx={{ backgroundColor: "background.primary", color: "background.contrastText" }}>
        {product.title} {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>{Object.keys(props).join(", ")}</Box>
        {`})`}
      </Typography >
      <Grid container justifyContent="center">
        <Grid item xs={8}>
          <img src={productOne} alt="Product One" width="100%" />
          <Typography p="0.5rem" variant="h6" sx={{ color: "success.main" }}>💵 {product.price}</Typography>
        </Grid>
        <Grid item xs={8} >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="success"
              sx={{ width: "5rem" }}
              onClick={addProduct}
            >
              Add
            </Button>
            <Button
              variant="error"
              sx={{ width: "5rem" }}
              onClick={removeProduct}
            >
              Remove
            </Button>
          </div>
        </Grid>
      </Grid>
    </WrapperBox >


  );
};

const ProductTwo = (props) => {
  // Step 5
  // Replace the line below to get data of the second product from state.product
  // You should see the price is updated
  // const product = { title: "Product 2", price: 0, qty: 0 };
  const product = useSelector((state) => state.product[1]);

  // Step 9
  // Repeat step 7 and 8 for this component
  const dispatch = useDispatch();

  const addProduct = () => {
    dispatch(cartActions.addProduct(product));
  };

  const removeProduct = () => {
    dispatch(cartActions.removeProduct(product));
  };

  return (
    <WrapperBox>
      <Typography p="0.5rem" variant="h5" sx={{ backgroundColor: "background.primary", color: "background.contrastText" }}>
        {product.title} {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>{Object.keys(props).join(", ")}</Box>
        {`})`}
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={8}>
          <img src={productTwo} alt="Product Two" width="100%" />
          <Typography p="0.5rem" variant="h5" sx={{ color: "success.main" }}>💵 {product.price}</Typography>
        </Grid>
        <Grid item xs={8} >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="success"
              sx={{ width: "5rem" }}
              onClick={addProduct}>
              Add
            </Button>
            <Button
              variant="error"
              sx={{ width: "5rem" }}
              onClick={removeProduct}
            >
              Remove
            </Button>
          </div>
        </Grid>
      </Grid>
    </WrapperBox>
  );
};

const CartProductOne = (props) => {
  // Step 2
  // Replace the line below to get data of the first product from state.cart.products
  // Change the price of products in `cart.reducer.js` to see the effect
  // const product = { price: "...", qty: "..." };
  const product = useSelector((state) => state.cart.products[0]);

  return (
    <WrapperBox>
      <Typography p="0.5rem" variant="h5" sx={{ backgroundColor: "background.primary", color: "background.contrastText" }}>
        CartProduct 1 {`({`}
        <Box component="span" sx={{ color: "warning.main" }} >{Object.keys(props).join(", ")}</Box>
        {`})`}
      </Typography>
      <Container fluid>
        <Box >
          <Typography p="0.5rem" variant="h6">Quantity: {product.qty}</Typography>
          <Typography p="0.5rem" variant="h6">Price: 💵 {product.price}</Typography>
        </Box>
      </Container>
    </WrapperBox>
  );
};

const CartProductTwo = (props) => {
  // Step 3
  // Replace the line below to get data of the second product from state.cart.products
  // Change the price of products in `cart.reducer.js` to see the effect
  // const product = { price: "...", qty: "..." };
  const product = useSelector((state) => state.cart.products[1]);

  return (
    <WrapperBox>
      <Typography p="0.5rem" variant="h5" sx={{ backgroundColor: "background.primary", color: "background.contrastText" }}>
        CartProduct 2 {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>{Object.keys(props).join(", ")}</Box>
        {`})`}
      </Typography >
      <Box>
        <Typography p="0.5rem" variant="h6">Quantity: {product.qty}</Typography>
        <Typography p="0.5rem" variant="h6">Price: 💵 {product.price}</Typography>
      </Box>
    </WrapperBox>
  );
};

const Store = (props) => {
  // Step 1
  // use useSelector() to get the data of products and cart in the store
  // pass {products, cart} to the src attribut of the component <ReactJson/>
  const products = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart);
  return (
    <WrapperBox>
      <Typography p="0.5rem" variant="h5" sx={{ backgroundColor: "background.primary", color: "background.contrastText" }}>
        Store
      </Typography>
      <Box sx={{ textAlign: "start" }}>
        <ReactJson
          name="store"
          src={{ products, cart }}
          theme="monokai"
          displayDataTypes={false}
          displayObjectSize={false}
        />
      </Box>
    </WrapperBox>
  );
};


const ReduxFinal = () => {
  return (
    <Container maxWidth="xxl">
      <br />
      <h5>How to add products to the cart using Redux?</h5>
      <br />
      <Grid container spacing={2}>
        <Grid item md={3}>
          <Store />
        </Grid>
        <Grid item md={9}>
          <RootComponent />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ReduxFinal;
