import React from "react";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";

/**
 * Header Component
 *
 * Displays the top navigation bar with a centered title and a crypto icon.
 */

const Header = () => (
  <AppBar position="static" sx={{ backgroundColor: "#1e1e2f", boxShadow: 3 }}>
    <Toolbar>
      <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box display="flex" alignItems="center" gap={1}>
          {/* <CurrencyBitcoinIcon sx={{ color: "#f2a900" }} /> */}
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#ffffff" }}>
            Crypto Price Tracker
          </Typography>
        </Box>
      </Container>
    </Toolbar>
  </AppBar>
);

export default Header;
