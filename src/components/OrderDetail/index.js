import React, { useState } from "react";

function OrderDetail({ detail }) {
  const [amount, setAmount] = useState(1);
  const salePrice = Math.round(detail.price * detail.price_percentage) / 100;
  const subtotal = salePrice * amount;

  const removeAction = (orderDetailId) => {};

  return (
    <div>
      <img src={detail.imageUrl} />
      <div>
        <h5>{detail.name}</h5>
        <p>Rating: {detail.rating}</p>
        <p>Price: {detail.price}</p>
      </div>
      <button onClick={() => removeAction(detail.id)}>Remove</button>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <p>{subtotal}</p>
    </div>
  );
}

export default OrderDetail;
