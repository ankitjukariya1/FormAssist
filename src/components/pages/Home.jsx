import ServiceCard from "../common/Services";
import SearchBarHome from "../Home/SearchBarHome";
import PopularForm from "../Home/PopularForm";
import ContactUs from "../common/ContactUs";

const Home = () => {
 
 

  
  return (

    <div className="home grid grid-cols-1  gap-4 justify-items-center min-h-screen bg-[#EEF1F6] pb-20 ">
      <div className="intro-content mt-15 mb-10 ">
        <div className="intro-heading text-[20px] sm:text-3xl  font-medium  text-4xl">
          <h6>Need assistance filling out a form?</h6>
        </div>
        <div className="intro flex justify-center text-[12px] sm:text-[15px] lg:text-[16px]">
          <p>Search any form and we'll show the required documents. <br />
            <span className="p-2">Upload documents or request a callback for assistance.</span>
          </p>
        </div>
      </div>
      
      <SearchBarHome></SearchBarHome>
      <PopularForm/>
      <div className="font-medium text-[18px]" ><p>Or</p></div>
     <ContactUs />
      <ServiceCard></ServiceCard>
    </div>
  )
}
export default Home;