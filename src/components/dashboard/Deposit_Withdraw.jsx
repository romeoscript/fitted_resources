import React from "react";

const Deposit_Withdraw = () => {
  return (
    <div className="flex items-center justify-between gap-4 p-[1rem]">
      <aside
        className="basis-[47%] h-[288px] rounded-md  flex"
        style={{ boxShadow: " 0px 4px 20px -1px rgba(0, 0, 0, 0.25)" }}
      ></aside>

      <aside
        className="basis-[47%] h-[288px] rounded-md p-[1rem] grid grid-cols-2 gap-4"
        style={{
          boxShadow: " 0px 4px 20px -1px rgba(0, 0, 0, 0.25)",
          width: "50%",
        }}
      ></aside>
    </div>
  );
};

export default Deposit_Withdraw;
