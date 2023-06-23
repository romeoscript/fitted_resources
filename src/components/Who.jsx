import React from "react";
import forex from "../assets/forexlaptop.png";

const Who = () => {
  return (
    <div className="text-left relative my-[4rem] mb-[13rem]">
      <aside className="w-3/5 p-[3rem] bg-[#2173C9] text-white rounded-br-[45px] rounded-tr-[45px] h-[450px] flex items-start flex-col justify-center">
        <h1 className="text-2xl font-bold my-[1rem]">Who we are</h1>
        <p className="w-3/5">
          Lorem ipsum dolor sit amet consectetur. Pulvinar condimentum ornare
          rhoncus mattis iaculis tristique sed. Purus eget enim ornare netus
          senectus ac convallis scelerisque. Faucibus congue porttitor pretium
          bibendum neque diam. Velit est et nibh vulputate ultrices netus
          mauris. Auctor dignissim aliquam et tortor faucibus eget. Velit nulla
          laoreet nunc hendrerit auctor sit elementum elementum egestas. Rhoncus
          tristique a enim ultricies sed ullamcorper. Enim volutpat et in
          lobortis integer consequat ut est feugiat. Id non donec sed purus
          tortor libero.
        </p>
      </aside>
      <aside className="absolute top-[-15%] right-0">
        <img src={forex} alt="" />
      </aside>
    </div>
  );
};

export default Who;
