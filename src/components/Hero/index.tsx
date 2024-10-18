import plane from "../../assets/images/plane.png";

const Hero = () => {
  return (
    <div className="hero z-[1] w-full h-[100%] grid place-items-center bg-[#141b2b] relative">
        <div className="flex md:flex-row flex-col items-center w-full md:px-[200px] px-8 justify-between md:gap-0 gap-28">
            <div className="flex flex-col gap-3 w-full mt-28">
                <span className="text-blue-400  text-[28px] font-medium">
                    Welcome To Our Website
                </span>
                <span className="text-white font-medium md:text-[60px] text-[45px]">
                    Luxury Experience <br/> With Our Services
                </span>
                <span className="text-white leading-7 max-w-[500px] text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut. 
                </span>
                <div className="flex items-center gap-7 mt-5">
                    <button className="px-6 py-3 text-white bg-[#007bff] hover:bg-[#0067eb] focus:outline-none rounded-full">Book Flight</button>
                    <button className="px-6 py-3 text-white border-[2px] border-blue-400 rounded-full">Contact Us</button>
                </div>
            </div>
            <img className="w-[300px] md:w-[53%] right-animation h-[auto]" src={plane} alt="Flight"/>
        </div>
    </div>
  )
}

export default Hero