import React from 'react';
import { Link } from 'react-router-dom';

function DashboardSidebar() {
  return (
    <div className="w-64 bg-base-300 h-screen py-5 flex flex-col">
      <h2 className="text-xl font-bold text-primary mb-4">Dashboard</h2>
      <nav className="flex flex-col gap-4 w-full">
        <Link to="/dashboard/chats" className="btn btn-primary">Chats</Link>
      </nav>
    </div>
  );
}

export default DashboardSidebar;
