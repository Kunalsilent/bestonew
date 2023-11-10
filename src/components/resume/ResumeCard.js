import React from 'react'

const ResumeCard = ({title,subTitle,result,des}) => {
  const redShadowStyle = {
    boxShadow: "0 0 10px gray",
  };
  return (
    <div className="w-full h-1/3 group flex">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-gray  hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 " style={redShadowStyle}>
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl  text-black font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-sm md:text-base font-medium text-black  group-hover:text-gray-300 duration-300">
          {des}
        </p>
           
          </div>
         
        </div>
       
      </div>
    </div>
  );
}

export default ResumeCard