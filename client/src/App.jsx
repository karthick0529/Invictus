import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CryptoList from './components/CryptoList';
import Loader from './components/Loader';
import Error from './components/Error';
import useFetchCrypto from './hooks/useFetchCrypto';
import PriceChart from './components/PriceChart';
import './styles.css';
import { Box, Button } from '@mui/material';

const App = () => {
  const { data, loading, error, refetch } = useFetchCrypto();
  const [query, setQuery] = useState('');

  const filtered = data.filter((coin) =>
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

        {!loading && !error && filtered.length > 0 && (
          <Box mt={4}>
            <PriceChart coinId={filtered[0].id} />
          </Box>
        )}
      </Box>
    </>
  );
};

export default App;
