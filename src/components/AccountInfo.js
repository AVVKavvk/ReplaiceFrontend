
import { Mail, X} from "lucide-react";
import { useChatStore } from "../store/chatStore";

const AccountInfo = () => {
  const { selectedUser, setAccountViewing} = useChatStore();

  const handleAccountViewing = () => {
    setAccountViewing(false)
  }

  return (
    <div className=" max-w-[350px] h-[100%] p-2 rounded">
      <div className=" flex flex-col items-start gap-4 mb-3">
        <div className="relative">
          <img
            src={selectedUser?.profilePic }
            alt="Profile"
            className="size-32 rounded-full object-cover border-4 "
          />
        </div>
        <h1 className="text-xl font-semibold">
        {selectedUser?.fullName}
        </h1>
      </div>

      <div className="space-y-6">

        <div className=" flex gap-2 items-center">
            <Mail className="w-8 h-8" />
            <h1 className="text-lg">{selectedUser?.email}</h1>
        </div>
      </div>

      <div className="mt-6 bg-base-300 rounded-xl p-6">
        <h2 className="text-lg font-medium  mb-4">Account Information</h2>
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between py-2 border-b border-zinc-700">
            <span>Member Since</span>
            <span>{selectedUser?.createdAt?.split("T")[0]}</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span>Account Status</span>
            <span className="text-green-500">Active</span>
          </div>
        </div>
      </div>
      <div className="w-80 p-4 flex flex-col items-center justify-center rounded-lg shadow-lg relative">
      <button 
        className="absolute top-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white size-14 flex items-center justify-center rounded-full p-2 shadow-md hover:bg-gray-700 transition"
        onClick={handleAccountViewing}
      >
        <X />
      </button>
    </div>
    </div>
  );
};

export default AccountInfo;
