import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { converter } from '../Converter1'
import moment from 'moment';



const Main = ({ category, setProgress }) => {
  const [loading, setLoading] = useState(false)

  const [data, setData] = useState([]);

  //FetchData Function
  const fetchdata = async () => {
    setProgress(10)
    setLoading(true)
    setProgress(20)
const req = await fetch(
  `${import.meta.env.VITE_API_URL}/popular/${category}`
);    setProgress(30)
    const res = await req.json();
    setProgress(50)
    setData(res.items)
    setProgress(100)
    setLoading(false)
  }

//UseEffect
  useEffect(() => {
    fetchdata()
  }, [category])
  if (loading) {
    return <h2 className="m-10 text-gray-600">Loading...</h2>
  }

  return (

    //  Display Content
    <div className=' grid grid-cols-1 m-10 bg-gray-50  gap-y-5 gap-x-2.5 mt-2.5 sm:grid-cols-4 sm:m-0'>
      {data.map((item, index) => (
        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index}>
          <img src={item.snippet?.thumbnails?.medium?.url} alt="img" className="w-full    object-cover  rounded-sm" />

          <h2 className='text-xs mt-1.5  font-bold' >{item.snippet.title}</h2>
          <h3 className='text-xs text-gray-600 font-medium my-1'>{item.snippet.channelTitle}</h3>
          <p className='text-xs  text-gray-600 font-medium' >{converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()} </p>
        </Link>
      ))}


    </div>


  )
}

export default Main
