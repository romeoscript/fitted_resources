import React from "react";
import Gains from "../components/Gains";
import Layout from "../components/Layout";
import Stock from "../components/Stock";
import Who from "../components/Who";
import Wrapper from "../components/Wrapper";

const Home = () => {
  return (
    <Layout>
      <Wrapper />
      <Stock />
      <Who />
      <Gains />
    </Layout>
  );
};

export default Home;
