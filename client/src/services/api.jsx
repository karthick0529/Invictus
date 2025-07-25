/**
 * Crypto API Service - CoinGecko Integration
 *
 * Provides functions to fetch cryptocurrency market and chart data using CoinGecko's public API.
 */

import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

/**
 * Fetches top 10 cryptocurrencies by market cap in USD.
 *
 * @async
 * @function fetchMarketData
 * @returns {Promise<Array>} A promise that resolves to an array of cryptocurrency market data.
 * @throws {Error} If the API request fails.
 */

export const fetchMarketData = async () => {
  const response = await axios.get(`${BASE_URL}/coins/markets`, {
    params: {
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: 10,
      page: 1,
      sparkline: false,
    },
  });
  return response.data;
};

/**
 * Fetches historical price chart data for a specific coin.
 *
 * @async
 * @function fetchChartData
 * @param {string} id - The CoinGecko coin ID (e.g., "bitcoin").
 * @param {number} [days=7] - Number of days to retrieve chart data for (e.g., 1, 7, 30).
 * @returns {Promise<Array>} A promise that resolves to an array of [timestamp, price] pairs.
 * @throws {Error} If the API request fails.
 */

export const fetchChartData = async (id, days = 7) => {
  const response = await axios.get(`${BASE_URL}/coins/${id}/market_chart`, {
    params: {
      vs_currency: "usd",
      days,
    },
  });
  return response.data.prices;
};
