import { useState } from 'react';
import './App.css';
import BoxGenerator from './components/BoxGenerator';
import InputForm from './components/InputForm';

function App() {

  const [boxList, setBoxList] = useState([]);

  return (
    <div className="App">
      <InputForm boxList={boxList} setBoxList={setBoxList}/>
      <BoxGenerator boxList={boxList}/>
    </div>
  );
}

export default App;
