/** @format */

import React from 'react';
import styles from './Footer.module.scss';

const date = new Date();

export default function Footer() {
  return (
    <footer>
      <p> Copyright {date.getFullYear()}. </p>
    </footer>
  );
}
