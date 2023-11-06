import React from 'react'

import cl from './Login.module.scss'
import Input from '../../UI/Input'
import Button from '../../UI/Button'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className={cl.login}>
        <p className={cl.login_title}>Login</p>
        <Input placeholder="Login" />
        <Input placeholder="Password" />
        <p className={cl.login_account_text}>Don't have an account? <Link to="/registration"><span>Click here!</span></Link></p>
        <Button children="Login" />
    </div>
  )
}
