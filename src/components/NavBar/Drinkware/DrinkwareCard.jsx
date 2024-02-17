import { Link } from "react-router-dom";


const DrinkwareCard = ({item}) => {

    const {title, image,price}= item;
    return (
        <div>
           <div className="card  ">
  <figure className="px-10 pt-10">
    <img  src={image} alt="Shoes" className=" w-[250px] h-[250px] bg-[#f0f7fe] rounded-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}!</h2>
    <p>{price}</p>
    <div className="card-actions">
    <Link to='/getFreeMockups'><button className="btn btn-wide rounded-full  bg-white hover:"><span className=" text-red-700">Submit </span>Inquiry</button></Link>
    </div>
  </div>
</div> 
        </div>
    );
};


export default DrinkwareCard;