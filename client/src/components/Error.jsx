import React from 'react';
import { Typography, Box } from '@mui/material';

const Error = ({ message }) => (
  <Box mt={4} textAlign="center">
    <Typography color="error">{message}</Typography>
  </Box>
);

export default Error;
