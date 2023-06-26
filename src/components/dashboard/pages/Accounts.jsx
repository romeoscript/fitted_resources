import React from "react";
import AccountHistory from "../AccountHistory";
import Balance from "../Balance";
import Layout from "../Layout";

const Accounts = () => {
  return (
    <div>
      <Layout>
        <Balance />
        <div
          className="p-[1rem] h-[499px]  rounded-[20px] bg-white"
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
