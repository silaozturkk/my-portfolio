'use client';

import React, { useEffect, useState } from 'react'

const useThemeSwitcher = ()  => {

  const preferDark = "(prefers-color-scheme: dark)"
  const [ mode, setMode ] = useState("")

  useEffect(() => {

      const mediaQuery = window.matchMedia(preferDark)
      const userPref = window.localStorage.getItem("theme")

      const handleChange = () => {
        if (userPref) {
          let check = userPref === 'dark' ? 'dark' : 'light'
          setMode(check) 
          if (check === 'dark') {
            document.documentElement.classList.add('dark')
          } 
          if (check === 'light') {
            document.documentElement.classList.remove('dark')
          }
        }
        else {
          let check = mediaQuery.matches ? 'dark' : 'light'
          setMode(check) 
          if (check === 'dark') {
            document.documentElement.classList.add('dark')
          } 
          if (check === 'light') {
            document.documentElement.classList.remove('dark')
          }
        }
      }

      handleChange();

      mediaQuery.addEventListener("change", handleChange)

      return () => mediaQuery.removeEventListener("change", handleChange)

  }, [])


  useEffect(() => {

    if (mode === 'dark') {
      window.localStorage.setItem("theme","dark")
      document.documentElement.classList.add('dark')
    }
     
    if (mode === 'light') {
      window.localStorage.setItem("theme","light")
      document.documentElement.classList.remove('dark')
    }

  }, [mode])
  return { mode, setMode } 
}

export default useThemeSwitcher