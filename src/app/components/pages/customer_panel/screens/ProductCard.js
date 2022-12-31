import { Add, Remove } from "@mui/icons-material";
import { Box, Button, Card, Typography } from "@mui/material";
import { addToCart, removeFromCart } from "features/CartSlice";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlexBetween, FlexCenter } from "../styles";

const ProductCard = ({ product }) => {


  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)

  const cartItem = cart.find(item => item.id === product.id)

  const handleAddToCart = productId => {
    const findIndex = cart.findIndex((item) => item.id === productId)
    if (findIndex === -1 && cart.length > 4) alert("Can't choose more than 5 products !!")
    else dispatch(addToCart(product))
  }

  return (
    <Card>
      <FlexCenter sx={{ height: 150, overflow: "hidden" }}>
        <img src={product.image} width="100%" alt="Product" />
      </FlexCenter>

      <Box py={1} px={{ xs: 1.5, sm: 2 }}>
        <Typography variant="p" fontSize={13} fontWeight={600} color="primary">
          {product.title.substring(0, 12)}
        </Typography>

        <Typography variant="h6" fontSize={16} fontWeight={700}>
          {product.price} Tk
        </Typography>

        <FlexBetween mt={1}>
          <Button fullWidth variant="contained" onClick={() => handleAddToCart(product.id)} >
            <Add sx={{ fontSize: 14, color: "#fff" }} />
          </Button>

          {cartItem && cartItem.quantity > 0 && (
            <Fragment>
              <Typography
                variant="p"
                fontWeight={600}
                color="primary"
                sx={{ minWidth: 20, textAlign: "center" }}
              >
                {cartItem.quantity}
              </Typography>


              <Button fullWidth variant="contained" onClick={() => dispatch(removeFromCart(product.id))}>
                <Remove sx={{ fontSize: 14, color: "#fff" }} />
              </Button>
            </Fragment>
          )}

        </FlexBetween>
      </Box>
    </Card >
  );
};

export default ProductCard;
