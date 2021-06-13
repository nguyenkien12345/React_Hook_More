// import package
import React from 'react';
import './App.css';
// import components
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import ThemeToggle from './components/ThemeToggle';
// import contexts
import ThemeContextProvider from './contexts/ThemeContextProvider';
import TodoContextProvider from './contexts/TodoContextProvider';
import AuthContextProvider from './contexts/AuthContextProvider';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <TodoContextProvider>
            <TodoList />
          </TodoContextProvider>
        </AuthContextProvider>
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
