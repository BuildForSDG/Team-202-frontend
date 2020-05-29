import React, { useState } from 'react'
import UserLogin from './Login'

const User = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value })

  const handleLogin = (e) => {
    e.preventDefault()
  }

  const handleCreateAccount = (e) => {
    e.preventDefault()
  }

  return (
    <div className="flex justify-center mt-5">
      <UserLogin
        changeHandler={handleChange}
        loginHandler={handleLogin}
        createAccountHandler={handleCreateAccount}
      />
    </div>
  )
}

export default User
