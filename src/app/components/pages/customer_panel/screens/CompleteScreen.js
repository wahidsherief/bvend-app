import { CheckCircleOutline } from "@mui/icons-material";
import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const CompleteScreen = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Stack alignItems="center" justifyContent="center" height="100vh">
                <Typography textAlign="center" variant="h4" color="primary" fontWeight={700}>
                    Collect Your Product Now!
                </Typography>

                <CheckCircleOutline sx={{ color: "primary.main", fontSize: 140, my: 5 }} />

                <Button
                    fullWidth
                    variant="contained"
                    onClick={() => navigate("/store")}
                    sx={{ mt: 5, py: 1.5, borderRadius: "8px", textTransform: "none" }}
                >
                    Buy Again
                </Button>
            </Stack>
        </Container>
    );
};

export default CompleteScreen;
