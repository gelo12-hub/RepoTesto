// src/pages/OrdersPage.jsx
import React, { useState } from "react";
import { useOrders } from "../context/OrdersContext";

export default function OrdersPage() {
    // 👇 PULL IN THE NEW deleteOrder FUNCTION (already there)
    const { orders, cancelOrder, deleteOrder, isLoading } = useOrders(); 
    const [openOrder, setOpenOrder] = useState(null);

    const getStatusColor = (status) => {
        switch (status) {
            case "Processing":
                return "#f1c40f";
            case "Shipped":
                return "#3498db";
            case "Delivered":
                return "#2ecc71";
            case "Cancelled":
                return "#e74c3c";
            default:
                return "#ccc";
        }
    };

    const formatAddressDetails = (order) => {
        const addressText = order.address 
            ? `${order.address.street}, ${order.address.barangay}, ${order.address.city}, ${order.address.province}`
            : "Address not available";

        // We combine the details here for simple display:
        return (
            <>
                <div style={{ fontWeight: '600' }}>{order.fullName || "Customer Name Missing"}</div>
                <div style={{ marginBottom: '5px' }}>Tel: {order.phoneNumber || "N/A"}</div>
                <div>{addressText}</div>
            </>
        );
    };


    const handleCancel = (firestoreId) => { // Updated parameter name for clarity
        const ok = window.confirm("Are you sure you want to cancel this order?");
        if (ok) cancelOrder(firestoreId);
    };
    
    const handleDeleteCancelled = (firestoreId) => { // Updated parameter name for clarity
        const ok = window.confirm("This order is already cancelled. Are you sure you want to completely remove it from your orders list?");
        if (ok) deleteOrder(firestoreId);
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Your Orders</h1>

            {isLoading && (
                <p style={{ textAlign: "center", marginTop: "20px" }}>
                    Loading orders...
                </p>
            )}

            {!isLoading && orders.length === 0 && (
                <p style={{ textAlign: "center", marginTop: "20px" }}>
                    You have no orders yet.
                </p>
            )}

            {orders.map((order) => (
                // 🚀 CRITICAL FIX 1: Use the Firestore ID as the React key
                <div key={order.firestoreId} style={styles.card}> 
                    <div style={styles.headerRow}>
                        <a href="#" style={styles.orderId} onClick={() => setOpenOrder(order)}>
                            {/* We still display the timestamp ID (order.id) for the user */}
                            Order #{order.id} 
                        </a>

                        <div style={styles.rightInfo}>
                            {/* Ensure date formatting handles Firestore timestamps (if needed) */}
                            <div style={styles.date}>{order.date}</div>
                            <div style={styles.tracking}>Tracking: <b>{order.trackingNumber}</b></div>
                        </div>
                    </div>
                    
                    <div style={styles.addressRow}>
                        <div style={{ fontWeight: '500', color: '#555', marginBottom: '5px' }}>Shipping Details:</div>
                        {formatAddressDetails(order)}
                    </div>


                    {/* STATUS BADGE MODIFICATION */}
                    <span
                        style={{
                            ...styles.statusBadge,
                            background: getStatusColor(order.status),
                            cursor: order.status === "Cancelled" ? "pointer" : "default", 
                        }}
                        // 🚀 CRITICAL FIX 2: Call handleDeleteCancelled with order.firestoreId
                        onClick={order.status === "Cancelled" ? () => handleDeleteCancelled(order.firestoreId) : null}
                    >
                        {order.status}
                        {order.status === "Cancelled" && " (Tap to Remove)"} 
                    </span>

                    {/* PRODUCT PREVIEW - Check if items array exists before accessing items[0] */}
                    {order.items && order.items.length > 0 && (
                        <div style={styles.itemRow}>
                            <img
                                src={order.items[0].selectedImage}  
                                alt={order.items[0].name}
                                style={styles.image}
                            />

                            <div>
                                <div style={styles.name}>{order.items[0].name}</div>
                                <div style={{ color: "#555" }}>× {order.items[0].quantity}</div>
                                <div style={{ color: "#555" }}>
                                    Size: {order.items[0].selectedSize}
                                </div>
                            </div>

                            <div style={styles.total}>₱{order.total.toFixed(2)}</div>
                        </div>
                    )}

                    {/* BUTTON ROW */}
                    <div style={styles.buttonsRow}>
                        {order.status === "Processing" && (
                            <button
                                style={styles.cancelBtn}
                                // 🚀 CRITICAL FIX 3: Call handleCancel with order.firestoreId
                                onClick={() => handleCancel(order.firestoreId)}
                            >
                                Cancel Order
                            </button>
                        )}
                    </div>
                </div>
            ))}

            {/* DETAILS MODAL (unchanged) */}
            {openOrder && (
                <div style={styles.modalOverlay}>
                    <div style={styles.modal}>
                        <h2>Order Details</h2>

                        {openOrder.items.map((item, index) => (
                            <div key={item.id || index} style={styles.modalItem}>
                                <img src={item.selectedImage} style={styles.modalImage} alt={item.name} /> 
                                <div>
                                    <div style={{ fontWeight: 600 }}>{item.name}</div>
                                    <div>Quantity: {item.quantity}</div>
                                    <div>Size: {item.selectedSize}</div>
                                    <div>Price: ₱{item.price}</div>
                                </div>
                            </div>
                        ))}

                        <h3>Total: ₱{openOrder.total.toFixed(2)}</h3>

                        <button
                            style={styles.closeBtn}
                            onClick={() => setOpenOrder(null)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
/* ------------------ STYLES ------------------ */
const styles = {
    container: {
        padding: "40px",
        maxWidth: "900px",
        margin: "0 auto",
        fontFamily: "Inter, sans-serif",
    },

    title: {
        fontSize: "32px",
        fontWeight: "700",
        marginBottom: "25px",
    },

    card: {
        background: "#fff",
        borderRadius: "12px",
        padding: "20px",
        marginBottom: "25px",
        boxShadow: "0px 4px 16px rgba(0,0,0,0.06)",
    },

    headerRow: {
        display: "flex",
        justifyContent: "space-between",
    },

    orderId: {
        color: "#006eff",
        fontWeight: "600",
        textDecoration: "none",
        fontSize: "18px",
        cursor: "pointer", 
    },

    rightInfo: {
        textAlign: "right",
        fontSize: "14px",
    },
    
    // MODIFIED STYLE for better spacing with multiple lines
    addressRow: {
        fontSize: "15px",
        color: "#333",
        marginTop: "10px",
        marginBottom: "10px", 
        borderBottom: '1px solid #eee',
        paddingBottom: '10px',
    },

    date: {
        color: "#444",
    },

    tracking: {
        marginTop: "4px",
    },

    statusBadge: {
        padding: "6px 12px",
        borderRadius: "20px",
        fontSize: "14px",
        fontWeight: "600",
        display: "inline-block",
        marginTop: "10px",
    },

    itemRow: {
        display: "flex",
        alignItems: "center",
        marginTop: "15px",
        gap: "12px",
    },

    image: {
        width: "70px",
        height: "70px",
        borderRadius: "10px",
        objectFit: "cover",
        background: "#f3f3f3",
    },

    name: {
        fontSize: "17px",
        fontWeight: "600",
    },

    total: {
        marginLeft: "auto",
        fontWeight: "700",
    },

    buttonsRow: {
        display: "flex",
        gap: "10px",
        marginTop: "20px",
    },

    cancelBtn: {
        background: "#e74c3c",
        color: "#fff",
        border: "none",
        padding: "12px 20px",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "600",
    },

    /* MODAL */
    modalOverlay: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    modal: {
        background: "#fff",
        padding: "25px",
        borderRadius: "12px",
        width: "400px",
    },

    modalItem: {
        display: "flex",
        gap: "10px",
        marginBottom: "15px",
    },

    modalImage: {
        width: "60px",
        height: "60px",
        borderRadius: "8px",
        objectFit: "cover",
    },
    
    closeBtn: {
        marginTop: "15px",
        width: "100%",
        padding: "12px",
        background: "#006eff",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
    },
};