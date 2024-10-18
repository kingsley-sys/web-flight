
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
    const Navlinks = [
        {title: "Home", path: "/", active: true},
        {title: "How To", path: "/", active: false},
        {title: "Service", path: "/", active: false},
        {title: "Blog", path: "/", active: false},
        {title: "Contact", path: "/", active: false},
        {title: "Newspaper", path: "/", active: false},
        {title: "About", path: "/", active: false},
    ]
  return (
    <div className='z-[2] w-full my-auto mx-0 h-16 md:px-[200px] px-8 py-10 flex items-center justify-between absolute top-[20px]'>
        <span className='text-white text-[28px] font-semibold'>Kingsley.</span>
        <div className='md:flex hidden items-center gap-7'>
            {Navlinks.map(function(navlink) {
                return (
                    <Link to={navlink.path} key={navlink.title}>
                        <span className={`font-medium ${navlink.active ? "text-blue-400" : "text-white"}`}>
                            {navlink.title}
                        </span>
                    </Link>
                )
            })}
            <button className='bg-blue-400 hover:bg-gray-700 hover:text-white text-gray-900 px-6 py-3 rounded-full font-semibold'>
                Book Now
            </button>
        </div>
        <div className="cursor-pointer block md:hidden">
           <MenuIcon style={{ color: '#fff' }}/>
        </div>
    </div>
  )
}

export default Navbar