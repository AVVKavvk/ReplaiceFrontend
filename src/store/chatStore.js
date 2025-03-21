import { create } from "zustand";
import { toast } from "react-hot-toast";
import { axiosClient } from "../utils/axiosClient";
import { useAuthStore } from "./authStore";

export const useChatStore = create((set,get)=>({

  messages:[],
  users:[],
  selectedUser:null,
  isUsersLoading:false,
  isMessagesLoading:false,
  isAccountViewing:false,

  getUsers: async()=>{
    try {
      set({isUsersLoading: true}) 
      const res = await axiosClient.get("/api/message/users")
      // console.log(res.data);
      if(res.data.status !=="error"){
        set({users:res.data.result})
      }
      else {
        toast.error(res.data.message)
      }
    } catch (err) {
      toast.error(err.message)
      console.error(err)
    }finally{
      set({isUsersLoading:false})
    }
  },

  getMessages: async(userId)=>{
    try {
      set({isMessagesLoading:true})
      const res = await axiosClient.get(`/api/message/${userId}`)
      // console.log(res.data);
      if(res.data.status !=="error"){
        set({messages:res.data.result})
      }
      else {
        toast.error(res.data.message) 
    } 
    }catch (err) {
      toast.error(err.message)
      console.error(err)
    }
    finally{
      set({isMessagesLoading:false})
    }
  },

  sendMessage : async(messageData)=>{
    try {
        const {selectedUser, messages} =get()
        const res = await axiosClient.post(`/api/message/send/${selectedUser._id}`,messageData)
        // console.log(res.data);
        if(res.data.status !=="error"){
          set({messages:[...messages,res.data.result]})
        }
        else {
          toast.error(res.data.message)
        }
      } catch (err) {
        toast.error(err.message)
        console.error(err)      
      }
  },

  subscribeToMessage : ()=>{

    const {selectedUser} = get()
    if(!selectedUser) return;

    const socket = useAuthStore.getState().socket;

    socket.on("newMessage", (message)=>{
      if(message.sender === selectedUser._id || message.receiver === selectedUser._id){
        set({messages:[...get().messages,message]})
      }
    })
  },

  unsubscribeFromMessage : ()=>{
    const socket = useAuthStore.getState().socket;
    socket.off("newMessage")
  },

  setAccountViewing:(status)=>{
    set({isAccountViewing:status})
  },

  setSelectedUser:(user)=>{
    set({selectedUser:user})
  },

}))