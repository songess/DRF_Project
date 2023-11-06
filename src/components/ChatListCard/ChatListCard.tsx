import React from 'react'
import theme from '../../styles/theme'
import { css } from '@emotion/react'

interface ChatListCardProps {
  image: string
  name: string
  lastMessage: string
  time: string
  numberOfUnreadmessage: number
}

export default function ChatListCard({
  image,
  name,
  lastMessage,
  time,
  numberOfUnreadmessage,
}: ChatListCardProps) {
  return (
    <div css={chatWrapper}>
      <img src={image} alt="profile" css={chatImage} />
      <div css={chatInfo}>
        <p css={chatName}>{name}</p>
        <p css={chatLastContent}>{lastMessage}</p>
      </div>
      <footer css={chatFooter}>
        <div css={chatTime}>{time}</div>
        <div css={chatNumberOfMessage}>{numberOfUnreadmessage}</div>
      </footer>
    </div>
  )
}

const chatNumberOfMessage = css`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${theme.color.thick_primary};
  color: ${theme.color.white};
  font-size: ${theme.textStyle.body_small.font_size};
  line-height: ${theme.textStyle.body_small.line_height};
  text-align: center;
  vertical-align: middle;
  align-self: end;
`

const chatTime = css`
  color: ${theme.color.subtle_light};
  font-size: ${theme.textStyle.body_small.font_size};
  line-height: ${theme.textStyle.body_small.line_height};
`

const chatFooter = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
`

const chatName = css`
  color: ${theme.color.normal};
  font-size: ${theme.textStyle.title_medium.font_size};
  line-height: ${theme.textStyle.title_medium.line_height};
`

const chatLastContent = css`
  color: ${theme.color.subtle_light};
  font-size: ${theme.textStyle.body_medium.font_size};
  line-height: ${theme.textStyle.body_medium.line_height};
`

const chatInfo = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
`

const chatImage = css`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`

const chatWrapper = css`
  display: flex;
  gap: 16px;
  padding: 5px 20px;
`
