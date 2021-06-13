// import package
import React, { createContext, useState } from 'react';

// Tạo ra kho trạng thái
export const ThemeContext = createContext();

function ThemeContextProvider({children}){

    // {children}: props này chính là toàn bộ các components con mà đươc sử dụng trong ThemeContextProvider

    // state
    const [theme, setTheme] = useState({
      isLightTheme: true,
      light: {
          background: 'rgba(240,240,240)',
          color: 'black'
      },
      dark: {
        background: 'rgba(39,39,39)',
        color: 'white'
    }  
    })

    const onHandleToggleTheme = () => {
        setTheme({
            // Giữ nguyên 2 thằng light và dark chỉ ghi đè thằng isLightTheme
            ...theme, 
            isLightTheme: !theme.isLightTheme
        })
    }

    // Context Data (Những component khác sẽ được sử dụng các dữ liệu trong đây)
    const ThemeContextData = {
        theme,
        onHandleToggleTheme
    }

    return(
        // Kho cung cấp dữ liệu cho các components
        <ThemeContext.Provider value={ThemeContextData}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;