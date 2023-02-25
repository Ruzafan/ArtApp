import React from 'react';
import { Outlet } from "react-router-dom"
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.App}>
     <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
