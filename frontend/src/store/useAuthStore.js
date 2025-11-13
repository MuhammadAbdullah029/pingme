import { create } from "zustand";
import { instance } from "../lib/axios";
import toast from "react-hot-toast";

const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await instance.get('/auth/check'); 
      set({ authUser: res.data });
      
    } catch (error) {
      console.log('Error checking auth: ', error);
      set({ authUser: null });
    }finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) =>{
    set({ isSigningUp: true });
    try {
      const res = await instance.post('/auth/signup', data);
      toast.success('Account created successfully');
      set({ authUser: res.data });
    } catch (error) {
      toast.error(error.response.data.message || 'Something went wrong');
      
    } finally{
      set({ isSigningUp: false });
    }
  },

  login: async (data) =>{
    set({ isLoggingIn: true })
    try {
      const res = await instance.post('/auth/login', data);
      set({ authUser: res.data });
      toast.success('Logged in successfully');
    } catch (error) {
      toast.error(error.response.data.message || 'Something went wrong');
    }finally {
      set({ isLoggingIn: false })
    }
  },

  logout: async () =>{
    try {
      await instance.post('/auth/logout');
      set({ authUser: null })
      toast.success('Logged out successfully')
    } catch (error) {
      toast.error(error.response.data.message || 'Something went wrong');
    }
  }

}));


export default useAuthStore;
