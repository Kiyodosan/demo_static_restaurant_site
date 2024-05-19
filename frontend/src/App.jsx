import './assets/css/App.css'

import NavBar from './header/navbar'
import Home from './pages/Home'
import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

function Layout() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      <NavBar />
      {isLoaded && <Outlet />}
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
