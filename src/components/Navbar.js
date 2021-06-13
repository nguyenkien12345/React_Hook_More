// import package
import React, { useContext } from 'react';
// import contexts
import { ThemeContext } from '../contexts/ThemeContextProvider';
import { AuthContext } from '../contexts/AuthContextProvider';

function Navbar(){

    // Khi debug const demo = useContext(ThemeContext) và console.log(demo) ta sẽ thấy kết quả trả về là object theme chứa các dữ liệu bên trong
    const {theme} = useContext(ThemeContext);
    // Móc ra isLightTheme, light, dark trong theme ra
    const {isLightTheme, light, dark} = theme;
    const style = isLightTheme ? light : dark

    const {isAuthentication, onHandleToggleAuthentication} = useContext(AuthContext);

    return (
        <div className="navbar" style={style}>
            <h1>My Hooks App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <button onClick={onHandleToggleAuthentication}><li>{isAuthentication ? 'You are logged in' : 'You are logged out'}</li></button>
            </ul>
        </div>
    )
}

export default Navbar;