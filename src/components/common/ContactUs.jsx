import { useState } from "react"
import Button from "./Button"

const ContactUs = () => {
  // Manage contact form stage
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    formName: ""

  })
  // Error  for phone no. field in contact section
  const [error, setError] = useState(false)

  // Controlled component form handle on change to set value 
  const handleOnchange = (e) => {
    const { name, value } = e.target
    if (name === "phoneNumber" && !Number(value) && value != "" || value === " ") {
      setError(true);

    }
    else {
      setError(false);
      setFormData({
        ...formData,
        [name]: value
      })
    }


  }

  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    setFormData({
      name: "",
      phoneNumber: "",
      formName: ""
    });
  }
  return (<div className="contactUs m-4 bg-[#1E3A5F] shadow-2xl flex flex-col items-center text-white rounded-lg">
    <h1 className="font-medium text-[130%] pt-2">Request a Callback</h1>
    <p className="text-[90%]  font-light px-2">Need help? Our team will Assist You.</p>

    {/* Contact Form */}
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-4 p-6 gap-1 " action="" method="post" >
      {/*name  */}
      <input onChange={handleOnchange} className="border border-gray-300 focus:outline-none bg-white rounded-md text-black p-2 hover:scale-102 " type="text" name="name" value={formData.name} placeholder="Your Name" />
      {/* Phone no. */}
      <input onChange={handleOnchange} className={`  bg-white rounded-md text-black p-2 focus:outline-none  hover:scale-102 ${error ? "border-red-500 focus:ring-2 focus:outline-2 outline-red-600  bg-red-500" : " border-gray-300  "} `} name="phoneNumber" value={formData.phoneNumber} type="tel" pattern="[0-9]{10}" placeholder="Phone Number" />
      {/* Form name */}
      <input onChange={handleOnchange} className="border border-gray-300 focus:outline-none bg-white rounded-md text-black p-2 hover:scale-102 " name="formName" type="text" value={formData.formName} placeholder="Enter Form Name" />

      <Button className="p-2 mt-2 sm:mt-0" name="Request Callback"></Button>
    </form>
  </div>)
}

export default ContactUs