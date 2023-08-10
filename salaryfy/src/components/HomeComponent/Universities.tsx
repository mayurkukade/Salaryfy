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

    <div>
      <div className="container mx-auto font-Lexend mt-8 mb-8">
        <p className="text-center text-darkGreen text-[2rem] font-semibold ">
          Students from <span className="text-yellow" >Universities</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-4 justify-center text-center mt-5.06rem max-h-[calc(100vh - 12rem)] sm:overflow-y-scroll overflow-y-hidden">
          <div
            className="w-17.6875rem h-[5rem]"
            style={{
              borderRadius: "0.8125rem",
              background:
                "linear-gradient(96deg, rgba(254, 205, 8, 0.01) 0%, rgba(0, 95, 89, 0.04) 100%)",
              boxShadow: "0px 4px 19px 0px rgba(0, 0, 0, 0.09)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              // height: "7.95969rem",
            }}
          >
            <div className="flex">
              <img className="p-2" src={harvarduniversitylogo} />

              <div className="p-2">
                <p>Hardvard</p>
                <p>University</p>
              </div>
            </div>
          </div>
          <div
            className="w-17.6875rem h-[5rem]"
            style={{
              borderRadius: "0.8125rem",
              background:
                "linear-gradient(96deg, rgba(254, 205, 8, 0.01) 0%, rgba(0, 95, 89, 0.04) 100%)",
              boxShadow: "0px 4px 19px 0px rgba(0, 0, 0, 0.09)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              // height: "7.95969rem",
            }}
          >
            <div className="flex">
              <img className="p-2" src={americanuniversitylogo} />

              <div className="p-2">
                <p>American</p>
                <p>University</p>
              </div>
            </div>
          </div>
          <div
            className="w-17.6875rem h-[5rem]"
            style={{
              borderRadius: "0.8125rem",
              background:
                "linear-gradient(96deg, rgba(254, 205, 8, 0.01) 0%, rgba(0, 95, 89, 0.04) 100%)",
              boxShadow: "0px 4px 19px 0px rgba(0, 0, 0, 0.09)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              // height: "7.95969rem",
            }}
          >
            <div className="flex">
              <img className="p-2" src={universityllogo} />

              <div className="p-2">
                <p>University</p>
                <p>Of</p>
                <p>Texas</p>
              </div>
            </div>
          </div>
          <div
            className="w-17.6875rem h-[5rem]"
            style={{
              borderRadius: "0.8125rem",
              background:
                "linear-gradient(96deg, rgba(254, 205, 8, 0.01) 0%, rgba(0, 95, 89, 0.04) 100%)",
              boxShadow: "0px 4px 19px 0px rgba(0, 0, 0, 0.09)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              // height: "7.95969rem",
            }}
          >
            <div className="flex">
              <img className="p-2" src={standforduniversity} />

              <div className="p-2">
                <p>Standford</p>
                <p>University</p>
              </div>
            </div>
          </div>
          <div
            className="w-17.6875rem h-[5rem]"
            style={{
              borderRadius: "0.8125rem",
              background:
                "linear-gradient(96deg, rgba(254, 205, 8, 0.01) 0%, rgba(0, 95, 89, 0.04) 100%)",
              boxShadow: "0px 4px 19px 0px rgba(0, 0, 0, 0.09)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              // height: "7.95969rem",
            }}
          >
            <div className="flex">
              <img className="p-2" src={psuniversity} />

              <div className="p-2">
                <p>Pennsylvania State</p>
                <p>University</p>
              </div>
            </div>
          </div>
          <div
            className="w-17.6875rem h-[5rem]"
            style={{
              borderRadius: "0.8125rem",
              background:
                "linear-gradient(96deg, rgba(254, 205, 8, 0.01) 0%, rgba(0, 95, 89, 0.04) 100%)",
              boxShadow: "0px 4px 19px 0px rgba(0, 0, 0, 0.09)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              // height: "7.95969rem",
            }}
          >
            <div className="flex">
              <img className="p-2" src={psuniversity} />

              <div className="p-2">
                <p>Pennsylvania State</p>
                <p>University</p>
              </div>
            </div>
          </div>
          <div
            className="w-17.6875rem h-[5rem]"
            style={{
              borderRadius: "0.8125rem",
              background:
                "linear-gradient(96deg, rgba(254, 205, 8, 0.01) 0%, rgba(0, 95, 89, 0.04) 100%)",
              boxShadow: "0px 4px 19px 0px rgba(0, 0, 0, 0.09)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              // height: "7.95969rem",
            }}
          >
            <div className="flex">
              <img className="p-2" src={harvarduniversitylogo} />

              <div className="p-2">
                <p>Hardvard</p>
                <p>University</p>
              </div>
            </div>
          </div>
          <div
            className="w-17.6875rem h-[5rem]"
            style={{
              borderRadius: "0.8125rem",
              background:
                "linear-gradient(96deg, rgba(254, 205, 8, 0.01) 0%, rgba(0, 95, 89, 0.04) 100%)",
              boxShadow: "0px 4px 19px 0px rgba(0, 0, 0, 0.09)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              // height: "7.95969rem",
            }}
          >
            <div className="flex">
              <img className="p-2" src={standforduniversity} />

              <div className="p-2">
                <p>Standford</p>
                <p>University</p>
              </div>
            </div>
          </div>
          <div
            className="w-17.6875rem h-[5rem]"
            style={{
              borderRadius: "0.8125rem",
              background:
                "linear-gradient(96deg, rgba(254, 205, 8, 0.01) 0%, rgba(0, 95, 89, 0.04) 100%)",
              boxShadow: "0px 4px 19px 0px rgba(0, 0, 0, 0.09)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              // height: "7.95969rem",
            }}
          >
            <div className="flex">
              <img className="p-2" src={americanuniversitylogo} />

              <div className="p-2">
                <p>American</p>
                <p>University</p>
              </div>
            </div>
          </div>
          <div
            className="w-17.6875rem h-[5rem]"
            style={{
              borderRadius: "0.8125rem",
              background:
                "linear-gradient(96deg, rgba(254, 205, 8, 0.01) 0%, rgba(0, 95, 89, 0.04) 100%)",
              boxShadow: "0px 4px 19px 0px rgba(0, 0, 0, 0.09)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              // height: "7.95969rem",
            }}
          >
            <div className="flex">
              <img className="p-2" src={harvarduniversitylogo} />

              <div className="p-2">
                <p>Hardvard</p>
                <p>University</p>
              </div>
            </div>
          </div>
          <div
            className="w-17.6875rem h-[5rem]"
            style={{
              borderRadius: "0.8125rem",
              background:
                "linear-gradient(96deg, rgba(254, 205, 8, 0.01) 0%, rgba(0, 95, 89, 0.04) 100%)",
              boxShadow: "0px 4px 19px 0px rgba(0, 0, 0, 0.09)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              // height: "7.95969rem",
            }}
          >
            <div className="flex">
              <img className="p-2" src={americanuniversitylogo} />

              <div className="p-2">
                <p>American</p>
                <p>University</p>
              </div>
            </div>
          </div>
          <div
            className="w-17.6875rem h-[5rem]"
            style={{
              borderRadius: "0.8125rem",
              background:
                "linear-gradient(96deg, rgba(254, 205, 8, 0.01) 0%, rgba(0, 95, 89, 0.04) 100%)",
              boxShadow: "0px 4px 19px 0px rgba(0, 0, 0, 0.09)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              // height: "7.95969rem",
            }}
          >
            <div className="flex">
              <img className="p-2" src={psuniversity} />

              <div className="p-2">
                <p>Pennsylvania State</p>
                <p>University</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Universities;
