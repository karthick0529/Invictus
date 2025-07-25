import React from "react";
import { CircularProgress, Box } from "@mui/material";

/**
 * Loader component
 *
 * Displays a centered circular progress spinner to indicate loading state.
 * Typically used while data is being fetched or processed.
 *
 * @returns {JSX.Element} A Material UI CircularProgress component centered on the page.
 */


const Loader = () => (
  <Box display="flex" justifyContent="center" mt={4}>
    <CircularProgress />
  </Box>
);

export default Loader;
