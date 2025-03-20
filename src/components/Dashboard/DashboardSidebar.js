import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { LogOut ,Inbox,MessageCircle, Contact, ChartSpline, Settings} from 'lucide-react';

function DashboardSidebar() {
  const {authUser, logout} = useAuthStore()


  if(!authUser) return null;

  return (
    <div className=" bg-base-300 h-screen py-5 mt-1 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold text-primary mb-4 ">Dashboard</h2>
        <nav className="flex flex-col gap-1 w-full">
          <Link to="/dashboard/inbox" className="btn btn-soft flex items-center justify-start gap-4">
            <Inbox className="size-5" />
            <span>My inbox</span>
          </Link>
          
          <Link to="/dashboard/chats" className="btn btn-soft flex items-center justify-start gap-4">
            <MessageCircle className="size-5" />
            <span>Conversations</span>
          </Link>

          <Link to="/dashboard/contacts" className="btn btn-soft flex items-center justify-start gap-4">
            <Contact className="size-5" />
            <span>Contacts</span>
          </Link>

          <Link to="/dashboard/reports" className="btn btn-soft flex items-center justify-start gap-4">
            <ChartSpline className="size-5" />
            <span>Reports</span>
          </Link>

          <Link to="/dashboard/help" className="btn btn-soft flex items-center justify-start gap-4">
            <MessageCircle className="size-5" />
            <span>Help</span>
          </Link>

          <Link to="/dashboard/settings" className="btn btn-soft flex items-center justify-start gap-4">
            <Settings className="size-5" />
            <span>Settings</span>
          </Link>
        </nav>

      </div>

      <div className="border-t bg-base-300 border-gray-500 mt-4 px-4 py-4">
        <Link to="/dashboard/profile" className="flex items-center  gap-3" >
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={authUser?.profilePic}alt="Profile" />
            </div>
          </div>
          <div>
            <h3 className=" font-semibold">{authUser?.fullName}</h3>
            <p className="text-sm ">{authUser?.email}</p>
          </div>
        </Link>
        <button onClick={logout} className="btn btn-error w-full mt-4">
        <LogOut className="size-5" />
        <h1>Logout</h1>
        </button>
      </div>
    </div>
  );
}

export default DashboardSidebar;
