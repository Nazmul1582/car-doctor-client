import { useEffect, useState } from "react";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
        .catch(err => console.log(err.message))
    }, [])
    console.log(services);

    return (
        <section className="py-20">
            <div className="text-center">
                <h4 className="text-xl font-bold text-red-500">Service</h4>
                <h2 className="font-bold text-5xl my-5">Our Service Area</h2>
                <div className="w-1/2 mx-auto mb-12">
                    <p className="text-gray-500">the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
                </div>
            </div>
        </section>
    );
};

export default Services;