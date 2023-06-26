import React from "react";
import Deposit_Withdraw from "../Deposit_Withdraw";
import Layout from "../Layout";
import TransactionHistory from "../TransactionHistory";

const Funding = () => {
  return (
    <div>
      <Layout>
        <Deposit_Withdraw />
        <div
          className="p-[1rem] h-[499px]  rounded-[20px] bg-white"
          style={{ boxShadow: "0px 4px 20px -1px rgba(0, 0, 0, 0.25)" }}
        >
          <h2 className="text-center font-bold text-3xl text-[#2173C9] mb-[2rem]">
            Transaction History
          </h2>
          <TransactionHistory />
        </div>
      </Layout>
    </div>
  );
};

export default Funding;
