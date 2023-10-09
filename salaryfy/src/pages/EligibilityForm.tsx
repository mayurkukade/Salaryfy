
const EligibilityForm = () => {
  return (
    <div className="container mx-auto my-[100px] p-10 border-2 border-black ">
      <div className="w-[100%] h-[5.375rem] rounded-[0.8125rem] border border-solid border-yellow">
        <div className=" text-darkGreen leading-9 ml-10 flex justify-between ">
          <h2 className="text-[2rem] w-[9.5rem] h-[3.1rem]  font-bold">
            Fresher
          </h2>
          <div className="flex gap-2 justify-center items-center px-7 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_14_8195)">
                <rect x="8" y="5" width="9" height="13" fill="#FECD08" />
                <path
                  d="M12 0C5.3828 0 0 5.38331 0 12C0 18.6167 5.3828 24 12 24C18.6172 24 24 18.6167 24 12C24 5.38331 18.6172 0 12 0ZM16.7705 12.4204L9.77053 16.9204C9.68992 16.9725 9.59597 17.0001 9.50002 17C9.41798 17 9.33497 16.9795 9.26077 16.939C9.18182 16.896 9.11593 16.8326 9.07003 16.7553C9.02414 16.6781 8.99994 16.5899 9 16.5V7.5C9 7.31691 9.09961 7.14891 9.26077 7.06102C9.41897 6.97411 9.6172 6.97945 9.77053 7.07958L16.7705 11.5796C16.9131 11.6714 17 11.8301 17 12C17 12.1699 16.9131 12.3286 16.7705 12.4204Z"
                  fill="#005F59"
                />
              </g>
              <defs>
                <clipPath id="clip0_14_8195">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>How it Works?</p>
          </div>
        </div>
        <p className="text-darkGreen text-[1rem] font-normal px-10">
          It will only take your 30sec for profile creation
        </p>
      </div>

      {/* Main Page */}
      <div
        className="w-[100%]  rounded-[0.8125rem] mt-10"
        style={{ boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.08)" }}
      >
        {/* Table  */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border-2 border-gray-300">
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2"></th>
              <th className="border border-gray-300 px-4 py-2">
                Placement Drive
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Instant Placement
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Skill Placement
              </th>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Recommended for
              </td>
              <td className="border border-gray-300 px-4 py-2">
                10th/12th pass-out student
              </td>
              <td className="border border-gray-300 px-4 py-2">
                10th/12th pass-out student or UG/PG completed student{" "}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                10th/12th pass-out student or UG/PG completed student{" "}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Get a new job
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Salary</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EligibilityForm;
