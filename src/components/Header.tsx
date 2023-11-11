import React, { useContext, useEffect } from 'react'
import Button from './UI/Button'
import cl from './Header.module.scss'
import { DrawingPinFilledIcon, ExitIcon } from '@radix-ui/react-icons'
import { Context } from '..'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const {store} = useContext(Context)
  const [cookies, setCookie, removeCookie] = useCookies(['token', 'login'])
  const navigate = useNavigate()

  const onClickFunc = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    store.hidden = !store.hidden
    console.log(store.hidden)
  }

  const logout = () => {
    removeCookie('token')
    removeCookie('login')

    navigate('/')
  }

  return (
    <div className={cl.header}>
        <div className={cl.account}>
          <span>{cookies.login}</span>
          <Button onClick={logout}>
            <ExitIcon />
          </Button>
        </div>
        <div className={cl.header_text}>COFFEE TODO <DrawingPinFilledIcon className={cl.drawing_pin} /></div>
        <div className={cl.header_button}>
            <Button children={"TODO create"} onClick={onClickFunc} />
        </div>
    </div>
  )
}
