import React from 'react'
import cl from './Login.module.scss'

import Input from '../../UI/Input'
import Button from '../../UI/Button'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className={cl.login}>
      <p className={cl.login_title}>SignUp</p>
      <Input placeholder="Email" />
      <Input placeholder="Login" />
      <Input placeholder="Password" />
      <p className={cl.login_account_text}>Already have an account? <Link to="/"><span>Click here!</span></Link></p>
      <Button children="SignUp" />
    </div>
  )
}
