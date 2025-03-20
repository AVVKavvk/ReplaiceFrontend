import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';

const Chats = lazy(() => import('./Chats'));

function Dashboard() {
  return (
    <div className="flex h-screen">
      <DashboardSidebar />

      <div className="flex-1 bg-base-200">
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <Routes>
            <Route path="/chats" element={<Chats />} />
            <Route path="*" element={<Navigate to="/dashboard/chats" />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default Dashboard;
