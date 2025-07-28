# 🪙 Crypto Price Tracker

A responsive and dynamic web application built with **React.js** and **Material UI** that allows users to track real-time cryptocurrency prices using data from the CoinGecko API. This app provides a clean and intuitive user interface to monitor top cryptocurrencies, search for coins, and view their price trends.

---

## 🔧 Features

- 📈 **Live Crypto Market Data**  
  Fetches real-time prices, market caps, and volume for the top cryptocurrencies using the CoinGecko API.

- 🔍 **Search Functionality**  
  Built-in autocomplete-enabled search bar to easily find and filter coins by name or symbol.

- 📊 **Chart Integration (optional)**  
  Optionally displays historical price trends using chart data from the API.

- ⚡ **Auto Refreshing**  
  Automatically refreshes data every 30 seconds to ensure prices are up to date.

- 🎨 **Material UI Design**  
  Uses MUI components for a modern, clean, and mobile-responsive user interface.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, JSX  
- **Styling:** Material UI (MUI)  
- **API Integration:** Axios, CoinGecko API  
- **State Management:** React Hooks (`useState`, `useEffect`)  
- **Custom Hooks:** `useFetchCrypto` to manage API calls and loading/error states  

---

## 🚀 Deployment

🔗 **Live Demo:**  [https://invictus-crypto-price-tracking-task.netlify.app/]
🔗 **GitHub Link:** [https://github.com/karthick0529/Invictus]

---

## ⚠️ API Limitations

This app uses the **free public CoinGecko API** directly from the frontend. As a result, you may encounter the following issues:

- ❌ **CORS errors**
- ⏳ **HTTP 429 Too Many Requests error**
- 📉 **Failed to Fetch data**

These occur because:
- The CoinGecko free tier imposes **rate limits** when calling the API directly from the browser.
- The public API is not intended for frequent/automated frontend access without caching or proxying.

### ✅ How to Fix

To resolve these issues in production:

> **Use a backend proxy server** (e.g., built with Node.js/Express) to fetch and cache the data.  
> The frontend can then safely request data from the backend without hitting the CoinGecko rate limit or CORS policies.

Since the current requirement was to **build only a frontend application**, we’ve kept the API calls directly in the React app. Hence, these rate-limit or CORS issues might occur during use.

---

## 📂 License

This project is open source and free to use for educational and demo purposes.

