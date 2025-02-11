import React from 'react';

function RecentOrders() {
  return (
    <div className="recent-orders">
      {/* Render recent orders here */}
      <h4>
        <img src="/fish-burger.jpg" alt="Fish Burger" /> Fish Burger - $5.59
      </h4>
      <h4>
        <img src="/japan-ramen.jpg" alt="Japan Ramen" /> Japan Ramen - $7.99
      </h4>
      <h4>
        <img src="/fried-rice.jpg" alt="Fried Rice" /> Fried Rice - $6.99
      </h4>
    </div>
  );
}

export default RecentOrders; 