import { Link } from "react-router-dom";


const Ready = () => {
    return (
        <div className=" bg-[#3871E0] h-96 py-14">
            <div>
                <h1 className=" text-7xl font-bold text-center text-white  p-12  ">Ready to get started?</h1>
            </div>
            <div className=" flex  justify-center gap-6">
               <Link to='/blanketsTowels'> <button className=" btn  bg-[#3871E0] h-16 w-[240px]  text-xl">Browse Products</button></Link>
                <Link to='/getFreeMockups'><button className=" btn text-xl  bg-white h-16 w-[240px] ">Receive Free Mockups</button></Link>
            </div>
        </div>
    );
};

export default Ready;