import React, { useEffect, useState } from 'react'
import axios from 'axios'

import cl from './Login.module.scss'
import Input from '../../UI/Input'
import Button from '../../UI/Button'
import { Link } from 'react-router-dom'

export default function Login() {
  const [login, setLogin] = useState('')

  function submit() {
    axios.post('http://localhost:3000', login)
      .then(response => console.log(response.data))
  }

  return (
    <div className={cl.login}>
        <p className={cl.login_title}>Login</p>
        <Input
          value={login}
          onChange={(e : any) => setLogin(e.target.value)} 
          placeholder="Login" 
        />
        <Input placeholder="Password" />
        <p className={cl.login_account_text}>Don't have an account? <Link to="/registration"><span>Click here!</span></Link></p>
        <Button
          onClick={submit} 
          children="Login" 
        />
    </div>
  )
}
