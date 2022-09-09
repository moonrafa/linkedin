import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@material-ui/core'

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="header__option">
      {Icon && <Icon className="header__option__icon" />}
      {avatar && <Avatar className="header__option__icon/>" src={avatar} />}
      <h3 className="header__option__title">{title}</h3>
    </div>
  )
}

export default HeaderOption
