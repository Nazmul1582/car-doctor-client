import {BsArrowRight} from 'react-icons/bs'
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, title, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt={`image of ${title}`} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex justify-between items-center text-red-500 font-semibold">
                    <p>Price: $ {price}</p>
                    <Link to={`/service-details/${_id}`}><button className="btn btn-sm btn-ghost"><BsArrowRight className='text-xl font-bold text-red-500' /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;