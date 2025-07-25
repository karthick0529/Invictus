import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CryptoList from './components/CryptoList';
import Loader from './components/Loader';
import Error from './components/Error';
import useFetchCrypto from './hooks/useFetchCrypto';
import PriceChart from './components/PriceChart';
import './styles.css';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';

const App = () => {
  const { data, loading, error, refetch } = useFetchCrypto();
  const [query, setQuery] = useState('');
  const [selectedCoin, setSelectedCoin] = useState('bitcoin');

  const popularCoins = [
    { id: 'bitcoin', name: 'Bitcoin' },
    { id: 'ethereum', name: 'Ethereum' },
    { id: 'dogecoin', name: 'Dogecoin' },
    { id: 'solana', name: 'Solana' },
    { id: 'ripple', name: 'Ripple' },
  ];

  const filtered = data.filter(
    (coin) =>
      coin.name.toLowerCase().includes(query.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Header />
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2 }}>
        {/* Search and Refresh section */}
        <Box display="flex" flexDirection="column" alignItems="center" gap={2} my={3}>
          <SearchBar query={query} setQuery={setQuery} />
          <Button
            variant="contained"
            onClick={refetch}
            sx={{
              textTransform: 'none',
              backgroundColor: '#1976d2',
              '&:hover': { backgroundColor: '#1565c0' },
            }}
          >
            ⟳ Refresh
          </Button>
        </Box>

        {loading && <Loader />}
        {error && <Error message={error} />}
        {!loading && !error && <CryptoList coins={filtered} />}

        {/* Dropdown and Chart */}
        {!loading && !error && (
          <Box mt={5}>
            <Box mb={2} maxWidth={300}>
              <FormControl fullWidth size="small">
                <InputLabel>Select Coin</InputLabel>
                <Select
                  value={selectedCoin}
                  label="Select Coin"
                  onChange={(e) => setSelectedCoin(e.target.value)}
                >
                  {popularCoins.map((coin) => (
                    <MenuItem key={coin.id} value={coin.id}>
                      {coin.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <PriceChart coinId={selectedCoin} />
          </Box>
        )}
      </Box>
    </>
  );
};

export default App;
