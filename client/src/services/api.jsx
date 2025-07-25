import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

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

export const fetchChartData = async (id, days = 7) => {
  const response = await axios.get(`${BASE_URL}/coins/${id}/market_chart`, {
    params: {
      vs_currency: "usd",
      days,
    },
  });
  return response.data.prices;
};
