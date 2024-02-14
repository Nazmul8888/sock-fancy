import { Link } from "react-router-dom";


const CustomCard = ({item}) => {
    const {title, image, details} = item;
    return (
      <Link to= '/form'>
      <div className='max-w-screen-xl mx-auto' >
            <div className="card w-96 ">
  <figure className="px-10 pt-10">
    <img  src={image}alt="Shoes" className="" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{details}</p>
    <div className="card-actions">
    <button className="btn btn-wide rounded-full  bg-white hover:"><span className=" text-red-700">View </span>Product</button>
    </div>
    
  </div>
</div>
        </div>
      </Link>
    );
};

export default CustomCard;