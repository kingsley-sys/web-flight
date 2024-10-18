
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';


const Layout = () => {
  return (
    <>
     <Navbar/>
     <Outlet/> {/* //Renders the child route's element, if there is one. */}
     <Footer/>
    </>
   
  )
}

export default Layout