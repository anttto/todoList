import React from 'react';
import styles from './Header.module.css';
import { useDarkMode } from '../../context/DarkmodeContext';
import { MdDarkMode } from 'react-icons/md';
import { CgSun } from 'react-icons/cg';

export default function Header({filters, filter, onFilterChange}) {
    const {darkMode, handleDarkMode} = useDarkMode();
    return (
        <header className={styles.header}>
            <div className={styles.themeBtn} onClick={handleDarkMode}>{
                darkMode === true ? <MdDarkMode/> : <CgSun/> }</div>
            <ul className={styles.filters}>
                {filters.map((value, index)=><li key={index}>
                    <button className={`${styles.filter} ${filter === value && styles.selected}`} onClick={()=>onFilterChange(value)}>{value}</button>
                </li>)}
            </ul>
        </header>
    )
};
