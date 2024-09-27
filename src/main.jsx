import { StrictMode } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Error from './routes/Error.jsx'
import Musicas from './routes/Musicas.jsx'
import Login from './routes/Login.jsx'


const router = createBrowserRouter([
  {
    //Elementos Pai
    path:'/', element:<App/>,
    errorElement:<Error/>,

    //Elemento Filho

    children:[
      {path:'/',element:<Home/>},
      {path:'/musicas', element:<Musicas/>},
      {path:'/login', element:<Login/>}

    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
