import { useEffect, useState } from "react";
import DrinkwareCard from "./DrinkwareCard";


const Drinkware = () => {


    const [drink, setDrink] = useState();

    useEffect(()=>{
        fetch('home.json')

        .then(res=>res.json())
        .then(data=>setDrink(data))


    },[])
    return (
        <div className=" max-w-screen-xl mx-auto py-14">
             <h1 className=" text-4xl font-bold text-center ">Browse our premium <br />custom products</h1>
            <br />
            <h5 className=" text-center font-[18px] text-[#3f51b5]">From socks to blankets, we've got it all. <br />Check out our wide variety of product offerings below.</h5>

            <div className=" grid grid-cols-3 gap-5 ">
                {
                    drink?.map(item=><DrinkwareCard key={drink._id} item={item}></DrinkwareCard>)
                }
            </div>
        </div>
    );
};

export default Drinkware;