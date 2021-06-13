// import package
import React, { useContext, useState } from 'react';
// import contexts
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
