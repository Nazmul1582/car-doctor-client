import { useLoaderData } from "react-router-dom";
import Hero from "../shared/Hero/Hero";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Checkout = () => {
  const service = useLoaderData();
  const { img, title, price } = service;
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const amount = form.amount.value;
    const order = {
      customerName: name,
      email,
      date,
      amount,
      img,
      service: title,
      price,
    };
      axiosSecure.post(`/bookings`, order)
      .then((res) => {
        if(res.data.insertedId){
          alert("service book successfully!")
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <section>
      <Hero title="Check Out" route="Home/Checkout" />
      <div className="my-20 p-10 lg:p-20 bg-base-200 rounded-xl">
        <div className="card">
          <h3 className="text-3xl font-bold text-center">Service Name: {title}</h3>
          <form onSubmit={handleBooking} className="card-body">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="form-control w-full mb-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-full mb-5">
                <input
                  type="email"
                  name="email"
                  defaultValue={user.email}
                  placeholder="Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="form-control w-full mb-5">
                <input
                  type="date"
                  name="date"
                  placeholder="Your Phone"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-full mb-5">
                <input
                  type="text"
                  name="amount"
                  placeholder="Due Amount"
                  defaultValue={`$ ${price}`}
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-error">Order Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
