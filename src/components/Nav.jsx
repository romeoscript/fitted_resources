import potus from "../assets/potus.png";
import { BiChevronDown } from "react-icons/bi";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";

const Nav = () => {
  const [dropdown, setDropdown] = useState(false);
  const [about, setAbout] = useState(false);
  const [service, setService] = useState(false);
  const [mobile, setMobile] = useState(false);

  const changeMobile = () => {
    setMobile(!mobile);
  };

  return (
    <div className="flex md:justify-around justify-between left-0 h-[90px] bg-[white] z-[30] items-center px-[1rem] fixed top-0 w-full z-20">
      <aside className="w-[200px]">
        <Link to="/">
          <img src={potus} alt="" className="w-full" />
        </Link>
      </aside>
      <aside className="flex items-center">
        <ul className="md:flex items-center mr-3  hidden">
        <li className="flex items-center text-[blue] text-[20px] p-[0.5rem] relative">
            <Link to="/contact"> Market</Link>
          </li>
          <li
            className="flex items-center text-[blue] text-[20px] p-[0.5rem] relative"
            onMouseOver={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            Financial service <BiChevronDown />
            {dropdown && (
              <div
                className="text-[14px] absolute bg-[blue] text-[blue] p-[1rem] left-[-100px] top-[90%] min-w-[300px] max-w-[472px] rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, type: "spring" }}
              >
                <ul className="grid grid-cols-3 mb-[1rem]">
                 
                </ul>
              </div>
            )}
          </li>
          <li
            className="flex items-center text-[blue] text-[20px] p-[0.5rem] relative"
            onMouseOver={() => setAbout(true)}
            onMouseLeave={() => setAbout(false)}
          >
            About us <BiChevronDown />
            {about && (
              <div
                className="text-[14px] absolute bg-[blue] text-[blue] p-[1rem] text-center top-[90%] w-[152px] rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, type: "spring" }}
              >
                <ul className=" mb-[1rem] ">
                  <li className="border-b-2 p-[0.5rem]">Who We Are </li>
                  <li className="border-b-2 p-[0.5rem]">Gallery</li>
                  <li className="border-b-2 p-[0.5rem]"> Portfolio</li>
                  <li className="border-b-2 p-[0.5rem]"> Team</li>
                  <li className="border-b-2 p-[0.5rem]"> Mission</li>
                  <li className="border-b-2 p-[0.5rem]"> vision</li>
                </ul>
              </div>
            )}
          </li>
         
          <li className="flex items-center text-[blue] text-[20px] p-[0.5rem] relative">
            <Link to="/contact"> Contact us</Link>
          </li>
          <li className="flex items-center text-[blue] text-[20px] p-[0.5rem] relative">
            <Link to="/contact"> Get Started </Link>
          </li>
        </ul>
        {!mobile && (
          <MenuIcon
            className="text-[blue] mx-[1rem] md:hidden block"
            style={{ fontSize: "35px" }}
            onClick={changeMobile}
          />
        )}
        {mobile && (
          <ClearIcon
            className="text-[blue] mx-[1rem]"
            style={{ fontSize: "35px" }}
            onClick={changeMobile}
          />
        )}
        {mobile && (
          <ul className="mr-3 absolute bg-[blue] rounded-md p-[1rem] top-20 right-8 md:hidden">
            <li
              className="flex items-center text-[blue] text-[20px] p-[0.5rem] relative"
              onMouseOver={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              Courses <BiChevronDown />
              {dropdown && (
                <div
                  className="text-[14px] absolute bg-[blue] right-[2%] text-[blue] p-[1rem] z-20 top-[90%] min-w-[300px] rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, type: "spring" }}
                >
                  <ul className="grid  mb-[1rem]">
                    <li>Django</li>
                    <li>Dart</li>
                    <li>web Design</li>

                    <li>Java</li>
                    <li>React</li>
                    <li>Mobile App development</li>

                    <li>python </li>
                    <li>Word press</li>
                    <li>Virtual Reality</li>

                    <li>UI/UX Design </li>
                    <li>Android Studio</li>
                    <li>Artificial Intelligence</li>

                    <li>Flutter </li>
                    <li>Ethical hacking</li>
                    <li> Animation</li>
                    <li>Forex </li>
                    <li>Blockchain & Cryptocurrency</li>
                    <li> Data Analysis</li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className="flex items-center text-[blue] text-[20px] p-[0.5rem] relative"
              onMouseOver={() => setAbout(true)}
              onMouseLeave={() => setAbout(false)}
            >
              About us <BiChevronDown />
              {about && (
                <div
                  className="text-[14px] absolute right-[2%]  bg-[blue] z-40 text-[blue] p-[1rem] text-center top-[90%] w-[152px] rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, type: "spring" }}
                >
                  <ul className=" mb-[1rem] ">
                    <li className="border-b-2 p-[0.5rem]">Who We Are </li>
                    <li className="border-b-2 p-[0.5rem]">Gallery</li>
                    <li className="border-b-2 p-[0.5rem]"> Portfolio</li>
                    <li className="border-b-2 p-[0.5rem]"> Team</li>
                    <li className="border-b-2 p-[0.5rem]"> Mission</li>
                    <li className="border-b-2 p-[0.5rem]"> vision</li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className="flex items-center text-[blue] text-[20px] p-[0.5rem] relative"
              onMouseOver={() => setService(true)}
              onMouseLeave={() => setService(false)}
            >
              {service && (
                <div
                  className="text-[14px] absolute right-[2%] bg-[blue] text-[blue] px-[1rem] z-20 top-[90%] w-[200px] text-center rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <ul className=" mb-[1rem] ">
                    <Link to="/services/1">
                      <li className="border-b-2 p-[0.5rem]">
                        Web Design & Development{" "}
                      </li>
                    </Link>
                    <Link to="/services/2">
                      <li className="border-b-2 p-[0.5rem]">
                        Mobile App Development
                      </li>
                    </Link>
                    <Link to="/services/3">
                      <li className="border-b-2 p-[0.5rem]">
                        {" "}
                        Digital Marketing
                      </li>
                    </Link>
                    <Link to="/services/4">
                      <li className="border-b-2 p-[0.5rem]"> Branding</li>
                    </Link>
                    <Link to="/services/5">
                      <li className="border-b-2 p-[0.5rem]">
                        {" "}
                        Company Registration
                      </li>
                    </Link>
                    <Link to="/services/6">
                      <li className="border-b-2 p-[0.5rem]">
                        {" "}
                        Cryptocurrency Exchange{" "}
                      </li>
                    </Link>
                    <Link to="/services/7">
                      <li className="border-b-2 p-[0.5rem]"> Web3 </li>
                    </Link>
                  </ul>
                </div>
              )}
              Services <BiChevronDown />
            </li>
            <Link to="/contact">
              <li className="flex items-center text-[blue] text-[20px] p-[0.5rem] relative">
                Contact us
              </li>
            </Link>
          </ul>
        )}

        <p class="font-medium text-3xl leading-10 text-orange-500 font-poppins">
          <Link to="/login">login</Link>
        </p>
      </aside>
    </div>
  );
};

export default Nav;
