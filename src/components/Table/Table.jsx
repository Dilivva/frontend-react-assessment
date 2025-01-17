import React, { useEffect, useState } from "react";
import styles from "./styles.module.css"
import RenderHeadCell from "./RenderHeadCell/RenderHeadCell";
import { generateItems } from "../../mockData/tableData";
import CircularProgress from '@mui/material/CircularProgress';
import RenderRowCell from "./RenderTableRow/RenderTableRow";
import Actions from "./Actions/Actions";

// Table Data and Columns
const TableColumns =  [
  "Title",
  "Pages",
  "Last Modified",
  "Status",
  "Live From",
  "Ends",
  "Actions"
]

const Table = ({status}) => {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [currentData, setCurrentData] = useState([])

  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const rowsPerPage = 10; // Rows per page

  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Handle Page Change
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
        // Slice data for current page
      const startIndex = (currentPage - 1) * rowsPerPage;
      setCurrentData(data.slice(startIndex, startIndex + rowsPerPage));
    }
  };

  const fetchData = () => {
    setLoading(true);

    setTimeout(() => {
      let tempItems = generateItems(50)
      let tempAfterStatusFilter = tempItems.filter((elem) => (elem.status === status) || status === "All")
      setData(tempAfterStatusFilter)
      const startIndex = (currentPage - 1) * rowsPerPage;
      setCurrentData(tempAfterStatusFilter.slice(startIndex, startIndex + rowsPerPage))
      setLoading(false)
    }, 2000)
  }

  useEffect(() => {
    fetchData();
  }, [status])

  const renderData = () => {
    if (loading) {
      return (<div className={styles.loading}><CircularProgress /></div>)
    } 
    if (data) {
      return ( 
        <table className={styles.customTable}>
          <thead>
            <tr className={styles.tableRow}>
              {TableColumns.map((column, i) => (
                <th key={i}><RenderHeadCell data={column} /></th>
              ))}
            </tr>
          </thead>
          <tbody>
            {
              currentData.map((row, i) =>(
                <tr key={i} className={styles.cellRow}>
                  {
                    Object.keys(row).map((title, j) => <RenderRowCell key={j} title={title} row={row} />)
                  }

                  <Actions />
                </tr>
              ))
            }
          </tbody>
        </table>
      )
    }
  }

  return (
    <div className={styles.tableContainer}>
      {renderData()}
      {/* Pagination Controls */}
      <div className={styles.pagination}>
        <div className={styles.pageContainer}>
          <p>Page</p>
          <p className={styles.currentPage}>{currentPage}</p>
          <p>of {totalPages}</p>
        </div>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>

        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;