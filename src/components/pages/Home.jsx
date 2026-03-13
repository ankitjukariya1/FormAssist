import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../ServiceCard";
import Button from "../Button";
import { FcSearch } from "react-icons/fc";
//dummy popular form data after finishing backend we will get it from backend
  const data = [{    
     id: 1,
     name: 'Pan Card',
     path: '/pan'
  },
  {    
     id: 2,
     name: 'Driving License',
     path: '/DL'
  },
  {    
     id: 3,
     name: 'UPSC CSE',
     path: '/upsc'
  }
]
const Home = ()=>{
  const [popularForm , setPopularForm]=useState([]);
  
     useEffect(()=>{
        setPopularForm(data);
     },[])
  
  
return (

  <div className="grid grid-cols-1  gap-4 justify-items-center min-h-screen bg-[#EEF1F6] pb-20 ">
   <div className="intro-content mt-15 mb-10 ">
      <div className="intro-heading text-[20px] sm:text-3xl  font-medium  text-4xl">
       <h6>Need assistance filling out a form?</h6>
    </div>
    <div className="intro flex justify-center text-[12px] sm:text-[15px] lg:text-[16px]">
        <p>Search any form and we'll show the required documents. <br /> 
        <span className=" p-2">Upload documents or request a callback for assistance.</span>
        </p>
    </div>
   </div>
  <div className="search-bar  bg-white rounded-[15px]  min-w-75 w-[60%] max-w-140 shadow-md px-3 py-3 max-h-max">
   <form action="" className="flex justify-center " method="post"> 
     <input type="text"  className="w-[90%] text-[12px] sm:text-[15px] text-center border border-gray-300  rounded " placeholder="Search form name...." />
     {/* Important switching button name on screen size */}
     <Button name={`Search`} className="py-3 hidden sm:flex px-6 hover:scale-101" ></Button>
     <Button name={<FcSearch />} className="py-3 sm:hidden px-6 hover:scale-101" ></Button>
     </form>
   </div>
   <div className="popular-form text-[12px] sm:text-[14px]">
    <span className="font-medium">Popular Forms:</span> {popularForm.map((formName,index)=><Link key={formName.id} to={formName.path} >{formName.name} {(index<data.length-1)&&'| '}</Link>)}
  </div>
  <div className="font-medium text-[18px]" ><p>Or</p></div>
  <div className="contactUs m-4 bg-[#1E3A5F] shadow-2xl flex flex-col items-center text-white rounded-lg">
     <h1 className="font-medium text-[130%] pt-2">Request a Callback</h1>
     <p className="text-[90%]  font-light px-2">Need help? Our team will Assist You.</p>

     {/* Contact Form */}
    <form className="grid grid-cols-1 sm:grid-cols-4 p-6 gap-1 " action="" method="post" >
      <input className="border border-gray-300 bg-white rounded-md text-black p-2 hover:scale-101 "  type="text" name="name" placeholder="Your Name" />
       <input className="border border-gray-300 bg-white rounded-md text-black p-2 hover:scale-101"  type="text" placeholder="Phone Number" />
      <input className="border border-gray-300 bg-white rounded-md text-black p-2 hover:scale-101 "  type="text" placeholder="Enter Form Name" />

      <Button className="p-2 mt-2 sm:mt-0" name="Request Callback"></Button>
    </form>
  </div>
    <ServiceCard></ServiceCard>
  </div>
)
}
export default Home;