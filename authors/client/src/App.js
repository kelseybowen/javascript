import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import NewForm from './components/NewForm';
import EditForm from './components/EditForm';
import './App.css';

function App() {

  const [listOfAllAuthors, setListOfAllAuthors] = useState([]);
  const [errors, setErrors] = useState("");

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main listOfAllAuthors={listOfAllAuthors} setListOfAllAuthors={setListOfAllAuthors} />} path="/" />
          <Route element={<NewForm errors={errors} setErrors={setErrors} />} path="/authors/new" />
          <Route element={<EditForm errors={errors} setErrors={setErrors} />} path="/authors/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
