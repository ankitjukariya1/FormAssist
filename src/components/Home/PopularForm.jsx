import { useState , useEffect  } from "react";
import { Link } from "react-router-dom";

const PopularForm = ()=>{
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
  //  To handle popular form state
   const [popularForm, setPopularForm] = useState([]);
  useEffect(() => {
    setPopularForm(data);
  }, [])
  return (
    <div className="popular-form text-[12px] sm:text-[14px]">
        <span className="font-medium">Popular Forms:</span> {popularForm.map((formName, index) => <Link key={formName.id} to={formName.path} >{formName.name} {(index < data.length - 1) && '| '}</Link>)}
      </div>
  )
}

export default PopularForm