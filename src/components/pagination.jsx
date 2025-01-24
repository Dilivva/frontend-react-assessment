import { useState } from "react";

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  onPerPageChange,
}) => {
  const [perPage, setPerPage] = useState(10); // Default items per page

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange({ pageNo: currentPage - 1, perPage });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange({ pageNo: currentPage + 1, perPage });
    }
  };

  const handlePageSelect = (page) => {
    if (page !== currentPage) {
      onPageChange({ pageNo: page, perPage });
    }
  };

  const handlePerPageChange = (event) => {
    const newPerPage = parseInt(event.target.value, 10) || 1; // Ensure a valid number
    setPerPage(newPerPage);
    onPerPageChange(newPerPage);
  };

  return (
    <div className="mt-8 text-xs flex flex-col gap-3 md:flex-row md:justify-center md:items-center">
      {/* Items Per Page Selector */}
      <div className="flex items-center justify-center space-x-2 md:space-x-4">
        <label htmlFor="perPage" className="text-gray-700">
          Items per page:
        </label>
        <select
          id="perPage"
          value={perPage}
          onChange={handlePerPageChange}
          className="px-3 py-1 border rounded text-gray-600"
        >
          {[5, 10, 20, 50].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-red-500 text-white hover:bg-red-600"
          }`}
        >
          Previous
        </button>

        {/* Display a limited set of page buttons for better responsiveness */}
        {Array.from({ length: totalPages }, (_, index) => index + 1)
          .slice(0, 5) // Show first 5 pages for mobile and limit on smaller screens
          .map((page) => (
            <button
              key={page}
              onClick={() => handlePageSelect(page)}
              className={`px-3 py-1 rounded ${
                page === currentPage
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {page}
            </button>
          ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-red-500 text-white hover:bg-red-600"
          }`}
        >
          Next
        </button>
      </div>

      {/* Page Info */}
      <div className="text-center text-gray-700">
        Showing page {currentPage} of {totalPages}
      </div>
    </div>
  );
};
