import React from 'react'
import theme from '../../styles/theme'
import { css } from '@emotion/react'
import { ReactComponent as ArrowLeft } from '../../assets/image/arrowLeft.svg'
import { useNavigate } from 'react-router-dom'

interface HeaderProps {
  header: string
}

export default function ChatbotHeader({ header }: HeaderProps) {
  const navigate = useNavigate()
  return (
    <header css={chatbotHeaderWrapper}>
      <div
        css={goBack}
        onClick={() => {
          navigate(-1)
        }}
      >
        <ArrowLeft />
      </div>
      <p>{header}</p>
    </header>
  )
}
const goBack = css`
  position: absolute;
  left: 20px;
  top: 40px;
  transform: translate(-50%, -50%);
  padding: 5px 5px 0 5px;
  border-radius: 5px;
  &:hover {
    background-color: ${theme.color.background};
  }
`

const chatbotHeaderWrapper = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${theme.color.subtle_light};
  height: 80px;
  p {
    font-size: ${theme.textStyle.headline_small.font_size};
    line-height: ${theme.textStyle.headline_small.line_height};
  }
`
