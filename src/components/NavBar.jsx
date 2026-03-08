import { NavLink,Link } from "react-router-dom";


const NavBar = ()=>{
  const navItem = [{
    title:'Home',
    link: '/',
  } ,
  {
    title:'How It Works',
    link: '/how-it-works',
  },
  {
    title:'Services',
    link: '/services',
  },
  {
    title:'Contact',
    link: '/contact',
  }  
];

  return (
    <div className="navContainer bg-[#1E3A5F] h-16 flex justify-between">
      <div className="logo flex text-amber-50 mx-10 my-3 h-full hover:text-shadow-white hover:cursor-pointer hover:scale-105">
        <span className="text-2xl font-bold ">Form</span>
        <span className="text-2xl font-bold text-blue-200 ">
          Assist
        </span>

      </div>

      <div className="nav-item  flex my-4.5 ">
        
          {navItem.map((item)=>{
           return <NavLink 
           to={item.link} 
           key={item.title}
           className= {({isActive})=>{
             return `mx-5 hover:text-shadow-white 
             hover:scale-105 text-white  ${isActive?'border-b':''}`
            }}  
           > {item.title}
           </NavLink> 
          })}
      </div>
       <div className="login mx-10 my-4  bg-[#2563EB] w-16 h-8 flex items-center justify-center rounded text-white hover:scale-105">
        <Link to='login'>Login</Link>
       </div>
    </div>
  )
}

export default NavBar