import React from "react";
import Layout from "../Layout";
import profile_g from "../../../assets/profile_g.png";
import BankForms from "../../BankForms";
import Profile from "./Profile";

const Funding = () => {


  return (
    <div>
      <Layout>

        <div
          className="p-[1rem] min-h-[599px]  rounded-[20px] bg-white rounded-[24px] w-[90%] m-auto my-[2rem]"
          style={{ boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.07)' }}
        >
          <h2 className="font-bold text-2xl">Vetted Tailor Application</h2>
          <main className="flex justify-between">
            <Profile />
            <aside className="basis-[50%] p-[1rem]">

              <BankForms />

            </aside>
          </main>
        </div>
      </Layout>
    </div>
  );
};

export default Funding;
