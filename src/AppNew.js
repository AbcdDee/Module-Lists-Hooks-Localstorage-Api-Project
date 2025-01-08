import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider, ThemeContext } from './ThemeContext';

function App() {
    return (
        <ThemeProvider>
            <div className="App">
                <ThemeToggle />
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a className="App-link" href="https://reactjs.org" target="_blank"  rel="noopener noreferrer"
    >
                        Learn React
                    </a>
                </header>
            </div>
        </ThemeProvider>
    );
}

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={theme}>
            <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
            <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
        </div>
    );
};

export default App;
