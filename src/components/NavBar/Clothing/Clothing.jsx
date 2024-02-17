import { useEffect, useState } from "react";
import ClothingCard from "./ClothingCard";


const Clothing = () => {

    const [clothing, setClothing] = useState();

    useEffect(()=>{
        fetch('clothing.json')
        .then(res=>res.json())
        .then(data=>setClothing(data))
    },[])
    return (
        <div className=" max-w-screen-xl mx-auto  py-14">
             <h1 className=" text-4xl font-bold text-center ">Browse our premium <br />custom products</h1>
            <br />
            <h5 className=" text-center font-[18px] text-[#3f51b5]">From socks to blankets, we've got it all. <br />Check out our wide variety of product offerings below.</h5>
            
            <div className=" grid grid-cols-3 gap-5">
                {
                    clothing?.map(item=><ClothingCard key={clothing._id} item={item}></ClothingCard>)
                }
            </div>
        </div>
    );
};

export default Clothing;