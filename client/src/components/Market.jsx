import React, { useState, useEffect } from "react";
import "./Market.css";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    fetch(url, { signal: abortController.signal })
      .then((res) => {
        if (!res.ok) throw Error("Could not fetch from the resource");
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch Aborted!");
        } else {
          setError(err.message);
          setIsLoading(false);
        }
      });
    return () => abortController.abort();
  }, [url]);

  return { data, isLoading, error };
}

function Coin({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  mktCap,
  vsCurrency,
}) {
  const currSymbols = { usd: "$", inr: "₹" };

  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h2>{name}</h2>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">
            {currSymbols[vsCurrency]}
            {price.toLocaleString()}
          </p>
          <p className="coin-volume">
            {currSymbols[vsCurrency]}
            {volume.toLocaleString()}
          </p>
          <p className={`coin-percent ${priceChange > 0 ? "green" : "red"}`}>
            {priceChange.toFixed(2)}%
          </p>
          <p className="coin-marketcap">
            {currSymbols[vsCurrency]}
            {mktCap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

function CoinHeader({ vsCurrency }) {
  vsCurrency = vsCurrency.toUpperCase();
  return (
    <div className="coin-header-container">
      <div className="coin-header-row">
        <ul className="coin-header">
          <li>Coin</li>
        </ul>
        <ul className="coin-data-header">
          <li>Price ({vsCurrency})</li>
          <li>Volume ({vsCurrency})</li>
          <li>Change (24h)</li>
          <li>Mkt. Cap ({vsCurrency})</li>
        </ul>
      </div>
    </div>
  );
}

function CoinConfig({ coinConfig, setCoinConfig }) {
  return (
    <div className="config">
      <select
        className="config-currency"
        value={coinConfig.vs_currency}
        onChange={(e) =>
          setCoinConfig({ ...coinConfig, vs_currency: e.target.value })
        }>
        <option value="usd">USD</option>
        <option value="inr">INR</option>
      </select>
      {/*	    <input 
	      type="number" 
	      min={1}
	      max={250}
	      value={coinConfig.per_page}
	      onChange={e => setCoinConfig({...coinConfig, per_page: e.target.value})}
	    />*/}
    </div>
  );
}

function CoinList({ coins, coinConfig }) {
  return (
    <div className="coins">
      <CoinHeader vsCurrency={coinConfig.vs_currency} />

      {coins.map((coin) => (
        <Coin
          key={coin.id}
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          price={coin.current_price}
          volume={coin.total_volume}
          priceChange={coin.price_change_percentage_24h}
          mktCap={coin.market_cap}
          vsCurrency={coinConfig.vs_currency}
        />
      ))}
    </div>
  );
}

function Loader() {
  return <div className="loader"></div>;
}

function Search({ search, setSearch }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search"
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

function Market() {
  const [search, setSearch] = useState("");
  const [apiConfig, setApiConfig] = useState({
    vs_currency: "usd",
    per_page: 100,
    order: "market_cap_desc",
    page: 1,
    sparkline: false,
  });

  const URLEncode = (obj) => {
    const urlEncoded = new URLSearchParams(obj);
    return urlEncoded.toString();
  };

  const {
    data: coins,
    isLoading,
    error,
  } = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?" + URLEncode(apiConfig)
  );
  let filteredCoins;

  if (coins && !error) {
    filteredCoins = coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div className="App">
      <div className="title">Crypto Price Tracker</div>

      <div className="main-config">
        <CoinConfig coinConfig={apiConfig} setCoinConfig={setApiConfig} />
        <Search search={search} setSearch={setSearch} />
      </div>

      {error && <div className="error">{error}</div>}
      {isLoading && <Loader />}
      {filteredCoins && (
        <CoinList coins={filteredCoins} coinConfig={apiConfig} />
      )}
    </div>
  );
}

export default Market;