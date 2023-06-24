import React from "react";
import Layout from "../components/dashboard/Layout";

import Balance from "../components/dashboard/Balance";

const Dashboard = () => {
  return (
    <div>
      <Layout>
        <section>
          <Balance />
        </section>
      </Layout>
    </div>
  );
};

export default Dashboard;
