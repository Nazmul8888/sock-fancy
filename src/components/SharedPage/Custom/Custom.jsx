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
        <div className=" py-10">

            <h1 className=" text-4xl font-bold text-center ">MORE CUSTOM STYLE OPTIONAL</h1>
            <div className=" grid grid-cols-4 gap-5 ">
                {
                    customCard?.map(item=><CustomCard key={customCard._id} item={item}></CustomCard>)
                }
            </div>
            {/*  */}
        </div>
    );
};

export default Custom;