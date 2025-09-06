import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import App from './App.jsx'
import StateDashboard from './components/Home.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    errorElement : <div>Not Found</div>,
    element : <App />,
    children : [
      {
        path: "/",
        element : <StateDashboard />
      },
      {
        path : "/issues",
        element : <div>Issues</div>
      },
      {
        path : "/allIssues",
        element : <div>All Issues</div>
      },
      {
        path : "/allIssues/:id",
        element : <div>id</div>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
