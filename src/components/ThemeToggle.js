import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContextProvider';

function ThemeToggle() {

    const {onHandleToggleTheme} = useContext(ThemeContext);

    return (
        <div className="toggle-btn">
            <button onClick={onHandleToggleTheme}>Toggle Theme</button>
        </div>
    )
}

export default ThemeToggle;
