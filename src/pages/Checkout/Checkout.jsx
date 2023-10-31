import Hero from "../shared/Hero/Hero";

const Checkout = () => {
  return (
    <section>
      <Hero title="Check Out" route="Home/Checkout" />
      <div className="my-20 p-20 bg-base-200 rounded-xl">
        <div className="card">
          <form className="card-body">
            <div className="flex gap-6">
              <div className="form-control w-full mb-5">
                <input
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-full mb-5">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="flex gap-6">
              <div className="form-control w-full mb-5">
                <input
                  type="text"
                  placeholder="Your Phone"
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
            <div className="form-control">
            <textarea className="textarea textarea-bordered h-40" placeholder="Your Message"></textarea>
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
