import React, { useState, useEffect } from "react";
import { getAllOrders as getOrders } from "../data/dbase";
import { useParams } from "react-router-dom";
import OrdersDetail from "./OrdersDetail";

function OrdersBuyed() {
  const [orders, setOrders] = useState();
  const {orderid} = useParams();

  useEffect(() => {
    getOrders(orderid).then((res) => {
      setOrders(res);
    });
  }, [orderid]);

  return (
    <div>
      <OrdersDetail orders={orders} />
    </div>
  );
}

export default OrdersBuyed;
