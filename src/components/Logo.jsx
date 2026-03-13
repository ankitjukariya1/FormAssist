const Logo =({className})=>{
  return (
    <div className={`logo flex text-amber-50 transition-all duration-200 hover:text-shadow-white hover:cursor-pointer hover:scale-105 ${className}`}>
          <span className="text-2xl font-bold">Form</span>
          <span className="text-2xl font-bold text-blue-200">Assist</span>
        </div>
  )
}

export default Logo