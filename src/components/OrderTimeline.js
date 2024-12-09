import React from "react";
import "./OrderTimeline.css";

const OrderTimeline = () => {
  const steps = [
    { label: "Order Confirmed", date: "May 16, 2018" },
    { label: "Shipped", date: "May 19, 2018" },
    { label: "Out For Delivery", date: "" },
    { label: "Delivery", date: "May 20, 2018 By 11 PM" },
  ];

  return (
    <section id="order-timeline" className="timeline">
      {steps.map((step, index) => (
        <div className={`event ${step.date ? "completed" : ""}`} key={index}>
          <div className="status-circle"></div>
          <div className="event-content">
            <p className="label">{step.label}</p>
            {step.date && <p className="date">{step.date}</p>}
          </div>
        </div>
      ))}
    </section>
  );
};

export default OrderTimeline;
