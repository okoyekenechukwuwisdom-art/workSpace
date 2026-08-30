import {createContext} from 'react'

const ThemeContext = createContext()

export const ThemeProvider = () =>{
   const[isDarkMode, setIsDarkMode] = useState('false')
   const username = "John Doe"

    return (
       <ThemeContext.Provider value={{ isDarkMode, username }}>
            {children}
       </ThemeContext.Provider>
    )
}
