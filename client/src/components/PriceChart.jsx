import React, { useEffect, useState, useMemo } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { fetchChartData } from "../services/api";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

/**
 * PriceChart Component
 *
 * Displays a line chart representing the historical price trend of a selected cryptocurrency.
 * Users can choose different timeframes (1 day, 7 days, 30 days) to visualize the price changes.
 * The chart is built using Chart.js and renders with the help of react-chartjs-2.
 *
 * Props:
 * - coinId (string): The ID of the cryptocurrency to fetch and display chart data for.
 *
 * Features:
 * - Dynamically fetches chart data based on selected coin and timeframe.
 * - Interactive timeframe selection with a dropdown.
 * - Responsive and styled chart layout using Material UI.
 *
 * Dependencies:
 * - chart.js, react-chartjs-2, @mui/material
 */

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PriceChart = ({ coinId }) => {
  const [chartData, setChartData] = useState([]);
  const [days, setDays] = useState(7);

  useEffect(() => {
    const loadChart = async () => {
      try {
        const data = await fetchChartData(coinId, days);
        setChartData(data);
      } catch (error) {
        setChartData([]);
      }
    };
    if (coinId) loadChart();
  }, [coinId, days]);

  const chartConfig = useMemo(
    () => ({
      labels: chartData.map(([timestamp]) =>
        new Date(timestamp).toLocaleDateString()
      ),
      datasets: [
        {
          label: `${coinId?.toUpperCase()} Price (USD)`,
          data: chartData.map(([, price]) => price),
          borderColor: "#00C49F", // New color
          backgroundColor: "rgba(0, 196, 159, 0.1)",
          borderWidth: 2,
          pointRadius: 2,
          tension: 0.4,
        },
      ],
    }),
    [chartData, coinId]
  );

  return (
    <Box
      sx={{
        maxWidth: 800,
        mx: "auto",
        px: 2,
        py: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#fafafa",
      }}
    >
      <Typography variant="h6" textAlign="center" mb={2}>
        Price Trend
      </Typography>

      <Box display="flex" justifyContent="center" mb={2}>
        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel>Timeframe</InputLabel>
          <Select
            value={days}
            label="Timeframe"
            onChange={(e) => setDays(e.target.value)}
          >
            <MenuItem value={1}>1 Day</MenuItem>
            <MenuItem value={7}>7 Days</MenuItem>
            <MenuItem value={30}>1 Month</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Line
        data={chartConfig}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
              labels: {
                color: "#333",
              },
            },
          },
          scales: {
            x: {
              ticks: {
                color: "#444",
              },
            },
            y: {
              ticks: {
                color: "#444",
              },
            },
          },
        }}
      />
    </Box>
  );
};

export default PriceChart;
