import React from "react";
import Layout from "../components/dashboard/Layout";

import Balance from "../components/dashboard/Balance";
import TradingView from "../components/dashboard/TradingView";

const Dashboard = () => {
  return (
    <div>
      <Layout>
        <section>
          <Balance />
          <TradingView />
        </section>
      </Layout>
    </div>
  );
};

export default Dashboard;
