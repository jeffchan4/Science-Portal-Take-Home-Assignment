import styles from "./page.module.css";
import React, { useState } from 'react';
import CarouselComponent from "./components/CarouselComponent";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}/>
        <h2>Science Portal Take Home</h2>
        <div className='padding-container'>
        <CarouselComponent />
        
        </div>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
