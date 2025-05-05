import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react' // Optional if using lucide-react

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))

  return (
    <div className="flex justify-center my-4">
      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-full shadow transition hover:scale-105"
      >
        {theme === 'dark' ? (
          <>
            <Sun size={18} /> Light Mode
          </>
        ) : (
          <>
            <Moon size={18} /> Dark Mode
          </>
        )}
      </button>
    </div>
  )
}
