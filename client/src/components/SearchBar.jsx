import React from 'react';
import { TextField, Box } from '@mui/material';

const SearchBar = ({ query, setQuery }) => (
  <Box display="flex" justifyContent="center" mt={2} mb={2}>
    <TextField
      label="Search by name or symbol"
      variant="outlined"
      size="small"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      sx={{
        width: '300px',
        backgroundColor: '#fff',
        borderRadius: 1,
        boxShadow: 1
      }}
    />
  </Box>
);

export default SearchBar;
