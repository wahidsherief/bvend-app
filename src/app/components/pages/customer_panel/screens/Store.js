import { Box, Container, Grid } from "@mui/material";
import { fetchStore } from "features/StoreSlice";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BottomSheet from "./BottomSheet";
import ProductCard from "./ProductCard";

const Store = () => {
    const dispatch = useDispatch()

    const { data: products } = useSelector(state => state.store)

    useEffect(() => {
        dispatch(fetchStore())
    }, [dispatch])

    const cart = useSelector(state => state.cart)


    return (

        <Fragment>
            {/* <Topbar /> */}

            <Container sx={{ py: 2, maxWidth: '500px !important', margin: 'auto' }}>
                <Grid container spacing={2}>
                    {products.map((product) => (
                        <Grid item xs={6} md={6} key={product.id}>
                            <ProductCard product={product} />
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {cart.length > 0 && <Box height={110} />}
            <BottomSheet show={cart.length} cart={cart} />
        </Fragment>

    );
};

export default Store
