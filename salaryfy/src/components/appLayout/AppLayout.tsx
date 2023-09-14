import { Outlet } from "react-router-dom"
import Navbar from "../NavComponent/Navbar"



const AppLayout:React.FC = () => {

  return (
    <>
    <Navbar/>
    <Outlet/>
      
    </>
  )
}

export default AppLayout
