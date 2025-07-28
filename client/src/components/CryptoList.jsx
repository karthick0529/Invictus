import React from "react";
import CryptoCard from "./CryptoCard";
import { Grid, Box } from "@mui/material";

/**
 * CryptoList Component
 *
 * Displays a responsive grid layout of `CryptoCard` components using MUI's Grid system.
 * Each card represents a cryptocurrency and adapts responsively across screen sizes:
 * - Full width on extra-small screens
 * - Half width on small screens
 * - One-third width on medium screens
 * - One-fourth width on large screens
 *
 * Props:
 * @param {Object[]} coins - Array of cryptocurrency objects.
 * Each object should include: id, name, symbol, image, current_price, market_cap, price_change_percentage_24h.
 *
 * Example:
 * <CryptoList coins={coinDataArray} />
 */

const CryptoList = ({ coins }) => (
  <Grid
    container
    columns={{ xs: 4, sm: 8, md: 12 }}
    columnSpacing={3}
    rowSpacing={3}
    justifyContent="center"
  >
    {coins.map((coin) => (
      <Grid
        key={coin.id}
        sx={{ display: "flex", justifyContent: "center" }}
        xs={4} // takes full width on mobile (4 of 4)
        sm={4} // half width on small (4 of 8)
        md={4} // one-third on medium (4 of 12)
      >
        <Box maxWidth={300} width="100%">
          <CryptoCard coin={coin} />
        </Box>
      </Grid>
    ))}
  </Grid>
);

export default CryptoList;
