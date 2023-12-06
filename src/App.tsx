import { useState } from "react";
import "./App.css";
import SearchInput from "./components/SearchInput/SearchInput";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
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
    <div className="app-card-column">
      <Card key={item.ticekr} title={item.ticker} description={item.name} />
    </div>
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
        <div className="app-cards-row">{tickersList}</div>
      </div>
    </div>
  );
};

export default App;
