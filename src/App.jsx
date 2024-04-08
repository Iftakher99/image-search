import { useState } from 'react';
import SearchBox from './components/SearchBox';
import ShowResult from './components/ShowResult';
import SearchResult from './components/SearchResult';
const App = () => {
  const [term, setTerm] = useState('');
  const handleSearch = (term) => {
    setTerm(term);
  };
  console.log(term);

  return (
    <>
      <SearchBox onSearch={handleSearch} />
      <ShowResult term={term} />
      {/* <SearchResult term={term} /> */}
    </>
  );
};

export default App;
