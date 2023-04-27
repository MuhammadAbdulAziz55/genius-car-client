import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const CheckOut = () => {
  const { title, price, _id } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;
    console.log(name, email, phone, message);
    const order = {
      serviceId: _id,
      serviceName: title,
      price: price,
      customer: name,
      email: email,
      message: message,
      phone: phone,
    };

    // if(phone.length > 11){
    //     alert("Phone number should be at least 11 characters long")
    // }
    // else{

    fetch("https://genius-car-server-ss73.vercel.app/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("geniusToken")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged === true) {
          alert("Your order has been successfully placed");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <form onSubmit={handlePlaceOrder}>
      <h2 className="text-4xl">Your are about to order: {title}</h2>
      <h4 className="text-3xl mb-4"> Price: ${price}</h4>
      <div className="w-full bg-gray-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pl-20 pr-20 pt-20 pb-5 align-middle ">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="input input-bordered w-[100%] "
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-[100%] "
          />
          <input
            name="phone"
            type="text"
            placeholder="Your Phone"
            className="input input-bordered w-[100%] "
            required
          />
          <input
            name="email"
            type="text"
            placeholder="Your Email"
            className="input input-bordered w-[100%] "
            defaultValue={user?.email}
            readOnly
            required
          />
          <textarea
            name="message"
            className="textarea textarea-bordered lg:w-[203%] w-full pb-20"
            placeholder="Your message"
            required
          ></textarea>
        </div>
        <div className="pl-20 pr-20 pb-20">
          <button className="btn btn-warning w-[100%]">Order Confirm</button>
        </div>
      </div>
    </form>
  );
};

export default CheckOut;
