import React from "react";

import styles from "./styles.module.css"
import SearchIcon from '@mui/icons-material/Search';

const SearchComponent = ({ searchText, setSearchText}) => {
  return (
    <div className={styles.container}>
      <input 
        type="text" 
        className={styles.input} 
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search..."
      />
      <div className={styles.search}>
        <SearchIcon style={{
          color: "white",
          fontSize: "30px"
        }} />
      </div>
    </div>
  )
}

export default SearchComponent