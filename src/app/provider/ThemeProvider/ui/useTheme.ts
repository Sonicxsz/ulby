import { useContext } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext"


interface UseThemeReturn {
    theme: Theme, 
    toggleTheme: () => void
}

export const useTheme = (): UseThemeReturn => {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? Theme.DARK : Theme.LIGHT
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

   return {
    theme, toggleTheme
   }
}