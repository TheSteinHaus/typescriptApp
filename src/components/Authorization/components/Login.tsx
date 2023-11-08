import React, { useEffect, useState } from 'react'
import axios from 'axios'

import cl from './Login.module.scss'
import Input from '../../UI/Input'
import Button from '../../UI/Button'
import { Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  function submit() {
    const data = {email: email, password: password}
    axios.post('http://localhost:7000/auth/login', data)
      .then(response => console.log(response.data))
  }

  return (
    <div className={cl.login}>
        <p className={cl.login_title}>Login</p>
        <Input
          value={email}
          onChange={(e : any) => setEmail(e.target.value)} 
          placeholder="Email"
        />
        <Input
          value={password}
          onChange={(e : any) => setPassword(e.target.value)}  
          placeholder="Password"
        />
        <p className={cl.login_account_text}>Don't have an account? <Link to="/registration"><span>Click here!</span></Link></p>
        <Button
          onClick={submit} 
          children="Login" 
        />
    </div>
  )
}
