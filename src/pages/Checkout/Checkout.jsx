import { useLocation } from "react-router-dom";
import Hero from "../shared/Hero/Hero";

const Checkout = () => {
    const {state: price} = useLocation()
    
  return (
    <section>
      <Hero title="Check Out" route="Home/Checkout" />
      <div className="my-20 p-10 lg:p-20 bg-base-200 rounded-xl">
        <div className="card">
          <form className="card-body">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="form-control w-full mb-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-full mb-5">
                <input
                  type="email"
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
                  placeholder="Your Phone"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-full mb-5">
                <input
                  type="text"
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
