import React from 'react'


const Card = ({item:{title,des,icon}}) => {
  const redShadowStyle = {
    boxShadow: "0 0 10px gray",
  };
  return (
    <div className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-white group hover:bg-gradient-to-b  hover:to-[#ffff] transition-colors duration-100 group" style={redShadowStyle}>
      <div className="h-72 overflow-y-hidden" >
        <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500" >
          <div className="w-10 h-8 flex flex-col justify-between">
        
            {icon ? (
              <span className="text-5xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-black">
              {title}
            </h2>
            <p className="base text-black">{des}</p>

            <span className="text-2xl text-designColor">
              
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card