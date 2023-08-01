
import PlacementPageComponent from "../components/PlacementPageComponent/PlacementPage";
import JobCard from "../components/PlacementPageComponent/JobCard";

const PlacementDrivePage = () => {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-10">
      <div className="col-span-2 container mx-auto   text-darkGreen ">
        <div className="shadow-xl min-h-fit p-8 ">
          <p className="text-[1rem] font-semibold m-3">Location</p>
          <PlacementPageComponent />
          <p className="text-[1rem] font-semibold m-3">Job Type</p>
          <PlacementPageComponent />
          <p className="text-[1rem] font-semibold m-3">Company</p>
          <PlacementPageComponent />
        </div>
      </div>
      <div className=" col-span-4 p-3 w-auto  ">
        <p className="text-[1.2rem] font-semibold text-darkGreen mb-2">
          Search
        </p>
        <div className="flex w-full ">
          <input
            placeholder="Enter Keyword"
            className="w-full border rounded-md h-10 border-darkGreen font-semibold"
          />
          <select className="bg-darkGreen text-white ml-3 rounded-lg text-center p-2">
            <option>Sort</option>
            <option>Job Type</option>
            <option>Company</option>
          </select>
        </div>
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
};

export default PlacementDrivePage;
//
