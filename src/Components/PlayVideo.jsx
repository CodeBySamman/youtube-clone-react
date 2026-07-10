import React, { useEffect, useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
import { MdOutlineSaveAlt } from "react-icons/md";
import { useParams } from "react-router-dom";
import { converter } from "../Converter1";
import moment from "moment";

const PlayVideo = () => {
  const [data2, setData2] = useState(null);
  const [channel, setchannel] = useState(null);
  const [comments1, setComments1] = useState([]);
  const { videoId } = useParams();
  
  const [loading, setLoading] = useState(false)

    //  VideoData
  const fetchvideodata = async () => {
    setLoading(true)
   const req = await fetch(
  `${import.meta.env.VITE_API_URL}/videos/${videoId}`
);
    const res = await req.json();
    setData2(res.items[0]);
    setLoading(false)
  };
 
  // ChannelData
  const fetchvideodata2 = async () => {
const req = await fetch(
  `${import.meta.env.VITE_API_URL}/channels/${data2?.snippet?.channelId}`
);
    const res = await req.json();

    if (res.items?.length > 0) {
      setchannel(res.items[0]);
    }

  
    // CommentsData
   const req1 = await fetch(
  `${import.meta.env.VITE_API_URL}/comments/${videoId}`
);
    const res1 = await req1.json();
    setComments1(res1.items || []);

  };

  useEffect(() => {
    fetchvideodata();
  }, [videoId]);


  useEffect(() => {
    if (data2?.snippet?.channelId) {
      fetchvideodata2();
    }
  }, [data2]);

  // Loading
  
 if (loading) {
    return <h2 className="m-10 text-gray-600">Loading...</h2>
  }
  return (
    <div>

      {/* Ifram */}

      <iframe
        className="w-full h-[37vw]"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <h2 className="text-md mt-1.5  font-bold">
        {data2 ? data2.snippet.title : "Title Here"}
      </h2>

          {/* Viewscount */}

      <div className="flex justify-between ">
        <p className="text-xs text-gray-600 my-1.5 font-medium">
          {converter(data2 ? data2.statistics.viewCount : "7k")} Views &bull;{" "}
          {data2 ? moment(data2.snippet?.publishedAt).fromNow() : "just Now"}
        </p>
      
         {/* Likecount */}

        <div className="flex gap-4 items-center my-1.5">
          <span className="flex items-center gap-1 font-medium text-sm text-gray-600">
            <BiSolidLike />
            {data2 ? converter(data2.statistics.likeCount) : 34}
          </span>
          <span className="flex items-center gap-1 font-medium text-sm text-gray-600">
            <BiSolidDislike />
          
          </span>
          <span className="flex items-center gap-1 font-medium text-sm text-gray-600">
            <IoIosShareAlt />
            share
          </span>
          <span className="flex items-center gap-1 font-medium text-sm text-gray-600">
            <MdOutlineSaveAlt />
            save
          </span>
        </div>
      </div>
      <hr className="border-0 bg-gray-300 h-0.5" />

      {/* Thumbnails */}

      <div className="flex justify-between mt-3 mb-2.5 items-center">
        <div className="flex">
          <img
            className=" w-6 h-6 rounded-4xl shrink-0"
            src={channel?.snippet?.thumbnails?.default?.url}
            alt="thumbnails"
          />

          {/* Subscribe */}

          <div className="ml-3">
            <p className="text-xs font-bold">{data2?.snippet?.channelTitle}</p>
            <span className="text-xs text-gray-600 font-medium ">
              {converter(channel?.statistics?.subscriberCount)} Subscribeer
            </span>
          </div>
        </div>
        <button className="px-7 py-1 rounded-sm border bg-red-600 hover:bg-red-700 text-sm text-white font-medium">
          Subscribe
        </button>
      </div>


        {/* Description */}

      <div className="ml-9 text-sm font-medium  ">
        <p className="text-gray-600">
          {data2 ? data2.snippet.description.slice(0, 260) : "Description Here"}
          ...
        </p>

        <hr className="border-0 bg-gray-300 h-0.5 mt-1.5 mb-2" />
        <h4 className="font-bold text-sm mt-3 mb-4">
          {data2 ? converter(data2.statistics.commentCount) : ""} Comments
        </h4>

        {comments1.map((item, index) => (
          <div className="flex mb-5 " key={index}>

            {/* Img */}

            <img
              className=" w-6 h-6 rounded-4xl shrink-0"
              src={
                item.snippet.topLevelComment.snippet.authorProfileImageUrl ||
                "https://yt3.ggpht.com/a59geD6E9FfbBj3sPhMfjgLXDxZZw0Uy4Kh-uxoZxWehIN-nnGF13Im6-LO7aw9rcRSEl_PxeA=s48-c-k-c0x00ffffff-no-rj"
              }
              alt="authorImage"
            />


            {/* AuthorName */}

            <div className="ml-3">
              <h3 className="text-xs font-bold">
                {item.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                <span className="text-xs text-gray-600 font-medium ml-2.5">
                  {moment(
                    item.snippet.topLevelComment.snippet.publishedAt,
                  ).fromNow()}
                </span>
              </h3>

              {/* TextDisplay */}

              <p className="text-xs text-gray-600 mt-0.5 font-medium">
                {item.snippet.topLevelComment.snippet.textDisplay}
              </p>

              <div className="flex mt-2 text-gray-600 ">
                <BiSolidLike />
                <span>
                  {converter(item.snippet.topLevelComment.snippet.likeCount)}
                </span>

                <BiSolidDislike className="ml-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayVideo;
