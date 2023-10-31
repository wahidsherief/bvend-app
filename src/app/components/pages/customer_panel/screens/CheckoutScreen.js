import { Button, Avatar, Box, Card, Typography } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { addToCart, removeFromCart } from "features/CartSlice";
import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FlexBetween } from "../styles";
import { useDispatch, useSelector } from "react-redux";

const CheckoutScreen = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    console.log('crt 1', cart)


    const navigate = useNavigate();

    useEffect(() => {
        cart.length === 0 && navigate('/store')
    }, [cart, navigate])

    const discount = 0;
    const subTotal = cart.reduce((prev, curr) => prev + curr.quantity * curr.price, 0);
    const total = subTotal - discount;

    const handlePayment = () => {
        // dispatch(clearCart())
        // navigate('/complete')
        navigate('/payment')
    };

    const selectedProductList = () => (
        cart.map((product) =>
            <Card
                sx={{
                    mb: 1,
                    padding: 1,
                    boxShadow: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Avatar
                        src={product.image}
                        sx={{ backgroundColor: "secondary.100", borderRadius: "8px" }}
                    />
                    <Box>
                        <Typography variant="p" fontSize={13} fontWeight={600} display="block">
                            {product.title.substring(0, 15)}...
                        </Typography>

                        <Typography variant="p" fontSize={13} display="block">
                            {product.quantity} x {product.price}
                        </Typography>
                    </Box>

                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography variant="p" fontSize={14} fontWeight={600} display="block">
                        {(product.quantity * product.price).toFixed(1)} Tk
                    </Typography>


                    <Box mt={1} textAlign='center'>
                        <Box onClick={() => dispatch(addToCart(product))} color='primary' >
                            <Add sx={{ fontSize: 14, color: "#1976d2", fontWeight: 700 }} />
                        </Box>

                        <Fragment>
                            <Typography
                                variant="p"
                                fontSize='14px'
                                sx={{ minWidth: 20, textAlign: "center" }}
                            >
                                {product.quantity}
                            </Typography>

                            <Box onClick={() => dispatch(removeFromCart(product.id))}>
                                <Remove sx={{ fontSize: 14, color: "#1976d2", fontWeight: 700 }} />
                            </Box>
                        </Fragment>
                    </Box>
                </Box>
            </Card >
        ))

    return (
        <Box>
            <Box style={{ margin: 10 }}>
                {selectedProductList()}
            </Box>
            <Card sx={{ padding: 2, borderRadius: "4px", bottom: 0, position: 'absolute', width: '100%' }}>
                <FlexBetween mb={1}>
                    <Typography variant="p" fontSize={13} fontWeight={500}>
                        Sub Total
                    </Typography>
                    <Typography variant="p" fontSize={13} fontWeight={500}>
                        {subTotal.toFixed(2)} Tk
                    </Typography>
                </FlexBetween>

                <FlexBetween mb={1}>
                    <Typography variant="p" fontSize={13} fontWeight={500}>
                        Discount
                    </Typography>
                    <Typography variant="p" fontSize={13} fontWeight={500}>
                        {discount.toFixed(2)} Tk
                    </Typography>
                </FlexBetween>

                <FlexBetween mb={1}>
                    <Typography variant="p" fontSize={13} fontWeight={600}>
                        Total
                    </Typography>
                    <Typography variant="p" fontSize={13} fontWeight={600}>
                        {total.toFixed(2)} Tk
                    </Typography>
                </FlexBetween>

                <Button
                    fullWidth
                    variant="contained"
                    onClick={handlePayment}
                    sx={{ mt: 1, py: 1.5, borderRadius: "8px", textTransform: "none" }}
                >
                    Pay with bKash
                </Button>

            </Card>

        </Box >
    )
};

export default CheckoutScreen;
