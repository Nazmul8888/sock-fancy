import { useEffect, useState } from "react";
import ClientReviewCard from "./ClientReviewCard";


const ClientReview = () => {

    const [review,reviewCard] = useState();

    useEffect(()=>{

        fetch('card.json')
        .then(res=>res.json())
        .then(data=>reviewCard(data))
    },[])
    return (
        <div className=" max-w-screen-xl mx-auto  py-14">
            <h1 className=" text-5xl font-bold text-center text-black">What our clients say</h1>
            <br />
            <h6 className=" text-center font-sans text-xl">Join the over 5,000 companies, from small business to enterprise <br /> giants, using Sock Fancy to boost their brand with premium <br />threaded swag.</h6>
            <div className=" grid grid-cols-3 gap-9 py-8">
                {
                    review?.map(item=><ClientReviewCard key={review._id} item={item}></ClientReviewCard>)
                }
            </div>
        </div>
    );
};

export default ClientReview;