import React from "react";
import Layout from "../components/Layout";
import aboutLogo from "../assets/aboutlogo.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Stock from "../components/Stock";
import Team from "../components/Team";
import Vision from "../components/Vision";
import Who from "../components/Who";
import Gains from "../components/Gains";
import Counter from "../components/Counter";
import TestimonialSlider from "../components/TestimonialSlider";

const About = () => {
  return (
    <div>
      <Layout>
        <h2 className="text-5xl text-[#1F7DE0] text-left px-[7rem] pb-[3rem]">
          About
        </h2>
        <div className="flex gap-[4%] items-center px-[6rem] pb-[6rem] justify-between">
          <aside className="basis-[49%] text-left">
            <h2 className="text-3xl text-[#2173C9] mb-[1rem]">
              {" "}
              <PlayArrowIcon /> Who we Are
            </h2>
            <p className="text-[#1F7DE0]">
              Lorem ipsum dolor sit amet consectetur. Interdum donec neque non
              adipiscing in eu. Sed lectus eu orci amet magna tempor rhoncus.
              Quisque feugiat nisl pellentesque risus bibendum viverra. Massa
              felis id lectus placerat volutpat. Eros ultrices mollis
              scelerisque at a faucibus amet pharetra enim. Justo euismod metus
              blandit urna cras sapien pellentesque eget. Non ultrices eleifend
              nisl scelerisque aliquet ipsum. Egestas felis eget enim odio
              ullamcorper. Vestibulum lectus eget maecenas neque interdum urna.
              Blandit est morbi ultricies eu enim turpis quis quisque
              vestibulum. Amet aliquam in vitae pulvinar scelerisque dolor.
              Dignissim vulputate at viverra lorem mattis adipiscing eget
              aliquet suspendisse. Fringilla non ut in varius ornare convallis
              convallis sed tincidunt. Odio elementum eget turpis pulvinar
              vivamus eget turpis mattis nec. Sit porttitor porttitor
              scelerisque tortor. Quis nunc habitant enim in. A habitant vivamus
              dapibus sagittis condimentum. Nisl ipsum purus et ultrices est ut.
              Convallis elit tempus adipiscing sed felis at. Habitant magnis
              ultrices sed nisi semper sed enim. Maecenas pulvinar enim accumsan
              erat eu aliquam senectus. Nunc sit massa elementum enim. Ipsum
              etiam interd
            </p>
          </aside>
          <aside>
            <img src={aboutLogo} alt="" />
          </aside>
        </div>
        <h2 className="text-3xl text-[#2173C9] mb-[4rem] text-left px-[6rem]">
          {" "}
          <PlayArrowIcon /> What we Offer
        </h2>
        <div className="w-[90%] m-auto">
          <Stock />
        </div>
        <Team />
        <Vision />
        <Gains />
        <Counter />
        <TestimonialSlider />
      </Layout>
    </div>
  );
};

export default About;
