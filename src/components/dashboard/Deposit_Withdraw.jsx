import React from "react";
import blobb from "../../assets/blobb.png";
import blobblue from "../../assets/blobblue.png";
import blobbo from "../../assets/blobbo.png";
import bloborange from "../../assets/bloborange.png";
import walletimg from "../../assets/walletimg.png";

const Deposit_Withdraw = () => {
  return (
    <div className="flex items-center justify-between gap-4 p-[1rem]">
      <aside
        className="basis-[47%] w-[47%] h-[288px] rounded-md p-[1rem] items-center justify-around flex relative"
        style={{ boxShadow: " 0px 4px 20px -1px rgba(0, 0, 0, 0.25)" }}
      >
        <div className="text-left">
          <h1 className="text-[30px] text-[#2173C9] font-bold">Deposit</h1>
          <p className="font-bold text-[black] text-2xl w-4/5">
            Choose Method Of Deposit
          </p>
        </div>
        <div className="h-[150px] w-[150px] rounded-full flex items-center justify-center bg-[#D6EAFF]">
          <img src={walletimg} alt="" />
        </div>
        <img
          src={blobb}
          alt=""
          className="w-full block absolute left-0 bottom-0"
        />
        <img src={blobblue} alt="" className="w-full block absolute bottom-0" />
      </aside>

      <aside
        className="basis-[47%] w-[47%] h-[288px] rounded-md p-[1rem] items-center justify-around flex relative"
        style={{ boxShadow: " 0px 4px 20px -1px rgba(0, 0, 0, 0.25)" }}
      >
        <div className="text-left">
          <h1 className="text-[30px] text-[#2173C9] font-bold">Withdraw</h1>
          <p className="font-bold text-[black] text-2xl w-4/5">
            Choose Method Of Withdrawal
          </p>
        </div>
        <div className="h-[150px] w-[150px] rounded-full flex items-center justify-center bg-[#D6EAFF]">
          <img src={walletimg} alt="" />
        </div>
        <img
          src={bloborange}
          alt=""
          className="w-full block absolute left-0 bottom-0"
        />
        <img src={blobbo} alt="" className="w-full block absolute bottom-0" />
      </aside>
      {/* <aside
        className="basis-[47%] h-[288px] rounded-md p-[1rem] grid grid-cols-2 gap-4 relative"
        style={{
          boxShadow: " 0px 4px 20px -1px rgba(0, 0, 0, 0.25)",
          width: "50%",
        }}
      >
         <img src={blobbo} alt=""  className="w-full block absolute bottom-0"/>
        <img src={bloborange} alt=""  className="w-full block absolute bottom-0"/>
      </aside> */}
    </div>
  );
};

export default Deposit_Withdraw;
