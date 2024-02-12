

const Form = () => {


    const handelClick = event=>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const quantity = form.quantity.value;
        
        console.log(name, email, phone, quantity );
    }
    

    return (
        <div>
            <div className=" ">
                <h1 className=" text-6xl font-bold text-center text-[#537E2C]  ">DROP US A LINE!</h1>
                <br />
                <p className=" text-xl text-center font-sans">We are committed to creating and delivery high-quality  products. If you want to start your socks business or take <br /> your business to the next level, reach out so we can help.</p>
            </div>
            <br />
            <div className="w-full mx-auto lg:w-[1000px] shadow-lg bg-[#537E2C]  flex group text-black">
    <div className="w-1/2 min-h-full bg-[#537E2C]  relative overflow-hidden hidden lg:block">
        <img src="https://i.ibb.co/PmwbGFk/woman-with-socks-having-pumpkin-her-feet.jpg" alt="" />
      <h1 className="text-white text-2xl absolute bottom-3 right-3 text-right">Hey! <br /> Welcome to<br /> NavigateUI</h1>
      <span className="bg-sky-800/20 w-32 h-32 -top-8 -left-8 rounded-full absolute z-20 group-hover:w-56 group-hover:h-56 duration-500"></span>
      <span className="bg-sky-800/50 w-36 h-36 -top-5 -left-5  rounded-full absolute z-10"></span>
    </div>
    <form onSubmit={handelClick} className="p-8 flex-1">
      <h1 className="text-4xl pb-4 text-white">Customize Information</h1>
      <div className="space-y-5">
        <label htmlFor="name" className="block text-white">Name</label>
        <input id="name" type="name" placeholder="name" className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#0095ff]"/>

        <label htmlFor="email" className="block text-white">Email</label>
        <input id="email" type="email" placeholder="example@example.com" className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#0095ff]"/>

        <label htmlFor="email" className="block text-white">Phone/WhatsApp *</label>
        <input id="phone" type="phone" placeholder="phone" className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#0095ff]"/>

        <label htmlFor="quantity" className="block text-white">Quantity (required - minimum is 100 pairs)</label>
        <input id="quantity" type="quantity" placeholder="" min={5} className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed invalid:border-red-700 valid:border-[#0095ff]"/>
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Upload file</label>
  <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
   
      </div>
      <div>
      <div>
        <br />
      <h1 className=" text-white">Length</h1>
        <div className=" flex gap-5 text-white">
           <input type="checkbox" name="length" value= "Ankle" id="" /> 
         <label htmlFor=""><span> Ankle</span></label>

           <input type="checkbox" name="length" value= "Ankle" id="" /> 
         <label htmlFor=""><span> Crew</span></label>

           <input type="checkbox" name="length" value= "Ankle" id="" /> 
         <label htmlFor=""><span> Knee-Hight</span></label>
         
           <input type="checkbox" name="length" value= "Ankle" id="" /> 
         <label htmlFor=""><span> No-Show</span></label>
        </div>
      <h1 className=" text-white">Size</h1>
        <div className=" flex gap-5 text-white">
           <input type="checkbox" name="length" value= "Ankle" id="" /> 
         <label htmlFor=""><span> Unisex</span></label>

           <input type="checkbox" name="length" value= "Ankle" id="" /> 
         <label htmlFor=""><span> Men</span></label>

           <input type="checkbox" name="length" value= "Ankle" id="" /> 
         <label htmlFor=""><span> Women</span></label>
         
           <input type="checkbox" name="length" value= "Ankle" id="" /> 
         <label htmlFor=""><span> Kids</span></label>
        </div>
      </div>
      </div>
      {/* button type will be submit for handling form submission*/}
      <button  className="py-2 px-5 mb-4 mt-8 overflow-hidden shadow-lg border-2 rounded-md border-dashed border-[#0095ff] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#0095ff]  z-50 btn-wide">CUSTOMIZE NOW</button>
    </form>
  </div>
  </div>
);
};

export default Form;