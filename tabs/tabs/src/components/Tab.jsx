import React, {useState} from 'react'
import styles from '../../src/static/Tab.module.css'

const Tab = (props) => {

    const {allTabs, currentTab, setCurrentTab} = props;

    const tabStyle = (i) => {
        if (i === currentTab) {
            return `${styles.selected}`;
        } else {
            return `${styles.notSelected}`;
        }
    }

    const updateCurrent = (i) => {
        setCurrentTab(i);
    }

    return (
        <div>
            <div className={styles.tab}>
            {
                allTabs.map((item, i) => 
                <button className={`btn ${tabStyle(i)}`} id={item.tabName} key={i} onClick={(e) => updateCurrent(i)}>{item.tabName}</button>
                )
            }
            
            </div>
            <div className={styles.content}>
                <p>{allTabs[currentTab].content}</p>
            </div>
        </div>
    ) 

}

export default Tab
