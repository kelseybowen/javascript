import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Result from './components/Result';

function App() {

  const [search, setSearch] = useState({});

  return (
    <div className='container'>
      <Form setSearch={setSearch}/>
      <Result search={search}/>
    </div>
  );
}

export default App;
