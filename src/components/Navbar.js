import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { LayoutDashboard, MessageSquare, Settings, } from "lucide-react";

const Navbar = () => {
  const {authUser } = useAuthStore();

  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">Replaice</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            {
              authUser &&
              <Link
              to={"/dashboard"}
              className={`
              btn btn-sm gap-2 transition-colors
              
              `}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </Link>
            }
            {
              <Link
              to={"/settings"}
              className={`
              btn btn-sm gap-2 transition-colors
              
              `}
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Setting</span>
            </Link>
            }

            {/* {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button className="flex gap-2 items-center" onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )} */}
            {!authUser && (
              <>
                <Link to={"/login"} className={`btn btn-sm gap-2`}>
                  <span className="hidden sm:inline">Sign in</span>
                </Link>
                <Link to={"/signup"} className={`btn btn-sm gap-2`}>
                  <span className="hidden sm:inline">Create account</span>
                </Link>

              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;