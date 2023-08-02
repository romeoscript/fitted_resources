import React from "react";
import AccountHistory from "../AccountHistory";
import profile_g from "../../../assets/profile_g.png";
import Layout from "../Layout";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import Profile from "./Profile";

const Accounts = () => {
  return (
    <div>
      <Layout>
        <div className="lg:block hidden mx-auto bg-white my-[4rem] w-[90%] m-auto rounded-[25px] h-[100px] relative" style={{ boxShadow: '0px 4px 30px 0px rgba(0, 0, 0, 0.10)' }}>
          <span className="block p-[0.5rem] bg-white rounded-[31px] absolute bottom-[20%] left-[2%]" style={{ boxShadow: '0px 4px 30px 0px rgba(0, 0, 0, 0.10)' }}><img src={profile_g} alt="" className="h-[112px] w-[112px] rounded-[31px] " /></span>
          <div className="flex gap-8 items-center h-full pl-[11rem]">
            <aside >
              <h3 className=" text-left">Samuel Oladokun</h3>
              <div className="text-left flex gap-4">
                <figure>
                  <p className=""> Gender: </p>
                  <p className=""> Location: </p>
                  <p className=""> Saw Gender: </p>
                </figure>
                <figure>
                  <span className="font-500 block">Male</span>
                  <span className="font-500 block">Lagos, Nigeria</span>
                  <span className="font-500 block">Male</span>
                </figure>
              </div>
            </aside>
            <aside className="flex gap-4 items-center justify-center">
              <span className="bg-[#F6EEFF] block w-[40px] flex items-center justify-center h-[40px] rounded-full">
                <LocalPhoneOutlinedIcon />
              </span>
              <div>
                <h4 className="text-[#828282]">Phone Number</h4>
                <p>+2348958484848</p>
              </div>
            </aside>
            <aside className="flex gap-4 items-center justify-center">
              <span className="bg-[#F6EEFF] block w-[40px] flex items-center justify-center h-[40px] rounded-full">

                <EmailOutlinedIcon />
              </span>
              <div>
                <h4 className="text-[#828282]">Email address</h4>
                <p>samuelolaleye@gmail.com</p>
              </div>
            </aside>
          </div>

        </div>

       <div className="lg:hidden block my-[1.5rem]">
       <Profile />
       </div>

        <div
          className="p-[1rem] m-[1.5rem] h-[499px]  rounded-[20px] bg-white"
          style={{ boxShadow: "0px 4px 20px -1px rgba(0, 0, 0, 0.25)" }}
        >
          <h2 className="text-center font-bold text-3xl text-[#2173C9] mb-[2rem]">Accounts History</h2>
          <AccountHistory />
        </div>
      </Layout>
    </div>
  );
};

export default Accounts;
