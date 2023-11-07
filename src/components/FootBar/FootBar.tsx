import React from 'react'
import { css } from '@emotion/react'
import theme from '../../styles/theme'
import { Link } from 'react-router-dom'
import { ReactComponent as Category } from '../../assets/image/category.svg'
import { ReactComponent as Profile } from '../../assets/image/profile.svg'
import { ReactComponent as SunFog } from '../../assets/image/sunFog.svg'
import { ReactComponent as Chat } from '../../assets/image/chat.svg'

export default function FootBar() {
  return (
    <footer css={footbarWrapper}>
      <Link to="/friend" css={linkWrap}>
        <Profile css={footbarbutton} />
      </Link>
      <Link to="/chat" css={linkWrap}>
        <Chat css={footbarbutton} />
      </Link>
      <Link to="/chatbot" css={linkWrap}>
        <SunFog css={footbarbutton} />
      </Link>
      <Link to="/more" css={linkWrap}>
        <Category css={footbarbutton} />
      </Link>
    </footer>
  )
}

const footbarWrapper = css`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${theme.color.background};
  display: flex;
  justify-content: center;
  align-items: center;
`

const footbarbutton = css`
  color: ${theme.color.subtle_dark};
  &:hover {
    color: ${theme.color.primary_subtle};
  }
`
const linkWrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 20px;
  &:hover {
    background-color: ${theme.color.thick_primary_subtle};
  }
`
