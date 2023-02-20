import React from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/Subcontents';
import Advertisement from './components/Advertisement';


function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Navigation />
      <Main>
        <SubContents />
        <SubContents />
        <SubContents />
        <Advertisement />
      </Main>
    </div>
  );
}

export default App;

