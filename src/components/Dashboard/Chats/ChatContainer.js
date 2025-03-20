import React, { use, useEffect, useRef } from 'react'
import { useChatStore } from '../../../store/chatStore'
import ChatHeader from './ChatHeader'
import MessageInput from './MessageInput'
import {formatMessageTime} from '../../../utils/convertDateToTime'
import { useAuthStore } from '../../../store/authStore'
function ChatContainer() {
  const {messages, selectedUser, isMessagesLoading, getMessages,subscribeToMessage,unsubscribeFromMessage} = useChatStore()
  const {authUser} = useAuthStore()
  const messageEndRef = useRef(null)

  useEffect(()=>{
    if(selectedUser){
      getMessages(selectedUser?._id)
      subscribeToMessage()

      return ()=>{
        unsubscribeFromMessage()
      }
    }
  },[selectedUser?._id, getMessages,subscribeToMessage,unsubscribeFromMessage])

  useEffect(()=>{
    if(messageEndRef.current && messages){
      messageEndRef.current.scrollIntoView({behavior:"smooth"})
    }
  },[messages]) 

  if(isMessagesLoading) return <h1>Loading...</h1>
  return (
    <div className="flex-1 flex flex-col overflow-auto mt-16">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message._id}
            className={`chat ${message.sender === authUser._id ? "chat-end" : "chat-start"}`}
            ref={messageEndRef}
          >
            <div className=" chat-image avatar">
              <div className="size-10 rounded-full border">
                <img
                  src={
                    message.sender === authUser._id
                      ? authUser.profilePic || "/avatar.png"
                      : selectedUser.profilePic || "/avatar.png"
                  }
                  alt="profile pic"
                />
              </div>
            </div>
            <div className="chat-header mb-1">
              <time className="text-xs opacity-50 ml-1">
                {formatMessageTime(message.createdAt)}
              </time>
            </div>
            <div className="chat-bubble flex flex-col">
              {message.image && (
                <img
                  src={message.image}
                  alt="Attachment"
                  className="sm:max-w-[200px] rounded-md mb-2"
                />
              )}
              {message.text && <p>{message.text}</p>}
            </div>
          </div>
        ))}
      </div>

      <MessageInput />
    </div>
  )
}

export default ChatContainer