import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { converter } from "../Converter1";

const Main = ({ categoryId }) => {
  const [data, setData] = useState([]);

  // Fetch RecomendedData
  const optionalData = async () => {
const req = await fetch(
  `${import.meta.env.VITE_API_URL}/popular/${categoryId}`
);    const res = await req.json();
    setData(res.items);
  };

  useEffect(() => {
    optionalData();
  }, [categoryId]);

  return (
    <div>
      {data?.map((item, index) => {
        return (
          <div className="sm:flex mb-1.5 " key={index}>
            
            <Link
               to={`/video/${item.snippet.categoryId}/${item.id}`}
              className="sm:ml-1 sm:flex"
            >
              {/* Img */}

              <img
              src={item.snippet.thumbnails.medium.url}
              alt="thumbnails"
              className="sm:w-35 w-full   object-cover  "
            />
            {/* DisplayContent*/}

            <div className="ml-1 mt-1">
              <h2 className="text-[9px]   font-bold">{item.snippet.title}</h2>
              <h3 className="text-[9px] text-gray-600 font-medium mt-0.5">
                {item.snippet.channelTitle}
              </h3>
              <p className="text-[9px]  text-gray-600 font-medium">
                {converter(item.statistics.viewCount)} Views
              </p></div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
