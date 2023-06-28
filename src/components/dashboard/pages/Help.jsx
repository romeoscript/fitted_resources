import React,{useState} from "react";
import Layout from "../Layout";
import { BiChevronDown } from "react-icons/bi";
import asset1customer from "../../../assets/asset1cus.png";

const faqs = [
  {
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage the state of your application efficiently.",
  },
  {
    question: "What is Tailwind?",
    answer:
      "Tailwind is a utility-first CSS framework that allows you to quickly build custom designs without writing any CSS. It provides a set of pre-defined classes that you can use to style your HTML elements.",
  },
  {
    question: "How do I install React and Tailwind?",
    answer:
      "You can install React and Tailwind using npm or yarn. Here's an example command: npm install react tailwindcss",
  },
];

const Help = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleClick(index) {
    setActiveIndex(index === activeIndex ? null : index);
  }

  return (
    <div>
      <Layout>
        <section className="p-[1rem]">
          <div className="grid grid-cols-2 gap-4">
            <aside
              className="h-[736px] rounded-[20px]"
              style={{ boxShadow: "0px 4px 20px -1px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="text-white md:w-3/5 w-[90%] m-auto mt-[8rem] min-h-[100vh] ">
                <h2 className="text-[#2173C9] text-center text-3xl font-bold p-[2rem] ">
                  Frequently Asked Questions
                </h2>
                {faqs.map((faq, index) => (
                  <div key={index} className=" py-4">
                    <button
                      onClick={() => handleClick(index)}
                      className="flex justify-between border-l-8 rounded-sm border-[#FF7D00]  text-[#2173C9] items-center w-full px-4 py-2 text-lg font-medium text-left  focus:outline-none "
                    >
                      <span>{faq.question}</span>
                      <BiChevronDown
                        className={`${
                          activeIndex === index ? "transform rotate-90" : ""
                        } w-5 h-5`}
                      />
                    </button>
                    {activeIndex === index && (
                      <p className="mt-2 px-4 text-gray-500 w-4/5 p-[1.5rem] border border-white bg-gray-300 bg-opacity-5 backdrop-blur-md rounded-md">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </aside>
            <aside className="grid gap-4">
              <div
                className="h-[357px] rounded-[20px] flex items-center flex-col justify-center"
                style={{ boxShadow: "0px 4px 20px -1px rgba(0, 0, 0, 0.25)" }}
              >
                <h1 className="text-[#2173C9] my-[1rem] text-2xl"> we are here to help</h1>
                <img src={asset1customer} alt="" className="block text-center my-[1rem]" />
                <button className="text-xl font-bold bg-[#2173C9] rounded-md px-[2rem] py-[0.5rem] text-white">
                  send a message
                </button>
              </div>
              <div
                className="h-[357px] rounded-[20px]"
                style={{ boxShadow: "0px 4px 20px -1px rgba(0, 0, 0, 0.25)" }}
              >
                <h1 className="text-[#2173C9] my-[1rem] text-2xl"> contact information</h1>

              </div>
            </aside>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Help;
