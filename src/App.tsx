import { useState } from "react";
import "./App.css";
import SearchInput from "./components/SearchInput/SearchInput";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Loading from "./components/Loading/Loading";
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
    <>
      <Header />
      <div className="app-container">
        <div className="app-search-container">
          <SearchInput handleSearch={handleSearch} />
        </div>
        {error && <div className="app-error">
          {error}
        </div>}
        {loading ? (
          <Loading />
        ) : (
          <div className="app-cards-row">{tickersList}</div>
        )}
      </div>
    </>
  );
};

export default App;
