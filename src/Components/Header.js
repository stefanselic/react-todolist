/** @format */

import React from 'react';
import styles from './Header.module.scss';
import { ListTodo } from 'lucide-react';

export default function Header() {
  return (
    <header>
      <h1>
        <ListTodo />
        ToDoList
      </h1>
    </header>
  );
}
