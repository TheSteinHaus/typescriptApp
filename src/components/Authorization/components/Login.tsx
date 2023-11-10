import React, { useEffect, useState } from 'react'
import axios from 'axios'

import cl from './Login.module.scss'
import Input from '../../UI/Input'
import Button from '../../UI/Button'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [cookies, setCookie, removeCookie] = useCookies(['token', 'login'])
  
  function submit() {
    const data = {email: email, password: password}
    axios.post('http://localhost:7000/auth/login', data)
      .then(response => {setCookie('token', response.data.token); setCookie('login', response.data.login)})
      .then(() => window.location.replace('http://localhost:3000/todo'))
      .catch(e => console.log(e))
  }

  return (
    <div className={cl.login}>
        <p className={cl.login_title}>Login</p>
        <Input
          type='email'
          value={email}
          onChange={(e : any) => setEmail(e.target.value)} 
          placeholder="Email"
        />
        <Input
          type='password'
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
