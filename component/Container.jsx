import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import useTheme from '../hooks/useTheme'

const Container = () => {
    const [mode] = useTheme()
  return (
        <div className={`container ${mode}`}>
          <Header />
          <Outlet />
        </div>
  )
}

export default Container