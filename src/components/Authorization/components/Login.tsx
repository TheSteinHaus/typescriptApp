import React from 'react'

import cl from './Login.module.scss'
import Input from '../../UI/Input'
import Button from '../../UI/Button'

export default function Login() {
  return (
    <div className={cl.login}>
        <Input />
        <Input />
        <p>Don't have an account? <span>Click here!</span></p>
        <Button />
    </div>
  )
}
