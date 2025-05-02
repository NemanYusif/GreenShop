import React, { useState } from "react";

const AboutItem = () => {
    const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => setIsExpanded(!isExpanded);
  const text =`This secateur cuts up to 2.5 cm diameter. Carrying RHS
                endorsement, possibly the highest accolade in gardening, for
                peace of mind this pruner comes with a ten-year guarantee
                against manufacturing defects. Supplied with replacement blade
                and spare spring. You may also be interested in our pack of two
                replacement springs.`
  return (
    <>
      <div className="mx-auto max-w-11/12 pt-20">
        <div className="grid gap-12  xl:grid-cols-2 lg:grid-cols-2  w-full ">
          <div className="w-[100%]">
            <img className="w-[100%] object-cover object-center object" src="/Sales/sale4.svg" alt="" />
          </div>

          <div className="w-[100%] flex flex-col gap-10">
            <div>
              <h2 className="text-3xl font-semibold">Secateurs</h2>
            </div>
            <div className="flex gap-3">
              <h2 className="text-7xl font-bold">$199</h2>
              <h3 className="flex items-end text-4xl opacity-40 line-through font-semibold">$240</h3>
              <div><p className="bg-[#339933] text-[18px] px-1 rounded-md font-semibold text-white" >-17%</p></div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5">
              <div className="flex gap-5 items-center">
              <button className="border px-6 border-[#DDDDDD] py-3 rounded-md">-</button>
              <p className="text-[18px] font-semibold">0</p>
              <button className="border px-6 border-[#DDDDDD] py-3 rounded-md">+</button>
              </div>
              <div className="flex">
              <button className="bg-[#339933] px-35 py-3 rounded-md text-white lg:px-20 xl:px-35 sm:px-30">Add to cart</button>
              </div>
            </div>
            <div className="flex flex-col gap-7">
              <h3 className="text-2xl font-semibold ">Description</h3>
              <p>
                This high quality everyday secateur features a fully hardened
                and tempered, high-carbon steel blade for lasting sharpness. For
                comfort, the robust but lightweight alloy handles are covered
                in a soft grip, in a bright terracotta colour for maximum
                visibility in the garden. It won’t be easy to leave this pruner
                behind at the end of the day! Rubber cushion stops prevent
                jarring over repeated use, reducing hand strain for the user.  
              </p>
              <p>
              {isExpanded ? text : `${text.substring(0, 250)}...`}    
                </p>
              <button
              onClick={toggleReadMore}
              className="underline flex items-start">
                {isExpanded ? "Close" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutItem;
