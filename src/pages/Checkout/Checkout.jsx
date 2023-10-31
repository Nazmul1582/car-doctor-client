import { useLocation } from "react-router-dom";
import Hero from "../shared/Hero/Hero";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Checkout = () => {
  const { state } = useLocation();
  const { img, title, price } = state;
  const { user } = useContext(AuthContext);

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
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <section>
      <Hero title="Check Out" route="Home/Checkout" />
      <div className="my-20 p-10 lg:p-20 bg-base-200 rounded-xl">
        <div className="card">
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
