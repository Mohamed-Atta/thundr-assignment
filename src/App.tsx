import { useState } from "react";
import "./App.css";
import SearchInput from "./components/SearchInput/SearchInput";
import { useFetchTickers } from "./hooks/useFetchTickers";

const App = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const { tickers, loading, error } = useFetchTickers({
    limit: 100,
    searchValue,
  });

  const tickersList = tickers.map((item) => (
    <li key={item.ticker}>{item.ticker}</li>
  ));

  const handleSearch = (searchTerm: string) => {
    setSearchValue(searchTerm);
  };

  return (
    <div className="App">
      <SearchInput handleSearch={handleSearch} />
      <div>Search: {searchValue}</div>
      {loading ? <p>Loading...</p> : tickersList}
      {error}
    </div>
  );
};

export default App;
