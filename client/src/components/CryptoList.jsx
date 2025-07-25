import React from 'react';
import CryptoCard from './CryptoCard';
import { Grid } from '@mui/material';

const CryptoList = ({ coins }) => (
  <Grid container spacing={3}>
    {coins.map((coin) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={coin.id}>
        <CryptoCard coin={coin} />
      </Grid>
    ))}
  </Grid>
);

export default CryptoList;
