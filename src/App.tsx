import { useState } from "react";
import "./App.css";
import SearchInput from "./components/SearchInput/SearchInput";
import Header from "./components/Header/Header";
import { useFetchTickers } from "./hooks/useFetchTickers";

const App = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const {
    tickers = [],
    loading,
    error,
  } = useFetchTickers({
    limit: 10,
    searchValue,
  });

  const tickersList = tickers.map((item) => (
    <li key={item.ticker}>{item.ticker}</li>
  ));

  const handleSearch = (searchTerm: string) => {
    setSearchValue(searchTerm);
  };

  return (
    <div className="app">
      <Header />
      <div className="app-container">
        <div className="app-search-container">
          <SearchInput handleSearch={handleSearch} />
        </div>
        <div>Search: {searchValue}</div>
        {loading ? <p>Loading...</p> : tickersList}
        {error}
      </div>
    </div>
  );
};

export default App;
