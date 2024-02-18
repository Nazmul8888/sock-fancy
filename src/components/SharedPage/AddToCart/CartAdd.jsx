import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";



const CartAdd = () => {
    const [cart, setCart] = useState();

    useEffect(()=>{
        fetch('cart.json')
        .then(res=>res.json())
        .then(data=>setCart(data))

    },[])
    return (
        <div className=" max-w-screen-xl mx-auto"> 
        <h1 className="  text-3xl font-bold text-black ml-10">Choose a giftbox</h1>
        <h6 className=" ml-10">1 pair of socks per gift box. <br />
        Socks ordered with gift boxes will arrive in the gift box. <br />
        The gift box has no seal.</h6>


           <div className=" grid  grid-cols-3 p-8 py-10">
            {
               cart?.map(item=><ReviewCard key={cart._id} item={item}></ReviewCard>)
            }
            </div> 
        </div>
    );
};

export default CartAdd;