import { useState } from 'react';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { DarkModeProvider } from './context/DarkmodeContext';

const filters = ['all', 'active', 'complete'];

export default function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header 
        filters={filters} 
        filter={filter}
        onFilterChange={(filter)=>setFilter(filter)} 
      />
      <TodoList filter={filter} />
    </DarkModeProvider>
  )
}
