import React from "react";
import "./orderModal.css";

export default function OrderDetailsModal({ order, onClose }) {
  if (!order) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <button className="modal-close" onClick={onClose}>✖</button>

        <h2>Order #{order.id}</h2>
        <p><strong>Status:</strong> {order.status}</p>
        <p><strong>Tracking #:</strong> {order.trackingNumber}</p>
        <p><strong>Date:</strong> {order.createdAt}</p>

        <hr />

        <h3>Items:</h3>
        <div className="modal-items">
          {order.items.map((item, i) => (
            <div key={i} className="modal-item">
              <img src={item.image} alt="" />
              <div>
                <p>{item.name}</p>
                <p>₱{item.price.toFixed(2)} × {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        <hr />

        <p className="modal-total">Total: ₱{order.total.toFixed(2)}</p>
      </div>
    </div>
  );
}
