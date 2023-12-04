/** @format */

import React from 'react';
import styles from './Note.module.scss';
import { Trash2 } from 'lucide-react';

export default function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className={styles.note}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Trash2 onClick={handleClick} className={styles.deleteButton} />
    </div>
  );
}
