import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import { NotFound } from './components/NotFound'
import Layout from './layout/Layout'
import HomePage from './pages/HomePages'
import DetailsPage from './pages/DetailsPage'



const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
          {
              path:'/',
              index: true,
              element: <HomePage />
          },
          {
            path:'/details/:id',
            element: <DetailsPage />
        }
      ]
  }
])

function App() {

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
