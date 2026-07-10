import React, { useState } from "react";

import Sidebar from "../../Components/Sidebar";
import Main from "../../Components/Main";

const Home = ({ sidebar,setProgress }) => {
  const [category, setCategory] = useState(0);
  return (
    <>
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}/>

        
      <div
        className={`pt-5 pb-5  pr-[2%] transition-all w-full  duration-100 ${
          sidebar ? "" : "pl-[8%] sm:pl-[7%]"
        } `}
      >
        <Main category={category} setProgress={setProgress}/>
      </div>
    </>
  );
};

export default Home;
