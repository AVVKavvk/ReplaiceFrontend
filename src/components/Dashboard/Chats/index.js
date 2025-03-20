import React from 'react'
import Sidebar from "./Sidebar";
import NoChatSelected from "./NoChatSelected";
import ChatContainer from "./ChatContainer";
import { useChatStore } from '../../../store/chatStore';
import AccountInfo from '../../AccountInfo';
function Chats() {
  const { selectedUser , isAccountViewing} = useChatStore();

  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center h-full justify-center">
        <div className="bg-base-100 rounded-lg shadow-xl w-full h-screen">
          <div className="flex h-screen rounded-lg overflow-hidden">
            <Sidebar />
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
        <div>
          {
          isAccountViewing && selectedUser
           &&
          <div className="flex  -mt-[355px] h-full w-[350px]">
          <AccountInfo/>
          </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Chats