import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

/**
 * CryptoCard Component
 *
 * Displays a styled card containing cryptocurrency information such as:
 * - Name and symbol
 * - Current price
 * - Market capitalization
 * - 24-hour price change (with color indication)
 *
 * Props:
 * @param {Object} coin - The cryptocurrency data object.
 * @param {string} coin.name - Full name of the cryptocurrency.
 * @param {string} coin.symbol - Symbol or ticker of the cryptocurrency.
 * @param {string} coin.image - URL to the coin's logo or icon.
 * @param {number} coin.current_price - Current trading price.
 * @param {number} coin.market_cap - Market capitalization value.
 * @param {number} coin.price_change_percentage_24h - 24h price change in percentage.
 *
 * Example:
 * <CryptoCard coin={coinData} />
 */

const CryptoCard = ({ coin }) => (
  <Card
    sx={{
      height: "100%",
      transition: "transform 0.3s",
      "&:hover": {
        transform: "scale(1.03)",
        boxShadow: 6,
      },
    }}
  >
    <CardContent>
      <Box display="flex" alignItems="center" gap={1} mb={1}>
        <img src={coin.image} alt={coin.name} width={24} height={24} />
        <Typography variant="h6">
          {coin.name} ({coin.symbol.toUpperCase()})
        </Typography>
      </Box>

      <Typography>Price: ${coin.current_price.toLocaleString()}</Typography>
      <Typography>Market Cap: ${coin.market_cap.toLocaleString()}</Typography>
      <Typography
        color={coin.price_change_percentage_24h > 0 ? "green" : "red"}
      >
        24h Change: {coin.price_change_percentage_24h.toFixed(2)}%
      </Typography>
    </CardContent>
  </Card>
);

export default CryptoCard;
