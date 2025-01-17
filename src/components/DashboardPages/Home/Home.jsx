
import React, {useState} from "react";

import styles from "./styles.module.css";
import TableControl from "../../TableControl/TableControl";
import Table from "../../Table/Table";
const LISTONE = ["All", "Draft", "Live", "Past", "Scheduled"]

const Home = () => {

  const [selected, setSelected] = useState(LISTONE[0])

  return (
    <div className={styles.container}>
      <h3 className={styles.headerText}>Home</h3>

      <TableControl setSelected={setSelected} selected={selected} list={LISTONE} />

      <Table status={selected} />
    </div>
  )
}

export default Home;