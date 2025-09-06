import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import App from './App.jsx'
import StateDashboard from './components/Home.jsx'
import AddIssues from './components/AddIssues.jsx'
import Login from './components/Login.jsx'
import AllIssues from './components/AllIssues.jsx'
import SingleIssue from './components/SingleIssue.jsx'
import VerifyContextProvider from './contexts/verifyContext.jsx'
import IssuesPage from './components/IssuesPage.jsx'
import LocationStateFinder from './components/Lo.jsx'
import CompanySlide from './components/CompanySlide.jsx'
import Analytics from './components/Analytics.jsx'

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
        path : "/issues/:stateName",
        element : <IssuesPage />
      },
      {
        path : "/allIssues/:stateName",
        element : <AllIssues />
      },
      {
        path : "/allIssues/:stateName/:id",
        element : <SingleIssue />
      },
      {
        path : "/lo",
        element : <LocationStateFinder/>
      },
      {
        path : "/analytics",
        element : <Analytics />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VerifyContextProvider>
      <RouterProvider router={router} />
    </VerifyContextProvider>
  </StrictMode>
)
