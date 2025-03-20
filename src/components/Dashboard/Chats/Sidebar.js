import { useEffect, useState } from "react";
import { Users } from "lucide-react";
import { useChatStore } from "../../../store/chatStore";
import { useAuthStore } from "../../../store/authStore";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();

  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  // const filteredUsers = showOnlineOnly
  //   ? users.filter((user) => onlineUsers.includes(user._id))
  //   : users;

  if (isUsersLoading) return <h1>Loading...</h1>;

  return (
    <aside className="h-full w-36 lg:w-[400px] border-r border-base-300 flex flex-col transition-all duration-200">
      <div className="overflow-y-auto w-full mt-16">
        {users && users.map((user) => ( 
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`
              w-full p-3 flex items-center gap-3
              hover:bg-base-300 transition-colors
              ${selectedUser?._id === user._id ? "bg-base-300 ring-1 ring-base-300" : ""}
            `}
          >
            <div className="relative mx-auto lg:mx-0">
              <img
                src={user.profilePic || "/avatar.png"}
                alt={user.name}
                className="size-12 object-cover rounded-full"
              />
              {users.includes(user._id) && (
                <span
                  className="absolute bottom-0 right-0 size-3 bg-green-500 
                  rounded-full ring-2 ring-zinc-900"
                />
              )}
            </div>
            <div className="hidden lg:block text-left min-w-0">
              <div className="font-medium truncate">{user.fullName}</div>
              <div className="text-sm text-zinc-400">
                {users.includes(user._id) ? "Online" : "Offline"}
              </div>
            </div>
          </button>
        ))}

        {users && users.length === 0 && (
          <div className="text-center text-zinc-500 py-4">No active conversation</div>
        )}
      </div>
    </aside>
  );
};
export default Sidebar;