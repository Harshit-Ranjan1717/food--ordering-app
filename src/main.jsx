import React from 'react'
import ReactDOM from 'react-dom/client'
import AppLayout from './App.jsx'
import './index.css'
import About from './components/About'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Error from './components/Error.jsx'
import { appRouter } from './App.jsx'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
