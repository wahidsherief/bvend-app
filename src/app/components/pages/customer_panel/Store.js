import { Box, Container, Grid } from "@mui/material";
import { fetchStore } from "features/StoreSlice";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BottomSheet from "./components/BottomSheet";
import ProductCard from "./components/ProductCard";
import { state } from "./context/CartContext";
// import Topbar from "../components/home/Topbar";


const Store = () => {
    const dispatch = useDispatch()

    const { data, status } = useSelector(state => state.store)

    const [products, setProducts] = useState(data);

    useEffect(() => {
        dispatch(fetchStore())
    }, [dispatch])

    const showBottomSheet = state.cart.length > 0;

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

            {showBottomSheet && <Box height={110} />}
            <BottomSheet show={showBottomSheet} cart={state.cart} />
        </Fragment>

    );
};

export default Store
