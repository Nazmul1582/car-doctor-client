const ServiceCard = ({ service }) => {
    const { img, title, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt={`image of ${title}`} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex justify-between items-center text-red-500 font-semibold">
                    <p>Price: $ {price}</p>
                    <button className="btn btn-error">&gt;</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;