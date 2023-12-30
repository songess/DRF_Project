import React from 'react'
import theme from '../../styles/theme'
import { css } from '@emotion/react'

interface ItemProps {
  name: string
  image: string
  lastMessage: string
  time: string
  numberOfUnreadMessage: number
  onClick: () => void
}

export default function ChatListItem({
  name,
  image,
  lastMessage,
  time,
  numberOfUnreadMessage,
  onClick,
}: ItemProps) {
  return (
    <section css={chatListItemWrapper} onClick={onClick}>
      <img src={image} alt="profile" css={itemImageStyle} />
      <div css={itemContent}>
        <div css={itemNameStyle}>{name}</div>
        <div css={itemMessageStyle}>{lastMessage}</div>
      </div>
      <div css={itemInfo}>
        <div css={itemTimeStyle}>{time}</div>
        <div css={itemNumberStyle}>{numberOfUnreadMessage}</div>
      </div>
    </section>
  )
}

const itemNumberStyle = css`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  text-align: center;
  font-size: ${theme.textStyle.body_small.font_size};
  line-height: ${theme.textStyle.body_small.line_height};
  background-color: ${theme.color.primary};
  color: ${theme.color.white};
`

const itemTimeStyle = css`
  font-size: ${theme.textStyle.body_medium.font_size};
  line-height: ${theme.textStyle.body_medium.line_height};
  color: ${theme.color.subtle_light};
`

const itemInfo = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: end;
`
const itemMessageStyle = css`
  font-size: ${theme.textStyle.body_medium.font_size};
  line-height: ${theme.textStyle.body_medium.line_height};
  color: ${theme.color.subtle_light};
`

const itemContent = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`

const itemNameStyle = css`
  font-size: ${theme.textStyle.title_small.font_size};
  line-height: ${theme.textStyle.title_small.line_height};
`

const itemImageStyle = css`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`

const chatListItemWrapper = css`
  padding: 10px 20px;
  display: flex;
  gap: 10px;
  &:hover {
    background-color: ${theme.color.primary_subtle};
  }
`
