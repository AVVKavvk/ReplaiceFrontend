import {create} from 'zustand';
import { axiosClient } from '../utils/axiosClient';
import toast from 'react-hot-toast';
export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
  accountInfo: null,
  onlineUsers:[],

  checkAuth : async ()=>{
    try {
      const res = await axiosClient.get("/api/auth/check")
      // console.log(res.data.result.user);
      if(res.data.status!=="error")
        set({authUser:res.data.result.user})
      
    } catch (err) {
      console.error(err)
      set({authUser:null})
    }
    finally{
      set({isCheckingAuth:false})
    }

  },

  signup : async(data)=>{
    try {
        set({isSigningUp:true})
        const res = await axiosClient.post("/api/auth/signup",data)
        console.log(res.data);
        if(res.data.status !=="error"){
          set({authUser:res.data.result})
          toast.success("Account created successfully")
        }
        else {
          toast.error(res.data.message)
          set({authUser:null})
        }     

    } catch (err) {
      toast.error(err.message)
      console.error(err)

    }finally{
      set({isSigningUp:false})
    }
  },

  login: async(data)=>{
    try {
      set({isLoggingIn:true})
      const res = await axiosClient.post("/api/auth/login",data)
      console.log(res.data);
      if(res.data.status !=="error"){
        set({authUser:res.data.result})
        toast.success("Logged in successfully")
      }
      else {
        toast.error(res.data.message)
        set({authUser:null})
      }

    } catch (err) {
      set({authUser:null})
      toast.error(err.message)
      console.error(err)
    }finally{
      set({isLoggingIn:false})
    }
  },

  logout: async()=>{
    try {
      await axiosClient.post("/api/auth/logout")
      set({authUser:null})
      toast.success("Logged out successfully")
    } catch (err) {
      toast.error(err.message)
    }
  },

  updateProfile: async(data)=>{
    try {
      set({isUpdatingProfile:true})
      const res = await axiosClient.put("/api/auth/updateProfile",data)
      // console.log(res.data);
      if(res.data.status !=="error"){
        set({authUser:res.data.result})
        toast.success("Profile updated successfully")
      }
      else {
        toast.error(res.data.message)
      }
    } catch (err) {
      toast.error(err.message)
    }
    finally{
      set({isUpdatingProfile:false})
    }
  },

  getAccountInfo: async(id)=>{
    try {
      const res = await axiosClient.get(`/api/auth/user/${id}`)
      console.log(res.data);
      if(res.data.status !=="error"){
        set({accountInfo:res.data.result})
      }
      else {
        toast.error(res.data.message)
      }
    } catch (err) {
      toast.error(err.message)
    }
  }


}
));