import React from "react";
import { Typography, Box } from "@mui/material";

/**
 * Error Component
 *
 * Displays an error message in a centered layout using Material UI.
 * Typically used when a data fetch or operation fails and an error needs to be shown to the user.
 *
 * Props:
 * @param {Object} props
 * @param {string} props.message - The error message to display.
 *
 * Example:
 * <Error message="Failed to fetch data. Please try again later." />
 */

const Error = ({ message }) => (
  <Box mt={4} textAlign="center">
    <Typography color="error">{message}</Typography>
  </Box>
);

export default Error;
