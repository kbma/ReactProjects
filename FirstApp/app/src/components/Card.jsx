// src/design/Card.jsx
import React from 'react';
import styles from './Card.module.css';
 
function Card() {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>Carte avec Module CSS</h2>
      <p className={styles.cardText}>Chaque style est scoped au composant.</p>
    </div>
  );
}
 
export default Card;
