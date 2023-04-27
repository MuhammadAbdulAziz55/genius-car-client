import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  //   console.log("user from orders", user);

  const [orders, setOrders] = useState([]);
  //   console.log("orders", orders);

  useEffect(() => {
    fetch(
      `https://genius-car-server-eta-three.vercel.app/orders?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("geniusToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        // console.log("test", data);
        setOrders(data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure , you want to delete this order"
    );

    if (proceed) {
      fetch(`https://genius-car-server-eta-three.vercel.app/orders/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("geniusToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.handleDelete > 0) {
            alert("Your order has been deleted successfully");
            const remaining = orders.filter((ord) => ord._id !== id);

            return setOrders(remaining);

            // console.log(remaining);
          }
          if (loading) {
            return <h1 className="text-4xl">Loading....</h1>;
          }
        });
    }
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     fetchData();
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:5000/orders?email=${user?.email}`
  //     );
  //     setOrders(response.orders);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:5000/orders/${id}`);
  //     fetchData();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleStatusUpdate = (id) => {
    fetch(`https://genius-car-server-eta-three.vercel.app/orders/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("geniusToken")}`,
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = orders.filter((ord) => ord._id !== id);
          const approving = orders.find((ord) => ord._id === id);
          approving.status = "Approved";

          const newOrders = [approving, ...remaining];
          setOrders(newOrders);
        }
      });
  };
  return (
    <div>
      <h3> Total order {orders.length}</h3>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  {/* <input type="checkbox" className="checkbox" /> */}
                </label>
              </th>
              <th>Service</th>
              <th>Customer Info</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderRow
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                handleStatusUpdate={handleStatusUpdate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
