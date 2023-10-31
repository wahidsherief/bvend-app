// import { ShoppingBag } from "@mui/icons-material";
import { Container, Grid, Typography, TextField, Button } from '@mui/material';
import React, { Fragment } from "react";
// import { useSelector } from "react-redux";

const PaymentScreen = () => {
    return (
        <Fragment>
            <Container
                maxWidth="xs"
                className="payment-screen-container d-flex align-items-center justify-content-center"
            >
                <Grid container spacing={2}>
                    {/* 1st row - Logo Section */}
                    <Grid item xs={12} container justifyContent="center">
                        <img src='https://community.appinventor.mit.edu/uploads/default/original/3X/7/e/7e5d178642a95e6ecc3dd1d2e12afd0b34bd3031.png' alt="Logo" className="logo" />
                    </Grid>
                    {/* 2nd row - Text and Amount */}
                    <Grid item xs={6}>
                        <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                            Bvend Technology Ltd
                        </Typography>
                    </Grid>
                    <Grid item xs={6} container justifyContent="flex-end">
                        <Typography variant="h5" style={{ textAlign: 'right' }}>
                            &#2547; 5000
                        </Typography>
                    </Grid>


                    {/* 3rd row - Numeric Input */}
                    <Grid item xs={12} container justifyContent="center">
                        <img
                            src="https://pngimg.com/uploads/qr_code/qr_code_PNG17.png" // Replace with the path to your QR code image
                            alt="QR Code"
                            className="qr-code"
                        />
                    </Grid>

                    {/* 4th row - Payment Button */}
                    <Grid item xs={12} container justifyContent="center">
                        <Typography variant="h6" style={{ textAlign: 'center' }}>
                            Open bKash app & scan the QR code for payment
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Fragment>
    );
};

export default PaymentScreen;
