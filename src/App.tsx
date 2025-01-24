import { createBrowserRouter, RouterProvider } from 'react-router'

import './App.css'
import { NotFound } from './components/NotFound'
import Layout from './layout/Layout'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
        {
            index: true,
            element: < div/>
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
