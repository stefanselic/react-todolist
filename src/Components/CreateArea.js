/** @format */

import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { ZoomIn } from 'lucide-react';
import { SendHorizonal } from 'lucide-react';
import styles from './CreateArea.module.scss';

export default function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: '',
      content: '',
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className={styles.createNote}>
        {isExpanded && (
          <input
            className={styles.textInput}
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          className={styles.textArea}
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        {/* <ZoomIn in={isExpanded}> */}
        <PlusCircle className={styles.plusButton} onClick={submitNote}>
          {/* <PlusCircle /> */}
        </PlusCircle>
        {/* </ZoomIn> */}
      </form>
    </div>
  );
}
