import { useState } from 'react';

const SearchBar = ({ onSearchTermChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearchTermChange(searchTerm);
  };

  return (
    <section className="section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <div className="control has-icons-left">
              <input
                className="input"
                type="text"
                placeholder="Search"
                onChange={handleInputChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-search" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
