import React,{useState} from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setViewPortEntered(true)}
        onExit={() => setViewPortEntered(false)}
      >
        <div className='grid grid-cols-3 bg-[url("/src/assets/counterbg.png")] h-[400px] rounded-tr-[50px] no-repeat bg-cover items-center'>
          <aside className="text-white">
            <h2 className="text-5xl font-bold mb-[0.5rem]"> {viewPortEntered && <CountUp end={4000} duration={2} />}+</h2>
            <p>Total Trades</p>
          </aside>
          <aside className="text-white">
            <h2 className="text-5xl font-bold mb-[0.5rem]"> ${viewPortEntered && <CountUp end={140.6} duration={2} />}b</h2>
            <p>Traded volumes</p>
          </aside>
          <aside className="text-white">
            <h2 className="text-5xl font-bold mb-[0.5rem]"> ${viewPortEntered && <CountUp end={40} duration={2} />}b+</h2>
            <p>Revenue</p>
          </aside>
          <aside className="text-white">
            <h2 className="text-5xl font-bold mb-[0.5rem]"> {viewPortEntered && <CountUp end={4000} duration={2} />}+</h2>
            <p>Assets Managed</p>
          </aside>
          <aside className="text-white">
            <h2 className="text-5xl font-bold mb-[0.5rem]"> {viewPortEntered && <CountUp end={34000} duration={2} />}+</h2>
            <p>clients</p>
          </aside>
          <aside className="text-white">
            <h2 className="text-5xl font-bold mb-[0.5rem]"> {viewPortEntered && <CountUp end={21000} duration={2} />}+</h2>
            <p>Active Portfolios</p>
          </aside>
        </div>
      </ScrollTrigger>
    </>
  );
};

export default Counter;
