

const CustomCard = ({item}) => {
    const {title, image, details} = item;
    return (
        <div className=" " >
            <div className="card w-96  ml-20">
  <figure className="px-10 pt-10">
    <img  src={image}alt="Shoes" className="rounded-xl w-[300px] h-[302px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{details}</p>
    
  </div>
</div>
        </div>
    );
};

export default CustomCard;