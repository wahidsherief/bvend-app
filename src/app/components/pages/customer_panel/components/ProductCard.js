import { Add, Remove } from "@mui/icons-material";
import { Box, Button, Card, Typography } from "@mui/material";
import { add, remove } from "features/CartSlice";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlexBetween, FlexCenter } from "../styles";

const ProductCard = ({ product }) => {

  const dispatch = useDispatch()

  console.log('xx', product)

  const { data, status } = useSelector((state) => state.cart)

  console.log('yy', data)

  // find product from cart
  const cartItem = data.find((item) => item.id === product.id);

  // // increment product quantity
  const handleAddQuantity = () => {
    dispatch(add({ ...product, qty: 1 }))
  }

  // // decrement product quantity
  // const handleRemoveQuantity = () => {
  //   if (cartItem.qty > 1) {
  //     dispatch({ type: "REMOVE_QTY", payload: product });
  //   } else {
  //     dispatch({ type: "REMOVE_TO_CART", payload: product });
  //   }
  // };

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

        <FlexBetween mt={1} gap={1}>
          <Button fullWidth variant="contained" onClick={handleAddQuantity}>
            <Add sx={{ fontSize: 14, color: "#fff" }} />
          </Button>

          {!!cartItem && cartItem.qty > 0 && (
            <Fragment>
              <Typography
                variant="p"
                fontWeight={600}
                color="primary"
                sx={{ minWidth: 20, textAlign: "center" }}
              >
                {cartItem.qty}
              </Typography>

              {/* <Button fullWidth variant="contained" onClick={handleRemoveQuantity}> */}
              <Button fullWidth variant="contained">
                <Remove sx={{ fontSize: 14, color: "#fff" }} />
              </Button>
            </Fragment>
          )}
        </FlexBetween>
      </Box>
    </Card>
  );
};

export default ProductCard;
