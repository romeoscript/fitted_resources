import React from "react";
import Layout from "../Layout";
import profile_g from "../../../assets/profile_g.png";
import BankForms from "../../BankForms";
import Profile from "./Profile";
import BankDEtailsForm from "../../BankDetailForm";

const Settings = () => {


  return (
    <div>
      <Layout>

        <div
          className="lg:p-[1rem] min-h-[599px] lg:bg-white bg-transparent rounded-[20px] bg-white rounded-[24px] lg:w-[90%] m-auto my-[2rem] lg:shadow-md"
         
        >
          <h2 className="font-bold text-2xl text-center lg:pb-0 pb-[1rem]">Vetted Tailor Application</h2>
          <main className="lg:flex block justify-between">
            <Profile />
            <aside className="basis-[50%] p-[1rem]">

              <BankDEtailsForm />

            </aside>
          </main>
        </div>
      </Layout>
    </div>
  );
};

export default Settings;
