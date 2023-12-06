import { useState } from 'react';
import './App.css';
import SearchInput from './components/SearchInput/SearchInput';


const App = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = (searchTerm: string) => {
    setSearchValue(searchTerm)
  };

  return (
    <div className="App">
      <SearchInput handleSearch={handleSearch} />
      <div>Search: {searchValue}</div>
    </div>
  );
}

export default App;
