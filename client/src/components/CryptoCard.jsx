import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const CryptoCard = ({ coin }) => (
  <Card
    sx={{
      height: '100%',
      transition: 'transform 0.3s',
      '&:hover': {
        transform: 'scale(1.03)',
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
        color={coin.price_change_percentage_24h > 0 ? 'green' : 'red'}
      >
        24h Change: {coin.price_change_percentage_24h.toFixed(2)}%
      </Typography>
    </CardContent>
  </Card>
);

export default CryptoCard;
