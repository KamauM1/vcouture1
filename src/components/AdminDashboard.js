import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        {/* Sidebar Navigation Menu */}
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/orders">Orders</a></li>
          <li><a href="/admin-settings">Admin Settings</a></li>
          {/* Add more menu items as needed */}
        </ul>
      </aside>

      <main className="main-content">
        {/* Admin Dashboard Content */}
        <h2>Welcome to Your Admin Dashboard</h2>
        <p>Here, you can manage products, view orders, and configure admin settings.</p>
        {/* Add specific dashboard components and content here */}
      </main>
    </div>
  );
};

export default AdminDashboard;
