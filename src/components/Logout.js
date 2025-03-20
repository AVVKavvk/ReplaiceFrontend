import React from 'react'
import { useAuthStore } from '../store/authStore';

function Logout() {
  const { logout} = useAuthStore();
  return (
    <div>Logout</div>
  )
}

export default Logout