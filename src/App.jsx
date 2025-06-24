import "./App.css";
import { useState, useEffect } from "react";
import NavigationBar from "./components/NavigationBar";
import Search from "./components/Search";

function App() {
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);
  const apiKey = "d1d0ou1r01qic6lgeu50d1d0ou1r01qic6lgeu5g";
  const url = `https://finnhub.io/api/v1/quote?symbol=${searchValue}token=${apiKey}`


  return (
    <>
      <NavigationBar />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
    </>
  );
}

export default App;
