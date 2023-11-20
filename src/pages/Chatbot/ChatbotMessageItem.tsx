import React from 'react'
import theme from '../../styles/theme'
import { css } from '@emotion/react'
import { ReactComponent as ArrowDownSquare } from '../../assets/image/arrowDownSquare.svg'
import { ReactComponent as Copy } from '../../assets/image/copy.svg'

interface ChatbotChat {
  name: string
  message: string
  time: string
}

export default function ChatbotMessageItem({
  name,
  message,
  time,
}: ChatbotChat) {
  if (name === 'chatbot') {
    return (
      <div css={chatbotItemWrapper}>
        <div css={chatbotMessageWrapper}>
          <p>{message}</p>
        </div>
        <div css={chatbotIcons}>
          <Copy />
          <ArrowDownSquare />
        </div>
      </div>
    )
  } else if (name === '송은수') {
    return (
      <div css={myItemWrapper}>
        <div css={myMessageWrapper}>
          <p>{message}</p>
        </div>
      </div>
    )
  } else return <div></div>
}

const chatbotItemWrapper = css`
  display: flex;
  gap: 10px;
  margin-left: 20px;
  align-self: start;
`
const myItemWrapper = css`
  display: flex;
  gap: 10px;
  margin-right: 20px;
  align-self: end;
`

const chatbotIcons = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: ${theme.color.subtle_dark};
`

const chatbotMessageWrapper = css`
  padding: 20px;
  background-color: ${theme.color.surface};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  p {
    font-size: ${theme.textStyle.title_medium.font_size};
    line-height: ${theme.textStyle.title_medium.line_height};
  }
`

const myMessageWrapper = css`
  margin-right: 20px;
  align-self: end;
  padding: 20px;
  background-color: ${theme.color.thick_primary_subtle};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  color: ${theme.color.white};
  p {
    font-size: ${theme.textStyle.title_medium.font_size};
    line-height: ${theme.textStyle.title_medium.line_height};
  }
`
