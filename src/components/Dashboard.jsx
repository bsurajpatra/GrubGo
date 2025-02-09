import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard">

      <div className="dashboard__container">
        <aside className="dashboard__sidebar">
          <h2 className="app-name">GrubGo</h2>
          <ul>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#food-order">Food Order</a></li>
            <li><a href="#favourite">Favourite</a></li>
            <li><a href="#message">Message</a></li>
            <li><a href="#order-history">Order History</a></li>
            <li><a href="#settings">Settings</a></li>
            <li><a href="#profile">Profile</a></li>
          </ul>
        </aside>
        <main className="dashboard__main">
          <h2>Welcome to the Dashboard</h2>
          <p>This is where you can manage your application.</p>
          {/* Add more components or content here */}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;