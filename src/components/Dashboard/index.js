import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';

const Profile = lazy(() => import('../Profile'));
const Settings = lazy(() => import('../Settings'));
const Chats = lazy(() => import('./Chats'));
const Contacts = lazy(() => import('./Contacts'));
const Reports = lazy(() => import('./Reports'));
const Help = lazy(() => import('./Help'));
const Inbox = lazy(() => import('./Inbox'));

function Dashboard() {
  return (
    <div className="flex h-screen">
      <DashboardSidebar />

      <div className="flex-1 bg-base-200">
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <Routes>
            <Route path="/chats" element={<Chats />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/help" element={<Help />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/dashboard/chats" />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default Dashboard;
