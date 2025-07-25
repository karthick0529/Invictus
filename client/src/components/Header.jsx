import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Header = () => (
  <AppBar position="static" sx={{ backgroundColor: '#1e1e2f', boxShadow: 3 }}>
    <Toolbar>
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
          Crypto Price Tracker
        </Typography>
      </Container>
    </Toolbar>
  </AppBar>
);

export default Header;
