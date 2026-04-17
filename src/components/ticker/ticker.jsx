import { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./styles/ticker.css";

export default function Ticker() {
  const [coins, setCoins] = useState([]);
  const prevPrices = useRef({});

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: "usd",
            ids: "bitcoin,ethereum,solana,cardano,ripple,dogecoin,polkadot,chainlink,avalanche-2,uniswap,litecoin,stellar,vechain,tron,shiba-inu,matic-network",
          },
        }
      );

      const updated = res.data.map((coin) => {
        const prev = prevPrices.current[coin.id];
        let trend = "neutral";
        if (prev) {
          if (coin.current_price > prev) trend = "up";
          if (coin.current_price < prev) trend = "down";
        }
        prevPrices.current[coin.id] = coin.current_price;
        return { ...coin, trend };
      });

      setCoins(updated);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 8000);
    return () => clearInterval(interval);
  }, []);

  const TickerItem = ({ coin }) => (
    <div className="flex items-center gap-4 min-w-fit px-10 py-5">
      <span className="font-bold text-gray-900 uppercase tracking-wider">
        {coin.symbol}/USD
      </span>

      <span className={`font-medium ${
          coin.trend === "up" ? "text-green-600" : coin.trend === "down" ? "text-red-600" : "text-gray-800"
      }`}>
        {coin.current_price?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </span>

      <span className={`text-sm font-bold ${
          coin.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"
      }`}>
        {coin.price_change_percentage_24h >= 0 ? "+" : ""}{coin.price_change_percentage_24h?.toFixed(2)}%
      </span>

      <div className="h-6 w-px bg-gray-200 ml-6" />
    </div>
  );

  return (
    <div className="w-full bg-white border-t border-b overflow-hidden">
      <div className="relative w-full">
        {/* Efeito de fade nas bordas para suavizar o scroll */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

        <div className="ticker-wrapper">
          <div className="ticker-track">
            <div className="ticker-group">
              {coins.map((coin) => (
                <TickerItem key={`a-${coin.id}`} coin={coin} />
              ))}
            </div>
            <div className="ticker-group">
              {coins.map((coin) => (
                <TickerItem key={`b-${coin.id}`} coin={coin} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}