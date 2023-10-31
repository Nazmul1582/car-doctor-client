import { Link, useLoaderData } from 'react-router-dom';
import Facility from './Facility';
import Hero from '../shared/Hero/Hero';

const ServiceDetails = () => {
    const service = useLoaderData()
    const { _id, img, title, description, facility, price} = service

    return (
        <section>
            <Hero title="Service Details" route="Home/Service Details" />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-20'>
                <div className="md:col-span-2">
                    <img src={img} className='rounded-xl w-full' alt="service image" />
                    <h2 className='text-3xl font-bold mt-12'>{title}</h2>
                    <p className='text-slate-500 my-7'>{description}</p>
                    <div className="grid grid-cols-2 gap-6">
                        {
                            facility.map((item, index) => <Facility key={index} facility={item} />)
                        }
                    </div>
                    <p className='text-slate-500 my-7'>{description}</p>
                </div>
                <div className="">
                    <div>
                        <h3 className='text-4xl font-bold mb-5'>Price ${price}</h3>
                        <Link to={`/checkout/${_id}`} state={{img, title, price}}><button className="btn btn-error w-full">Proceed Checkout</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;