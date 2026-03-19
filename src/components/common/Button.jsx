const Button= ({name , className})=>{
return <button type="submit" className={`login  bg-[#306cec] rounded text-white transition-all duration-200 active:scale-95 hover:scale-105 hover:shadow-[0_0_18px_rgba(48,108,236,0.85)] ${className}`}>
          {name}
        </button>
}
export default Button