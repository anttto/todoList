import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

export default function TodoList({filter}) {
    const [todos, setTodos] = useState(()=>readTodosFromLocalStorage());
    
    const handleAdd = (todo)=>{
        setTodos([...todos, todo]);
    }

    const handleUpdate = (updated)=>{
        setTodos(todos.map(t => t.id === updated.id ? updated : t)); 
    }

    const handleDelete = (deleted)=>{
        setTodos(todos.filter(t => t.id !== deleted.id)); 
    }

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const filtered = filterResult(filter, todos);

    return <section className={styles.container}>
        <ul className={styles.list}>
            {filtered.map((item) => 
                <Todo key={item.id} list={item} Check={handleUpdate} Delete={handleDelete}/>
            )}
        </ul>
        <AddTodo onAdd={handleAdd}/>
    </section>

}   

function readTodosFromLocalStorage () {
    console.log('readTodosFromLocalStorage');
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : []; 
}

function filterResult (filter, todos) {
    if (filter === 'all') {
        return todos;
    }

    return todos.filter(f => f.status === filter);
}
