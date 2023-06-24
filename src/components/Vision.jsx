import React from "react";
import forexlaptop from "../assets/forexlaptop.png";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const Vision = () => {
  return (
    <section>
      <div className="flex items-center justify-around p-[2rem] w-4/5 m-auto">
        <aside className="text-left basis-[49%]">
          <h2 className="text-4xl text-[#2173C9] mb-[4rem] text-left">
            {" "}
            <PlayArrowIcon /> What we Offer
          </h2>
          <p className="text-xl text-[#2173C9]">
            Lorem ipsum dolor sit amet consectetur. Faucibus odio fermentum
            platea at cursus molestie urna amet. Tortor viverra sed maecenas
            sapien id in neque netus egestas. Pharetra.
          </p>
        </aside>
        <aside>
          <img src={forexlaptop} alt="" />
        </aside>
      </div>
    </section>
  );
};

export default Vision;
