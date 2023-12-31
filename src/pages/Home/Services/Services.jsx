import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Services = () => {
    const [services, setServices] = useState([]);
    const axiosSecure = useAxiosSecure()
    useEffect(() => {
        axiosSecure.get('/services')
        .then(res => setServices(res.data))
        .catch(error => console.log(error.message))
    }, [axiosSecure])

    return (
        <section className="py-20">
            <div className="text-center">
                <h4 className="text-xl font-bold text-red-500">Service</h4>
                <h2 className="font-bold text-5xl my-5">Our Service Area</h2>
                <div className="w-1/2 mx-auto mb-12">
                    <p className="text-gray-500">the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => (
                        <ServiceCard key={service._id} service={service} />
                    ))
                }
            </div>
            <div className="flex justify-center mt-10">
                <button className="btn btn-outline btn-error">More Services</button>
            </div>
        </section>
    );
};

export default Services;