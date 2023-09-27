
import Navbar from "../NavComponent/Navbar"
import { Outlet } from "react-router"
const MainLoginLayout = () => {
  return (
    <>
    <div className="min-h-screen flex flex-col">
       {/* Navbar at the top */}
       <header >
         {/* Navbar content */}
         <Navbar/>
       </header>
 
       {/* Main content */}
       <main className="flex-grow ">
         {/* Your page content goes here */}
        <Outlet/>
       </main>
 
      </div>
     </>
  )
}

export default MainLoginLayout
