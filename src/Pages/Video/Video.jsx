import React from 'react'
import PlayVideo from '../../Components/PlayVideo'
import Opetional from '../../Components/Opetional'
import { useParams } from "react-router-dom";
const Video = () => {
  const {videoId, categoryId} = useParams()
  return (
 
 
    <div className="sm:flex gap-2 my-3.5 px-5 sm:px-[2%]">
      
      
      <div className="sm:w-[70%]">
        <PlayVideo  key={videoId}/> </div>

    
      <div className="sm:w-[30%] mt-9 sm:mt-0 ">
        <Opetional categoryId={categoryId}  />
      </div>

    </div>
  

  )
}

export default Video
