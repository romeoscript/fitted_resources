import React from "react";
import Layout from "../components/Layout";
import Stock from "../components/Stock";
import Wrapper from "../components/Wrapper";

const Home = () => {
  return (
    <Layout>
      <Wrapper />
      <Stock />
    </Layout>
  );
};

export default Home;
