import React from "react";
import {
    Box,
    Typography,
    useTheme,
    useMediaQuery,
    InputBase,
} from "@mui/material";
import Form from "./Form.js";

const Login = () => {
    const theme = useTheme();
    const isNonMobile = useMediaQuery("(min-width: 1000px)");

    return (
      <Box>
        <Box
          width={isNonMobile ? "60%" : "90%"}
          backgroundColor={theme.palette.background.default}
          p="2rem 6%"
          textAlign="center"
          border="0rem"
          margin="auto"
        >
          <Typography
            fontWeight="500"
            variant="h5"
            sx={{ mb: "1.5rem" }}
            fontSize="30px"
            textAlign="center"
          >
            Log in to your Udemy account
          </Typography>
          <Box width={'50%'} margin={"auto"}> 
            <Form />
          </Box>
        </Box>
      </Box>
    );
};

export default Login;
