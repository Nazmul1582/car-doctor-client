import { Link, useLoaderData } from 'react-router-dom';
import image from '../../assets/images/checkout/checkout.png'
import Facility from './Facility';

const ServiceDetails = () => {
    const service = useLoaderData()
    const { _id, img, title, description, facility, price} = service

    return (
        <section>
            <div className="py-12">
                <div className="h-[300px] rounded-xl overflow-hidden relative">
                    <img src={image} className='h-full w-full object-cover' alt="banner image" />
                    <div className='absolute top-0 left-0 w-full h-full flex items-center bg-gradient-to-r from-[#151515] from-0% to-[rgba(21_21_21/0)] to-100%'>
                        <h2 className='text-white text-5xl font-bold pl-20'>Service Details</h2>
                    </div>
                    <p className='bg-[#ff3811] text-white absolute bottom-0 left-1/2 transform -translate-x-1/2 py-3 px-8'>Home/Service Details</p>
                </div>
            </div>
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
                        <Link to={`/checkout/${_id}`}><button className="btn btn-error w-full">Proceed Checkout</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;