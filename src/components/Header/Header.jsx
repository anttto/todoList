import React from 'react';
import styles from './Header.module.css';
import { useDarkMode } from '../../context/DarkmodeContext';
import { MdDarkMode } from 'react-icons/md';
import { CgSun } from 'react-icons/cg';

export default function Header({filters, filter, onFilterChange}) {
    const {darkMode, toggleDarkMode} = useDarkMode();
    return (
        <header className={styles.header}>
            <button type="button" className={styles.themeBtn} onClick={toggleDarkMode}>{
                darkMode === true ? <MdDarkMode/> : <CgSun/> }
            </button>
            <ul className={styles.filters}>
                {filters.map((value, index)=><li key={index}>
                    <button className={`${styles.filter} ${filter === value && styles.selected}`} onClick={()=>onFilterChange(value)}>{value}</button>
                </li>)}
            </ul>
        </header>
    )
};
