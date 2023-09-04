import harvarduniversitylogo from "../../../assets/Logos/harvarduniversity.png";
import psuniversity from "../../../assets/Logos/psuniversity.png";
import americanuniversitylogo from "../../../assets/Logos/americanuniversity.png";
import standforduniversity from "../../../assets/Logos/stanforduniversity.png";
import universityllogo from "../../../assets/Logos/texasuniversity.png";

const Universities = () => {
  return (
    // <div className="container mx-auto font-Lexend mt-[8rem] mb-[8rem] ">
    //   <p className="text-center text-darkGreen text-[3.9375rem] font-semibold ">
    //     Students from <span className="text-yellow">Universities</span>
    //   </p>

    //   <div className="grid grid-cols-4 grid-rows-3 text-darkGreen font-semibold gap-4 justify-center text-center mt-[5.06rem] ">
    //     <div
    //       style={{
    //         borderRadius: "0.8125rem",
    //         background:
    //           "linear-gradient(96deg, rgba(254, 205, 8, 0.01) 0%, rgba(0, 95, 89, 0.04) 100%)",
    //         boxShadow: "0px 4px 19px 0px rgba(0, 0, 0, 0.09)",
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",

    //         height: "7.95969rem",
    //       }}
    //     >
    //       <div className="flex">
    //         <img className="p-2" src={harvarduniversitylogo} />

    //         <div className="p-2">
    //           <p>Hardvard</p>
    //           <p>University</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       style={{
    //         borderRadius: "0.8125rem",
    //         background:
    //           "linear-gradient(96deg, rgba(254, 205, 8, 0.01) 0%, rgba(0, 95, 89, 0.04) 100%)",
    //         boxShadow: "0px 4px 19px 0px rgba(0, 0, 0, 0.09)",
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",

    //         height: "7.95969rem",
    //       }}
    //     >
    //       <div className="flex">
    //         <img className="p-2" src={psuniversity} />

    //         <div className="p-2">
    //           <p>Pennsylvania State</p>
    //           <p>University</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       style={{
    //         borderRadius: "0.8125rem",
    //         background:
    //           "linear-gradient(96deg, rgba(254, 205, 8, 0.01) 0%, rgba(0, 95, 89, 0.04) 100%)",
    //         boxShadow: "0px 4px 19px 0px rgba(0, 0, 0, 0.09)",
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",

    //         height: "7.95969rem",
    //       }}
    //     >
    //       <div className="flex">
    //         <img className="p-2" src={psuniversity} />

    //         <div className="p-2">
    //         <p>Pennsylvania State</p>
    //           <p>University</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       style={{
    //         borderRadius: "0.8125rem",
    //         background:
    //           "linear-gradient(96deg, rgba(254, 205, 8, 0.01) 0%, rgba(0, 95, 89, 0.04) 100%)",
    //         boxShadow: "0px 4px 19px 0px rgba(0, 0, 0, 0.09)",
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",

    //         height: "7.95969rem",
    //       }}
    //     >
    //       <div className="flex">
    //         <img className="p-2" src={psuniversity} />

    //         <div className="p-2">
    //         <p>Pennsylvania State</p>
    //           <p>University</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="row-start-2">
    //       <div
    //         className="flex"
    //         style={{
    //           borderRadius: "0.8125rem",
    //           background:
    //             "linear-gradient(96deg, rgba(254, 205, 8, 0.01) 0%, rgba(0, 95, 89, 0.04) 100%)",
    //           boxShadow: "0px 4px 19px 0px rgba(0, 0, 0, 0.09)",
    //           display: "flex",
    //           alignItems: "center",
    //           justifyContent: "center",

    //           height: "7.95969rem",
    //         }}
    //       >
    //         <img className="p-2" src={americanuniversitylogo} />

    //         <div className="p-2">
    //           <p>American</p>
    //           <p>University</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       className="row-start-2"
    //       style={{
    //         borderRadius: "0.8125rem",
    //         background:
    //           "linear-gradient(96deg, rgba(254, 205, 8, 0.01) 0%, rgba(0, 95, 89, 0.04) 100%)",
    //         boxShadow: "0px 4px 19px 0px rgba(0, 0, 0, 0.09)",
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",

    //         height: "7.95969rem",
    //       }}
    //     >
    //       <img className="p-2" src={standforduniversity} />

    //       <div className="p-2">
    //         <p>Standford</p>
    //         <p>University</p>
    //       </div>
    //     </div>
    //     <div
    //       className="row-start-2"
    //       style={{
    //         borderRadius: "0.8125rem",
    //         background:
    //           "linear-gradient(96deg, rgba(254, 205, 8, 0.01) 0%, rgba(0, 95, 89, 0.04) 100%)",
    //         boxShadow: "0px 4px 19px 0px rgba(0, 0, 0, 0.09)",
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",

    //         height: "7.95969rem",
    //       }}
    //     >
    //       <img className="p-2" src={standforduniversity} />

    //       <div className="p-2">
    //       <p>Standford</p>
    //         <p>University</p>
    //       </div>
    //     </div>
    //     <div
    //       className="row-start-2"
    //       style={{
    //         borderRadius: "0.8125rem",
    //         background:
    //           "linear-gradient(96deg, rgba(254, 205, 8, 0.01) 0%, rgba(0, 95, 89, 0.04) 100%)",
    //         boxShadow: "0px 4px 19px 0px rgba(0, 0, 0, 0.09)",
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",

    //         height: "7.95969rem",
    //       }}
    //     >
    //       <img className="p-2" src={standforduniversity} />

    //       <div className="p-2">
    //         <p>Standford</p>
    //         <p>University</p>
    //       </div>
    //     </div>
    //     <div
    //       className="row-start-3"
    //       style={{
    //         borderRadius: "0.8125rem",
    //         background:
    //           "linear-gradient(96deg, rgba(254, 205, 8, 0.01) 0%, rgba(0, 95, 89, 0.04) 100%)",
    //         boxShadow: "0px 4px 19px 0px rgba(0, 0, 0, 0.09)",
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",

    //         height: "7.95969rem",
    //       }}
    //     >
    //       <img className="p-2" src={universityllogo} />

    //       <div className="p-2 leading-5">
    //         <p>University</p>
    //         <p>Of</p>
    //         <p>Texas</p>
    //       </div>
    //     </div>
    //     <div
    //       className="row-start-3"
    //       style={{
    //         borderRadius: "0.8125rem",
    //         background:
    //           "linear-gradient(96deg, rgba(254, 205, 8, 0.01) 0%, rgba(0, 95, 89, 0.04) 100%)",
    //         boxShadow: "0px 4px 19px 0px rgba(0, 0, 0, 0.09)",
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",

    //         height: "7.95969rem",
    //       }}
    //     >
    //       <img className="p-2" src={harvarduniversitylogo} />

    //       <div className="p-2">
    //         <p>Hardvard</p>
    //         <p>University</p>
    //       </div>
    //     </div>
    //     <div
    //       className="row-start-3"
    //       style={{
    //         borderRadius: "0.8125rem",
    //         background:
    //           "linear-gradient(96deg, rgba(254, 205, 8, 0.01) 0%, rgba(0, 95, 89, 0.04) 100%)",
    //         boxShadow: "0px 4px 19px 0px rgba(0, 0, 0, 0.09)",
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",

    //         height: "7.95969rem",
    //       }}
    //     >
    //       <img className="p-2" src={harvarduniversitylogo} />

    //       <div className="p-2">
    //         <p>Hardvard</p>
    //         <p>University</p>
    //       </div>
    //     </div>
    //     <div
    //       className="row-start-3"
    //       style={{
    //         borderRadius: "0.8125rem",
    //         background:
    //           "linear-gradient(96deg, rgba(254, 205, 8, 0.01) 0%, rgba(0, 95, 89, 0.04) 100%)",
    //         boxShadow: "0px 4px 19px 0px rgba(0, 0, 0, 0.09)",
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",

    //         height: "7.95969rem",
    //       }}
    //     >
    //       <img className="p-2" src={harvarduniversitylogo} />

    //       <div className="p-2">
    //         <p>Hardvard</p>
    //         <p>University</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="container mx-auto font-Lexend my-[6rem]  h-[150vh]">
      <p className="text-center text-darkGreen text-[2.5rem] md:text-[3.9375rem] font-semibold  mb-8">
        Students from <span className="text-yellow">Universities</span>
      </p>
      <div className="p-[1em] md:app-scrollbar md:h-[50em] lg:app-scrollbar lg:h-[50em] overflow-[auto] ">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 grid-rows-auto md:grid-rows-3 text-darkGreen font-semibold gap-4 justify-center text-center md:mt-6">
          {/* Your logo divs */}
          <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full h-[7.95969rem] flex flex-col items-center justify-center">
            <img
              className="p-2"
              src={harvarduniversitylogo}
              alt="Harvard Logo"
            />
            <div className="p-2 text-sm md:text-base">
              <p>Harvard</p>
              <p>University</p>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full h-[7.95969rem] flex flex-col items-center justify-center">
            <img className="p-2" src={psuniversity} alt="Harvard Logo" />
            <div className="p-2 text-sm md:text-base">
              <p>Pennsylvania State</p>
              {/* <p>State</p> */}
              <p>University</p>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full h-[7.95969rem] flex flex-col items-center justify-center">
            <img className="p-2" src={psuniversity} alt="Harvard Logo" />
            <div className="p-2 text-sm md:text-base">
              <p>Pennsylvania State</p>
              {/* <p>State</p> */}
              <p>University</p>
            </div>
          </div>
          <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full h-[7.95969rem] flex flex-col items-center justify-center">
            <img className="p-2" src={psuniversity} alt="Harvard Logo" />
            <div className="p-2 text-sm md:text-base">
              <p>Pennsylvania State</p>
              {/* <p>State</p> */}
              <p>University</p>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full h-[7.95969rem] flex flex-col items-center justify-center">
            <img
              className="p-2"
              src={americanuniversitylogo}
              alt="Harvard Logo"
            />
            <div className="p-2 text-sm md:text-base">
              <p>American</p>
              {/* <p>State</p> */}
              <p>University</p>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full h-[7.95969rem] flex flex-col items-center justify-center">
            <img className="p-2" src={standforduniversity} alt="Harvard Logo" />
            <div className="p-2 text-sm md:text-base">
              <p>Stanford</p>
              {/* <p>State</p> */}
              <p>University</p>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full h-[7.95969rem] flex flex-col items-center justify-center">
            <img className="p-2" src={standforduniversity} alt="Harvard Logo" />
            <div className="p-2 text-sm md:text-base">
              <p>Stanford</p>
              {/* <p>State</p> */}
              <p>University</p>
            </div>
          </div>
          <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full h-[7.95969rem] flex flex-col items-center justify-center">
            <img className="p-2" src={standforduniversity} alt="Harvard Logo" />
            <div className="p-2 text-sm md:text-base">
              <p>Stanford</p>
              {/* <p>State</p> */}
              <p>University</p>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full h-[7.95969rem] flex flex-col items-center justify-center">
            <img className="p-2" src={universityllogo} alt="Harvard Logo" />
            <div className="p-2 text-sm md:text-base">
              <p>University of</p>
              {/* <p>State</p> */}
              <p>Texas</p>
            </div>
          </div>
          <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full h-[7.95969rem] flex flex-col items-center justify-center">
            <img
              className="p-2"
              src={harvarduniversitylogo}
              alt="Harvard Logo"
            />
            <div className="p-2 text-sm md:text-base">
              <p>Harvard</p>
              <p>University</p>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full h-[7.95969rem] flex flex-col items-center justify-center">
            <img
              className="p-2"
              src={harvarduniversitylogo}
              alt="Harvard Logo"
            />
            <div className="p-2 text-sm md:text-base">
              <p>Harvard</p>
              <p>University</p>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full h-[7.95969rem] flex flex-col items-center justify-center">
            <img
              className="p-2"
              src={harvarduniversitylogo}
              alt="Harvard Logo"
            />
            <div className="p-2 text-sm md:text-base">
              <p>Harvard</p>
              <p>University</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Universities;
