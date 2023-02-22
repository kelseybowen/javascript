import './App.css';
import React, {useState} from 'react';
import Tab from './components/Tab';
import styles from './static/Tab.module.css'

function App() {

  const tabsArr = [
    {tabName: "Tab 1", content: "Tab 1 content is showing here."}, 
    {tabName: "Tab 2", content: "Tab 2 content is showing here."},
    {tabName: "Tab 3", content: "Tab 3 content is showing here."}]

  const [allTabs, setAllTabs] = useState(tabsArr);
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className={styles.Tab}>
      <Tab allTabs={allTabs} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
    </div>
  );
}

export default App;
