import React from "react";
import Gains from "../components/Gains";
import Layout from "../components/Layout";
import Stock from "../components/Stock";
import Who from "../components/Who";
import Counter from "../components/Counter";
import Wrapper from "../components/Wrapper";

const Home = () => {
  return (
    <Layout>
      <Wrapper />
      <Stock />
      <Who />
      <Gains />
      <Counter />
    </Layout>
  );
};

export default Home;
