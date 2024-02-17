

const ClientReviewCard = ({item}) => {
    const {name, image, details, rank} = item;
    return (
        <div>
            <div className="card card-compact  shadow-xl">
          <figure><img className=" w-36  h-20" src={image} alt="Shoes" /></figure>
        <div className="card-body">
    <h2 className="card-title">{details}</h2>
    <p className=" text-xl ">{name}</p>
    <span>{rank}</span>
    
  </div>
</div>
        </div>
    );
};

export default ClientReviewCard;