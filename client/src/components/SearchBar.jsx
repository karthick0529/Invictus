import React from "react";
import { Autocomplete, TextField, Box } from "@mui/material";
/**
 * SearchBar Component
 *
 * A searchable input field with autocomplete functionality for selecting popular cryptocurrencies.
 * Users can either type manually or pick from a predefined list of popular coins.
 *
 * Props:
 * - query (string): The current value of the search input.
 * - setQuery (function): Function to update the search query state.
 *
 * Features:
 * - Autocomplete dropdown with popular coins (e.g., Bitcoin, Ethereum, Tether).
 * - Allows both manual input and selection from suggestions.
 * - Styled using Material UI for consistent look and feel.
 *
 * Dependencies:
 * - @mui/material (Autocomplete, TextField, Box)
 */

const popularCoins = [
  { id: "bitcoin", name: "Bitcoin" },
  { id: "ethereum", name: "Ethereum" },
  { id: "tether", name: "Tether" },
  { id: "bnb", name: "BNB" },
  { id: "ripple", name: "Ripple" },
];

const SearchBar = ({ query, setQuery }) => {
  return (
    <Box display="flex" justifyContent="center" mt={2} mb={2}>
      <Autocomplete
        freeSolo
        options={popularCoins.map((coin) => coin.name)}
        value={query}
        onInputChange={(event, newInputValue) => setQuery(newInputValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search by name or symbol"
            variant="outlined"
            size="small"
            sx={{
              width: "300px",
              backgroundColor: "#fff",
              borderRadius: 1,
              boxShadow: 1,
            }}
          />
        )}
      />
    </Box>
  );
};

export default SearchBar;
