import { useCallback, useState } from "react";
import "./App.css";
import SearchInput from "./components/SearchInput/SearchInput";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Loading from "./components/Loading/Loading";
import { useFetchTickers } from "./hooks/useFetchTickers";
import { useBottomScrollListener } from "react-bottom-scroll-listener";

const App = () => {
  const [limit, setLimit] = useState<number>(10);
  const [searchValue, setSearchValue] = useState<string>("");
  const {
    tickers = [],
    loading,
    error,
    success,
  } = useFetchTickers({
    limit,
    searchValue,
  });

  const handleOnDocumentBottom = useCallback(() => {
    if (!error) {
      setLimit((prevValue) => prevValue + 10);
    }
    else {
      setTimeout(() => {
        setLimit((prevValue) => prevValue + 10);
      }, 20000);
    }
  }, [error]);

  useBottomScrollListener(handleOnDocumentBottom);
  const containerRef: any = useBottomScrollListener(handleOnDocumentBottom);

  const tickersList =
    !tickers.length && !error && success ? (
      <div className="app-empty-state">No results found for your search!</div>
    ) : (
      tickers.map((item) => (
        <div className="app-card-column">
          <Card key={item.ticekr} title={item.ticker} description={item.name} />
        </div>
      ))
    );

  const handleSearch = (searchTerm: string) => {
    setSearchValue(searchTerm);
  };

  return (
    <div ref={containerRef}>
      <Header />
      <div className="app-container">
        <div className="app-search-container">
          <SearchInput handleSearch={handleSearch} />
        </div>
        <div className="app-cards-row">{tickersList}</div>
        {loading && <Loading />}
        {error && <div className="app-error">{error}</div>}
      </div>
    </div>
  );
};

export default App;
