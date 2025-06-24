import "./App.css";
import { useState, useEffect } from "react";
import NavigationBar from "./components/NavigationBar";
import Search from "./components/Search";

function App() {
  const [searchValue, setSearchValue] = useState("AAPL"); // Default symbol
  const [stockData, setStockData] = useState(null);

  const apiKey = "d1d0ou1r01qic6lgeu50d1d0ou1r01qic6lgeu5g";

  useEffect(() => {
    if (!searchValue) return;

    const fetchData = async () => {
      try {
        const url = `https://finnhub.io/api/v1/quote?symbol=${searchValue}&token=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        setStockData(data);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchData();
  }, [searchValue]);

  return (
    <>
      <NavigationBar />
      <div className="title">
        <h1>Stonk Alert</h1>
        </div>
        <Search value={searchValue} setSearchValue={setSearchValue} />
      

      


      {stockData && stockData.c !== 0 && (
        //doesn't render this div is stockData or stockdata.c is null 
        <div className="stock-info">
          <h2>{searchValue.toUpperCase()}</h2>
          <p>Current Price: ${stockData.c}</p>
          <p>High: ${stockData.h}</p>
          <p>Low: ${stockData.l}</p>
          <p>Open: ${stockData.o}</p>
          <p>Previous Close: ${stockData.pc}</p>
        </div>
      )}
    </>
  );
}

export default App;
