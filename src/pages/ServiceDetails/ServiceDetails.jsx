import image from '../../assets/images/checkout/checkout.png'

const ServiceDetails = () => {
    return (
        <section>
            <div className="py-20">
                <div className="h-[300px] rounded-xl overflow-hidden relative">
                    <img src={image} className='h-full w-full object-cover' alt="banner image" />
                    <div className='absolute top-0 left-0 w-full h-full flex items-center bg-gradient-to-r from-[#151515] from-0% to-[rgba(21_21_21/0)] to-100%'>
                        <h2 className='text-white text-5xl font-bold pl-20'>Service Details</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;