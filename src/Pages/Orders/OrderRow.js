import React, { useEffect, useState } from "react";

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
  const { _id, serviceName, price, customer, phone, serviceId, status } = order;
  const [orderService, setOrderService] = useState({});

  useEffect(() => {
    fetch(
      `https://genius-car-server-eta-three.vercel.app/services/${serviceId}`
    )
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [serviceId]);

  return (
    <>
      <tr>
        <th>
          <label>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-ghost bg-gray-200 text-lg"
            >
              X
            </button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="w-24 rounded h-24">
                {orderService?.img && (
                  <img
                    src={orderService.img}
                    alt="Avatar Tailwind CSS Component"
                  />
                )}
              </div>
            </div>
            <div>
              <div className="font-bold">{serviceName}</div>
              <div className="badge badge-ghost badge-sm text-base ">
                ${price}
              </div>
            </div>
          </div>
        </td>
        <td>{customer}</td>
        <td className=""></td>
        <th>
          <button
            onClick={() => handleStatusUpdate(_id)}
            className="btn btn-ghost btn-xs"
          >
            {status ? status : "Pending"}
          </button>
        </th>
      </tr>
    </>
  );
};

export default OrderRow;
