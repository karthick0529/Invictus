import React from "react";
import CryptoCard from "./CryptoCard";
import { Grid } from "@mui/material";

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
  <Grid container spacing={3} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
    {coins.map((coin) => (
      <Grid key={coin.id} colSpan={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <CryptoCard coin={coin} />
      </Grid>
    ))}
  </Grid>
);

export default CryptoList;
