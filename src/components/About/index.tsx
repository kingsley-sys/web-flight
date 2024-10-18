
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const About = () => {
  return (
    <div className="w-full md:px-[20px] px-8 flex md:flex-row flex-col items-center justify-between py-10 md:gap-0 gap-16 mt-8">
        <div className=" bg-no-repeat bg-cover relative plane-mask"      
        >

        </div>
            <div className="flex flex-col md:w-[45%] w-full md:px-0 px-8 my-[-35%]">
                <span className="text-[25px] text-blue-600 font-semibold">About Us</span>
                <span className="text-[30px] font-medium text-gray-700 mt-1">We Are Here To Bring You All The 
                    <br/>Comfort And Pleasure
                </span>
                <p className="text-gray-600 mt-4 max-w-[400px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="flex flex-col gap-3 mt-5">
                    <div className="flex items-center gap-3">
                        <IoMdCheckmarkCircleOutline size={22} color="green" />
                        <span className="text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                    <IoMdCheckmarkCircleOutline size={22} color="green" />
                        <span className="text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                    <IoMdCheckmarkCircleOutline size={22} color="green" />
                        <span className="text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </span>
                    </div>
                </div>
                <button className="bg-blue-400 px-6 py-3 text-white font-semibold rounded-full w-[200px] mt-12 shadow-md">Discover More</button>
            </div>
    </div>
  );
}

export default About