import React from 'react'
import theme from '../../styles/theme'
import { css } from '@emotion/react'
import { ReactComponent as ArrowLeft } from '../../assets/image/arrowLeft.svg'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Calendar } from '../../assets/image/calendar.svg'
import { ReactComponent as Search } from '../../assets/image/search.svg'

interface HeaderProps {
  header: string
}

export default function ChatHeader({ header }: HeaderProps) {
  const navigate = useNavigate()
  return (
    <header css={chatHeaderWrapper}>
      <div
        css={goBack}
        onClick={() => {
          navigate(-1)
        }}
      >
        <ArrowLeft />
      </div>
      <p>{header}</p>
      <div css={buttonWrapper}>
        <Calendar css={buttonStyle}></Calendar>
        <Search css={buttonStyle}></Search>
      </div>
    </header>
  )
}
const buttonStyle = css`
  color: ${theme.color.black};
  border-radius: 5px;
  &:hover {
    color: ${theme.color.subtle_dark};
    background-color: ${theme.color.background};
  }
`
const buttonWrapper = css`
  display: flex;
  gap: 10px;
`

const goBack = css`
  padding: 5px 5px 0 5px;
  border-radius: 5px;
  &:hover {
    background-color: ${theme.color.background};
  }
`

const chatHeaderWrapper = css`
  z-index: 1;
  position: absolute;
  background-color: ${theme.color.primary_subtle};
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.color.subtle_light};
  height: 80px;
  p {
    font-size: ${theme.textStyle.headline_small.font_size};
    line-height: ${theme.textStyle.headline_small.line_height};
  }
`
