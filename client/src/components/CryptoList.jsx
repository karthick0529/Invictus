import React from "react";
import CryptoCard from "./CryptoCard";
import { Grid, Box } from "@mui/material";

/**
 * CryptoList Component
 *
 * Displays a consistent and responsive grid of `CryptoCard` components.
 * Cards are centered, have a max width, and maintain equal size across screen sizes.
 *
 * Props:
 * @param {Object[]} coins - Array of cryptocurrency objects.
 * Each object should include: id, name, symbol, image, current_price, market_cap, price_change_percentage_24h.
 */

const CryptoList = ({ coins }) => (
  <Grid
    container
    spacing={3}
    justifyContent="center"
  >
    {coins.map((coin) => (
      <Grid
        item
        key={coin.id}
        xs={12}
        sm={6}
        md={4}
        lg={3}
        display="flex"
        justifyContent="center"
      >
        <Box maxWidth={300} width="100%">
          <CryptoCard coin={coin} />
        </Box>
      </Grid>
    ))}
  </Grid>
);

export default CryptoList;
