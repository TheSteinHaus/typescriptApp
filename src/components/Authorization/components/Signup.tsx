import React, { useState } from 'react'
import cl from './Login.module.scss'

import Input from '../../UI/Input'
import Button from '../../UI/Button'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useCookies} from 'react-cookie'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const [cookies, setCookie, removeCookie] = useCookies(['token'])

  function submit() {
    const data = {email: email, password: password, login: login}
    axios.post('http://localhost:7000/auth/registration', data)
      .then(response => setCookie('token', response.data))
      .catch(e => console.log(e))
  }

  return (
    <div className={cl.login}>
      <p className={cl.login_title}>SignUp</p>
      <Input 
        value={email}
        onChange={(e : any) => setEmail(e.target.value)} 
        placeholder="Email" 
      />
      <Input 
        value={login}
        onChange={(e : any) => setLogin(e.target.value)} 
        placeholder="Login" 
      />
      <Input 
        value={password}
        onChange={(e : any) => setPassword(e.target.value)} 
        placeholder="Password" 
      />
      <p className={cl.login_account_text}>Already have an account? <Link to="/"><span>Click here!</span></Link></p>
      <Button 
        onClick={submit}
        children="SignUp" 
      />
    </div>
  )
}
