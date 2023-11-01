import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Hero from "../shared/Hero/Hero";
import axios from "axios";

const CartDetails = () => {
  const [booking, setBooking] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user.email}`;

  useEffect(() => {
    axios.get(url, {withCredentials: true})
    .then(res => {
      setBooking(res.data)
    })
    .catch(error => console.log(error.message))
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("delete succussfully!");

            // removed from client side
            const remaining = booking.filter((service) => service._id !== id);
            setBooking(remaining);
          }
        })
        .catch((error) => console.log(error.message));
    }
  };

  // handle update
  const handleBookingUpdate = (id) => {
    const proceed = confirm("Are you want to approved?");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: "approved" }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            alert("Booking updated successfully!");
            const remaining = booking.filter((service) => service._id !== id);
            const updated = booking.find((service) => service._id === id);
            updated.status = "approved"
            const newBooking = [updated, ...remaining]
            setBooking(newBooking)
          }
        })
        .catch((error) => console.log(error.message));
    }
  };

  return (
    <section>
      <Hero title="Cart Details" route="Home/Cart Details" />
      <div className="py-20">
        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              {booking.map((service) => (
                <tr key={service._id}>
                  <th>
                    <button
                      onClick={() => handleDelete(service._id)}
                      className="btn btn-circle btn-neutral"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask rounded-xl w-40 h-40">
                          <img src={service.img} alt="service image" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{service.customerName}</div>
                        <div className="text-sm opacity-50">
                          {service.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>${service.price}</td>
                  <td>{service.date}</td>
                  <th>
                    {service.status === "approved" ? (
                      <button className="btn btn-success btn-outline">Approved</button>
                    ) : (
                      <button
                        onClick={() => handleBookingUpdate(service._id)}
                        className="btn btn-error">Pending</button>
                    )}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CartDetails;
