import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([

    {
      path:'/', element:<App/>,
      errorElement: <Error/>,

      children:[
        {path:'/', element:<Home/>},
        {path:'/login', element:<Login/>},
        {path:'/musicas', element:<Musicas/>},

      ]
    }

]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
