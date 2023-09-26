import { Outlet} from "react-router-dom"
import Navbar from "../NavComponent/Navbar"
import Footer from "../FooteComponent/Footer"



const AppLayout:React.FC = () => {

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

      {/* Footer in the last outlet in the middle */}
      <footer >
        {/* Footer content */}
       <Footer/>
      </footer>
      </div>
    </>
  )
}

export default AppLayout
