import { BedOutlined } from "@mui/icons-material"
import { IoEarthOutline, IoShieldCheckmarkOutline } from "react-icons/io5"


const Features = () => {

    const featuresList = [
        {
            icon: (<BedOutlined style={{ color:"#60a5fa", height: 60, width: 60 }} />),
            title: "Hotels on the house",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut. "
        },
        {
            icon: (<IoShieldCheckmarkOutline style={{ color:"#60a5fa", height: 60, width: 60 }} />),
            title: "Safe to Trust",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut. "
        },
        {
            icon: (<IoEarthOutline style={{ color:"#60a5fa", height: 60, width: 60 }} />),
            title: "Worldwide Customers",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut. "
        },
    ]
  return (
    <div className="flex w-full py-20 md:px-[200px] px-8 flex-col gap-16 justify-center items-center">
        <div className="flex flex-col w-full items-center">
            <span className="font-semibold text-blue-500">Our Features</span>
            <span className="font-semibold text-blue-700 text-3xl mt-1 text-center">Our Priceless Features</span>
            <p className="text-center mt-4 max-w-[400px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut.</p>
        </div>
        <div className="flex md:flex-row flex-col w-full items-center justify-between md:gap-0 gap-5">
            {featuresList.map((feature)=>{
                return(<div className="bg-white py-5 px-12 flex flex-col justify-center items-center text-center gap-5 rounded-[10px] transition-all duration-300 cursor-pointer hover:scale-[1.05]"
                key={feature.title}
                style={{boxShadow: "0 0 40px 5px rgb(0 0 0 /5%)"}}>
                    {feature.icon}
                    <span className="text-gray-600 font-semibold text-[21px] whitespace-nowrap">{feature.title}</span>
                    <br/>
                    {feature.description}
                </div>)
            })}
        </div>
    </div>
  )
}

export default Features