
import { Link } from "react-router-dom";
const Footer = () => {
  return (
   

    <div className="w-full bg-darkGreen h-[20rem] ">
     
        <div className="mx-auto max-w-screen-xl space-y-5 px-4 py-16 sm:px-6 lg:space-y-[2rem] lg:px-8 ">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="flex flex-col">
              <div className=" shrink-0 flex justify-center">
                <img
                  className="w-[60%] md:w-[40%]"
                  src="../../../assets/Logos/salarfy-logo.png"
                  alt=""
                />
              </div>
              <p className="mt-8  text-white text-[1.1rem] text-center">
                We exist to re-define the market value <br /> of a job seeker
                for his betterment.
              </p>
            </div>

            <div className="flex gap-[50px] p-1 justify-center">
              <div>
                <p className=" text-white font-extrabold text-[1.5rem]">
                  Placement
                </p>

                <ul className="mt-6 space-y-4 text-sm ">
                  <li>
                    <Link to="#"
                      className="text-white transition hover:opacity-75"
                    >
                      Freshers
                    </Link>
                  </li>
                  <li>
                    <Link to="/"
                      className="text-white transition hover:opacity-75 "
                    >
                      Working Professional
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="md:ml-[150px]">
                <p className="font-extrabold text-white text-[1.5rem]">
                  Company
                </p>

                <ul className="mt-6 space-y-4 text-sm leading-[30%]">
                  <li>
                    <Link to="/aboutus"
                      className="text-white transition hover:opacity-75"
                    >
                      About Us
                    </Link>
                  </li>
                 

                  {/* <li>
                    <Link to="#"
                      className="text-white transition hover:opacity-75"
                    >
                      Blogs
                    </Link>
                  </li> */}

                  <li>
                    <Link to="#"
                      className="text-white transition hover:opacity-75"
                    >
                      Parent Company
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq"
                      className="text-white transition hover:opacity-75"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="/termofuse"
                      className="text-white transition hover:opacity-75"
                    >
                      Term of use
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacypolicy"
                      className="text-white transition hover:opacity-75"
                    >
                      Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link to="#"
                      className="text-white transition hover:opacity-75"
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Follow US */}
            <div className="">
              <p className="font-extrabold text-white text-[1.5rem] flex justify-center">
                Follow Us
              </p>

              <div className="flex justify-center mt-[1.2rem]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="199"
                  height="24"
                  viewBox="0 0 199 24"
                  fill="none"
                >
                  <path
                    d="M56 22H62C67 22 69 20 69 15V9C69 4 67 2 62 2H56C51 2 49 4 49 9V15C49 20 51 22 56 22Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M59 15.5C59.4596 15.5 59.9148 15.4095 60.3394 15.2336C60.764 15.0577 61.1499 14.7999 61.4749 14.4749C61.7999 14.1499 62.0577 13.764 62.2336 13.3394C62.4095 12.9148 62.5 12.4596 62.5 12C62.5 11.5404 62.4095 11.0852 62.2336 10.6606C62.0577 10.236 61.7999 9.85013 61.4749 9.52513C61.1499 9.20012 60.764 8.94231 60.3394 8.76642C59.9148 8.59053 59.4596 8.5 59 8.5C58.0717 8.5 57.1815 8.86875 56.5251 9.52513C55.8687 10.1815 55.5 11.0717 55.5 12C55.5 12.9283 55.8687 13.8185 56.5251 14.4749C57.1815 15.1313 58.0717 15.5 59 15.5Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M64.6367 7H64.6487"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M94.9 20.6C96.4 21.5 98.2 22 100 22C105.5 22 110 17.5 110 12C110 6.5 105.5 2 100 2C94.5 2 90 6.5 90 12C90 13.8 90.5 15.5 91.3 17L90.44 20.306C90.3956 20.4767 90.3972 20.656 90.4445 20.8259C90.4918 20.9958 90.5832 21.1501 90.7094 21.2733C90.8356 21.3965 90.9922 21.4841 91.1631 21.5272C91.3341 21.5704 91.5135 21.5675 91.683 21.519L94.9 20.6Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M104.5 14.848C104.5 15.01 104.464 15.177 104.387 15.339C104.308 15.5064 104.205 15.6611 104.081 15.798C103.86 16.041 103.617 16.216 103.341 16.329C103.071 16.442 102.778 16.5 102.463 16.5C102.003 16.5 101.512 16.392 100.993 16.172C100.444 15.9341 99.9243 15.6349 99.443 15.28C98.9195 14.8976 98.4254 14.4764 97.965 14.02C97.5095 13.5621 97.0893 13.0704 96.708 12.549C96.3576 12.0719 96.0611 11.5574 95.824 11.015C95.608 10.5 95.5 10.01 95.5 9.543C95.5 9.237 95.554 8.945 95.662 8.675C95.77 8.4 95.942 8.148 96.181 7.923C96.469 7.639 96.784 7.5 97.118 7.5C97.244 7.5 97.37 7.527 97.483 7.581C97.6 7.635 97.703 7.716 97.785 7.833L98.831 9.305C98.911 9.417 98.971 9.521 99.011 9.62C99.051 9.714 99.074 9.809 99.074 9.894C99.0727 10.0074 99.0398 10.1182 98.979 10.214C98.9096 10.3311 98.8248 10.4383 98.727 10.533L98.384 10.889C98.3601 10.9123 98.3414 10.9404 98.329 10.9714C98.3166 11.0024 98.3108 11.0356 98.312 11.069C98.312 11.104 98.317 11.136 98.326 11.172C98.339 11.208 98.353 11.235 98.362 11.262C98.442 11.411 98.582 11.604 98.781 11.838C98.984 12.072 99.2 12.311 99.434 12.549C99.678 12.788 99.912 13.008 100.151 13.211C100.385 13.408 100.579 13.543 100.732 13.624L100.814 13.661C100.85 13.6738 100.888 13.6799 100.926 13.679C100.96 13.6797 100.995 13.6733 101.027 13.66C101.058 13.6468 101.087 13.627 101.111 13.602L101.453 13.264C101.566 13.152 101.674 13.067 101.778 13.012C101.874 12.9511 101.985 12.9185 102.098 12.918C102.193 12.9194 102.286 12.9394 102.373 12.977C102.472 13.017 102.576 13.075 102.688 13.152L104.18 14.21C104.288 14.2803 104.374 14.3798 104.428 14.497C104.475 14.6082 104.499 14.7274 104.5 14.848Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M197.672 3.01036C196.685 3.70648 195.593 4.2389 194.436 4.58711C193.816 3.87346 192.991 3.36765 192.073 3.13808C191.156 2.9085 190.19 2.96625 189.306 3.30351C188.423 3.64077 187.664 4.24126 187.133 5.02378C186.601 5.80629 186.323 6.73308 186.336 7.67878V8.70933C184.525 8.75629 182.73 8.35463 181.112 7.54011C179.494 6.7256 178.102 5.52351 177.061 4.04092C177.061 4.04092 172.939 13.3159 182.214 17.4381C180.091 18.8788 177.563 19.6012 175 19.4992C184.275 24.652 195.611 19.4992 195.611 7.64786C195.61 7.3608 195.583 7.07446 195.529 6.7925C196.58 5.75524 197.323 4.44563 197.672 3.01036Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M146.87 7.80078C148.674 7.80078 150.404 8.51738 151.68 9.79294C152.955 11.0685 153.672 12.7985 153.672 14.6024V22.5377H149.137V14.6024C149.137 14.0011 148.898 13.4245 148.473 12.9993C148.048 12.5741 147.471 12.3352 146.87 12.3352C146.269 12.3352 145.692 12.5741 145.267 12.9993C144.842 13.4245 144.603 14.0011 144.603 14.6024V22.5377H140.068V14.6024C140.068 12.7985 140.785 11.0685 142.061 9.79294C143.336 8.51738 145.066 7.80078 146.87 7.80078Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M135.534 8.93555H131V22.5389H135.534V8.93555Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M133.267 5.53444C134.519 5.53444 135.534 4.51937 135.534 3.26722C135.534 2.01507 134.519 1 133.267 1C132.015 1 131 2.01507 131 3.26722C131 4.51937 132.015 5.53444 133.267 5.53444Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M27.4348 4.96985C27.289 4.38742 26.9921 3.85379 26.5741 3.42283C26.1561 2.99188 25.6317 2.67887 25.054 2.51543C22.9432 2 14.5 2 14.5 2C14.5 2 6.0568 2 3.946 2.56452C3.36829 2.72796 2.84394 3.04097 2.42592 3.47192C2.00789 3.90288 1.711 4.43651 1.56522 5.01893C1.17891 7.1611 0.989946 9.33418 1.0007 11.5109C0.986931 13.7039 1.17591 15.8936 1.56522 18.0519C1.72593 18.6162 2.02948 19.1296 2.44653 19.5423C2.86358 19.9551 3.38004 20.2533 3.946 20.4081C6.0568 20.9727 14.5 20.9727 14.5 20.9727C14.5 20.9727 22.9432 20.9727 25.054 20.4081C25.6317 20.2447 26.1561 19.9317 26.5741 19.5007C26.9921 19.0698 27.289 18.5361 27.4348 17.9537C27.8181 15.8277 28.0071 13.6712 27.9993 11.5109C28.0131 9.31779 27.8241 7.12814 27.4348 4.96985Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.7383 15.5259L18.7947 11.513L11.7383 7.5V15.5259Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

             
            </div>
          
          </div>
          <p className="text-xs text-gray-500 text-center  ">
            &copy; 2023. Company Salaryfy. All rights reserved.
          </p>
        
        </div>
  
   
    </div>
  );
};

export default Footer;
