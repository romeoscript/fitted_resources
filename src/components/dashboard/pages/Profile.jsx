import React from 'react'
import profile_g from "../../../assets/profile_g.png";

const Profile = () => {
  return (
    <aside className="mx-[1rem] lg:shadow-none shadow-md lg:p-0 p-[1rem] rounded-[32px] bg-white">
      <img src={profile_g} alt="" />
      <div className="text-left flex gap-4 mt-[3rem]">
        <figure className="text-[#828282]">
          <p className=" my-[0.7rem] text-[16px] "> Name: </p>
          <p className=" my-[0.7rem] text-[16px] "> Gender: </p>
          <p className=" my-[0.7rem] text-[16px] "> Sew Gender: </p>
          <p className=" my-[0.7rem] text-[16px] "> Phone Number: </p>
          <p className=" my-[0.7rem] text-[16px] "> Email Address: </p>
          <p className=" my-[0.7rem] text-[16px] "> Store Name: </p>
          <p className=" my-[0.7rem] text-[16px] "> Location:: </p>
        </figure>
        <figure>
          <span className="font-500  text-[16px] block my-[0.7rem]">Samuel Oladokun</span>
          <span className="font-500 text-[16px]  block my-[0.7rem]">Male</span>

          <span className="font-500  text-[16px] block my-[0.7rem]">Both</span>
          <span className="font-500  text-[16px] block my-[0.7rem]">08137901372</span>
          <span className="font-500  text-[16px] block my-[0.7rem]">biola@fitted.ng</span>
          <span className="font-500  text-[16px] block my-[0.7rem]">Skibi Fashion House</span>
          <span className="font-500  text-[16px] block my-[0.7rem]">Lagos, Nigeria</span>
        </figure>
      </div>
    </aside>
  )
}

export default Profile