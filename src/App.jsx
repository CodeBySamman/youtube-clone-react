import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [sidebar, setSidebar] = useState(false)
 const [progress, setProgress] = useState(0);


  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar  setSidebar={setSidebar}/><Home  sidebar={sidebar} setProgress={setProgress}/></>
    }, 
   

      {
      path: '/video/:categoryId/:videoId',
      element: <> <Navbar/> <Video/></>
    },
    
  ])


  
  return (
    
    <div className='min-h-screen '>
     
     
      <LoadingBar
        color="red"
        height={3}
        progress={progress}
        shadow={false}
        
      />
     
        <RouterProvider router={router} />
</div>
  )
}

export default App
