import { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <SearchBar onSearchTermChange={handleSearchTermChange} />
      <SearchResult term={searchTerm} />
    </>
  );
};

export default App;
