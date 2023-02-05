import React from 'react';
import { BiTrash } from 'react-icons/bi';
import styles from './Todo.module.css';


export default function Todo({list, Check, Delete}) {
    const handleCheck =(e)=>{
        const status = e.target.checked ? 'complete' : 'active';
        Check({...list, status});
    }
    const handleDelete = () => {
        Delete(list);
    }
    return (
        <li className={styles.todo}>
            <input 
                className={styles.checkbox}
                type="checkbox" 
                name="checkbox" 
                id={list.id} 
                onChange={handleCheck}
                checked={list.status === 'complete'}
            />
            <label htmlFor={list.id} className={styles.text}>{list.text}</label>
            <span className={styles.icon}>
            <button className={styles.button} onClick={handleDelete}>
                <BiTrash size="20" />
            </button>
            </span>
        </li>
    ) 
};

