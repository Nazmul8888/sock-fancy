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
        <div className=" max-w-screen-xl mx-auto">
            <div className=" grid grid-cols-3 gap-9">
                {
                    review?.map(item=><ClientReviewCard key={review._id} item={item}></ClientReviewCard>)
                }
            </div>
        </div>
    );
};

export default ClientReview;