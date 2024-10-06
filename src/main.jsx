import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'


createRoot(document.getElementById('root')).render(

  <div className='w-screen h-full bg-[#0E0E0E]'>
    <div className='max-w-screen-xl font-poppins mx-auto text-white'>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>,
    </div>
  </div>
)
