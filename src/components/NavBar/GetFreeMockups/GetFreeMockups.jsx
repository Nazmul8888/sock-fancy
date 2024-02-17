

const GetFreeMockups = () => {



    const subFrom = e =>{
        e.preventDefault()
        const first = e.target.first.value;
        const last = e.target.last.value;
        const email = e.target.email.value;
        const company = e.target.company.value;
        const date = e.target.date.value;
        const number = e.target.number.value;
        const photo = e.target.photo.value;

        const updateCoffee = {first,last,email,company,date,number,photo}
        console.log(updateCoffee);
    }
    return (
        <div className=" py-10 max-w-screen-xl mx-auto ">
           <div className=" flex  justify-between mr-32">
            <div>
            <h5>READY TO PLACE AN ORDER? </h5>
            <br />
            <h1 className=" text-6xl font-bold ">Let's get started.</h1>
            <br /> 
            <h4>Upload your logo, order details, and we'll handle the rest.</h4>
            </div>
            <div>
            <img src="https://i.ibb.co/Qb7Qkzq/659cb04f4e8368aaffcc110b-Sock-Fancy-Branded-Kit-p-500.png" alt="" />
            </div>
           </div>
            
            

           <div className="   marg border mt-10 mb-10  p-10  bg-sky-400 shadow-xl  m-8">
            <h1 className=" text-2xl font-sans font-bold">Submit your project details:</h1>
           <form onSubmit={subFrom} >
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        
                    </label>
                    <label className="input-group">
                        <span>First Name <span className=" text-red-600">*</span></span>
                        <input type="text" name="first" defaultValue={name} placeholder="" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        
                    </label>
                    <label className="input-group">
                        <span>Last Name <span className=" text-red-600">*</span></span>
                        <input type="text" name="last"  placeholder="" className="input input-bordered w-full" />
                    </label>
                </div>
               
            </div>
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        
                    </label>
                    <label className="input-group">
                        <span>Company Email <span className=" text-red-600">*</span></span>
                        <input type="text" name="email"   placeholder="" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        
                    </label>
                    <label className="input-group">
                        <span>Company URL</span>
                        <input type="text" name="company"  placeholder="" className="input input-bordered w-full" />
                    </label>
                </div>
                
            </div>
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        
                    </label>
                    <label className="input-group">
                        <span>Do you have an In-Hand Deadline?</span>
                        <input type="date" name="date"  placeholder="" className="input input-bordered w-full" />
                       
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        
                    </label>
                    <label className="input-group">
                        <span>Phone number</span>
                        <input type="text" name="number"  placeholder="" className="input input-bordered w-full" />
                    </label>
                </div>
                
            </div>
            <div >
                <div className="form-control w-full mb-8">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Upload file</label>
                <input name="photo" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
                </div>
                
               
            </div>
         
            <input type="submit" value="Submit" className="btn btn-block" />
            <br />
            <br />
            <p className=" text-black">By submitting this form, you confirm that you have read and agree to the Terms & Conditions.</p>
        </form>
           </div>
  </div>
        
    );
};

export default GetFreeMockups;