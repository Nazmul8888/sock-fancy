import { useEffect, useState } from "react";
import CustomCard from "./CustomCard";


const Custom = () => {

    const [customCard, setCustomCard] = useState();

    useEffect(()=>{

        fetch('custom.json')
        .then(res=>res.json())
        .then(data=>setCustomCard(data))

    },[])
    return (
        <div className=" py-10 max-w-screen-xl mx-auto">

            <h1 className=" text-4xl font-bold text-center ">Browse our premium <br />custom products</h1>
            <br />
            <h5 className=" text-center font-[18px] text-[#3f51b5]">From socks to blankets, we've got it all. <br />Check out our wide variety of product offerings below.</h5>
            <div className=" grid grid-cols-3 gap-5 ">
                {
                    customCard?.map(item=><CustomCard key={customCard._id} item={item}></CustomCard>)
                }
            </div>
            {/*  */}
        </div>
    );
};

export default Custom;