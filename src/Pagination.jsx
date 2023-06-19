import React, { useState } from 'react';
import { generateFakeData } from './fakeData';

function Pagination() {
  const [data] = useState(generateFakeData());
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleSearch = () => {
    const filteredData = data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredData);
    setCurrentPage(1);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setCurrentPage(1);
  };

  const renderData = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    let slicedData = searchQuery ? searchResults.slice(start, end) : data.slice(start, end);

    return slicedData.map((item, index) => (
      <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h4 className="text-lg font-bold">{item.name}</h4>
        <p>Email: {item.email}</p>
        <p>Phone: {item.phone}</p>
      </div>
    ));
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="mb-4 flex">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          list="suggestions"
          placeholder="Search by name or email..."
          className="border border-gray-300 rounded-l py-2 px-3 focus:outline-none focus:border-blue-500"
        />
        <datalist id="suggestions">
          {data.map((item, index) => (
            <option key={index} value={item.name} />
          ))}
        </datalist>
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r"
        >
          Search
        </button>
      </div>
      <div className="flex justify-center xl:justify-center">
        <div className="flex justify-center flex-wrap xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
          {renderData()}
        </div>
      </div>
      <div className="flex justify-center my-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded bg-gray-200 text-gray-700 mr-2"
        >
          Prev
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded bg-gray-200 text-gray-700 ml-2"
        >
          Next
        </button>
      </div>
      {searchQuery && searchResults.length === 0 && (
        <p className="text-center text-red-500">No results found.</p>
      )}
      {searchQuery && searchResults.length > 0 && (
        <p className="text-center">Showing {searchResults.length} result(s).</p>
      )}
      {searchQuery && (
        <div className="flex justify-center mt-2">
          <button
            onClick={handleClearSearch}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
}

export default Pagination;












