// import './assets/css/App.css'

import NavBar from './header/navbar'
import Footer_Menu from './footer/footer_menu'
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
      <Footer_Menu />
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
