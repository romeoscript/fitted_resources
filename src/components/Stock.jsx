import React from "react";
import stocks from "../assets/stocks.png";
import etfs from "../assets/etfs.png";
import options from "../assets/options.png";
import otc from "../assets/otc.png";
import adrs from "../assets/adrs.png";
import buy from "../assets/buy.png";
import ira from "../assets/ira.png";
import human from "../assets/human.png";
import { useLocation } from "react-router-dom";

const Stock = () => {
  const location = useLocation();
  const mainStock = [
    {
      title: "Stocks",
      img: stocks,
      text: "Invest in thousands of companies and fractional shares with as little as $5 trading tools and analytics to create your own financial portfolio.",
    },
    {
      title: "Options",
      img: options,
      text: "Options provide a strategic alternative tojust investing in equity.",
    },
    {
      title: "ETFs",
      img: etfs,
      text: "Diversify your holdings by investing into a group of stocks with the same convenience as trading a single stock.",
    },
    {
      title: "OTC",
      img: otc,
      text: "Get a better understanding of what OTCs are and how you can invest in OTCs with Webull.",
    },
    {
      title: "ADRs",
      img: adrs,
      text: "Invest in foreign companies to diversify your portfolio or take advantage of global opportunities.",
    },
  ];
  return (
    <>
      <div className="flex gap-2 items-center justify-around">
        {mainStock.map((stock) => {
          return (
            <aside
              className="min-h-[311px] rounded-md w-[241px] p-[1rem] text-left"
              style={{ boxShadow: "0px 5px 20px 0px rgba(4, 90, 144, 0.15)" }}
            >
              <img src={stock.img} alt="" />
              <h1 className="font-bold py-[0.5rem]">{stock.title}</h1>
              <p>{stock.text}</p>
            </aside>
          );
        })}
      </div>
      {location.pathname === "/about" ? (
        ""
      ) : (
        <div className="flex items-center justify-center gap-8 my-[4rem] w-4/5 m-auto">
          <aside>
            <img src={buy} alt="" />
          </aside>
          <aside className="text-left ">
            <div className="mb-[1rem]">
              <h2 className="flex items-center justify-start gap-2 text-2xl ">
                {" "}
                <img src={ira} alt="" /> IRA
              </h2>
              <p className="px-[3rem]">
                Save for retirement with POTUS Traditional, Roth or Rollover
                IRA.
              </p>
            </div>
            <div>
              <h2 className="flex items-center justify-start gap-2 text-2xl">
                {" "}
                <img src={human} alt="" /> Individual Brokerage Account
              </h2>
              <p className="px-[3rem]">
                Individual brokerage account is the general account which allows
                you to buy and sell securities and assets.
              </p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default Stock;
