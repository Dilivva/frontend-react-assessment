import React, {useState, useContext} from "react";
import SearchComponent from "../SearchComponent/SearchComponent";
import Dropdown from "../Dropdown/Dropdown";

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import styles from "./styles.module.css";

const LISTONE = ["All", "Draft", "Live", "Past", "Scheduled"]


const TableControl = ({setSelected, selected, list}) => {

  const [searchText, setSearchText] = useState('');

  return (
    <div className={styles.tableControls}>
      <div className={styles.containerTwo}>
        <SearchComponent setSearchText={setSearchText} searchText={searchText} />

        <Dropdown setSelected={setSelected} selected={selected} lists={list} title={"Status"} />

        <p className={styles.textOne}>Showing 1 to 20 of 176</p>
      </div>

      <div className={styles.btn}>
        <AddOutlinedIcon className={styles.add} />
        <p className={styles.story}>New Story</p>
      </div>
    </div>
  )
}


export default TableControl