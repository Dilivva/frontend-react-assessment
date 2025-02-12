import React from 'react';

import styles from "./styles.module.css"
import DeleteIcon from '@mui/icons-material/Delete';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

const Actions = () => {
  return (
    <td>
      <div className={styles.container}>
        <div className={styles.delete}>
          <DeleteIcon style={{color: "D24747"}} />
        </div>

        <div className={styles.edit}>
          <CreateOutlinedIcon style={{color: "white", fontSize: "20px"}} />
          <p className={styles.editText}>Edit</p>
        </div>
      </div>
    </td>
  )
}

export default Actions