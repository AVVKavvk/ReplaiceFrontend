import {lazy,Suspense, useEffect} from 'react'
import Navbar from './components/Navbar'
import {Routes,Route, Navigate} from 'react-router-dom'
import { useAuthStore } from './store/authStore'
import {Loader} from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import { useThemeStore } from './store/themeStore';


const Home = lazy(() => import('./components/Home'))
const Login = lazy(() => import('./components/Login'))
const Signup = lazy(() => import('./components/Signup'))
const Profile = lazy(() => import('./components/Profile'))
const Logout = lazy(() => import('./components/Logout'))
const Settings = lazy(() => import('./components/Settings'))
const Dashboard = lazy(() => import('./components/Dashboard'))


function App() {

  const {checkAuth,isCheckingAuth, authUser} = useAuthStore()
  const {theme} = useThemeStore()

  useEffect(()=>{
    checkAuth()
  },[checkAuth])

  if(isCheckingAuth && !authUser){
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader size="50" />
      </div>
    )
  }
  return (
    <div className="" data-theme={theme}>
      <Toaster/>
      
     <Navbar/>

     <Routes>
      <Route path="/" element={ 
        <Suspense fallback={<div>Loading...</div>}>
          <Home/>
        </Suspense>
        }/>
      <Route path="/login" element={
        !authUser
        ?
        <Suspense fallback={<div>Loading...</div>}>
          <Login/>
        </Suspense>
        :
        <Navigate to="/dashboard"/>
        }/>
      <Route path="/signup" element={
        !authUser
        ?
        <Suspense fallback={<div>Loading...</div>}>
          <Signup/>
        </Suspense>
        :
        <Navigate to="/dashboard"/>
        }/>
      <Route path="/profile" element={
        authUser
        ?
        <Suspense fallback={<div>Loading...</div>}>
          <Profile/>
        </Suspense>
        :
        <Navigate to="/login"/>
        }/>
      <Route path="/dashboard/*" element={
        authUser
        ?
        <Suspense fallback={<div>Loading...</div>}>
          <Dashboard/>
        </Suspense>
        :
        <Navigate to="/login"/>
        }/>
      <Route path="/logout" element={
        <Suspense fallback={<div>Loading...</div>}>
          <Logout/>
        </Suspense>
        }/>
      <Route path="/settings" element={
        <Suspense fallback={<div>Loading...</div>}>
          <Settings/>
        </Suspense>
        }/>

     </Routes>
    </div>
  );
}

export default App;
