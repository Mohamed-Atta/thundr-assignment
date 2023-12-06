import { useEffect, useState } from "react";
import './SearchInput.css';

const SearchInput = ({ handleSearch }: any) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [debouncedInputValue, setDebouncedInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedInputValue(inputValue);
      handleSearch(debouncedInputValue);
    }, 500);
    return () => clearTimeout(timeout);
  }, [inputValue, debouncedInputValue, handleSearch]);

  return (
      <input
        type="text"
        placeholder="Search for stocks"
        className="app-search"
        value={inputValue} onChange={handleInputChange}
      />
  );
};

export default SearchInput;
