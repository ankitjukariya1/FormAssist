import Button from "../common/Button";
import { FcSearch } from "react-icons/fc";

const SearchBarHome = ()=>{
   return<div className="search-bar bg-white rounded-[15px] min-w-75 w-[60%] max-w-140 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(48,108,236,0.15)] px-4 py-3 max-h-max transition-all duration-300 border border-gray-100">
        <form action="" className="flex items-center justify-between gap-2" >
          <input 
            type="text" 
            className="flex-1 text-[12px] sm:text-[15px] text-center bg-transparent placeholder-gray-400 font-medium focus:outline-none transition-colors duration-200 autofill:shadow-[inset_0_0_0px_1000px_white] autofill:text-gray-900" 
            placeholder="Search form name...." 
          />
          {/* Important switching button name on screen size */}
          <Button name={`Search`} className="py-2.5 hidden sm:flex px-6 hover:scale-105 transition-transform duration-200" ></Button>
          <Button name={<FcSearch />} className="py-2.5 sm:hidden px-4 hover:scale-110 transition-transform duration-200" ></Button>
        </form>
      </div>
}

export default SearchBarHome