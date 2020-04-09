import React from "react";
import { useSelector } from "react-redux";
import OrderDetail from "../../components/OrderDetail";
import { Jumbotron } from "react-bootstrap";
import { selectOrderDetails } from "../../store/user/selectors";

function Cart(props) {
  const orderDetails = useSelector(selectOrderDetails);

  return (
    <div>
      <Jumbotron>
        <h1>Cart</h1>
      </Jumbotron>
      {orderDetails.map((detail) => {
        return <OrderDetail detail={detail} />;
      })}
    </div>
  );
}

export default Cart;
