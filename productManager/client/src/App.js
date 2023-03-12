import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Main from './views/Main';
import Edit from './views/Edit';
import Detail from './views/Detail';

const App = () => {

  const [products, setProducts] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main products={products} setProducts={setProducts}/>} path="/" />
          <Route element={<Detail products={products} setProducts={setProducts}/>} path="/:id" />
          <Route element={<Edit />} path="/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
