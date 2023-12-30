import React from 'react'
import theme from '../../styles/theme'
import { css } from '@emotion/react'

interface Chatting {
  content: string
  time: string
  id: string
  from: string
}

export default function OpponentChat({ content, time, id, from }: Chatting) {
  return (
    <section css={chattingWrapper}>
      <div css={chatContent}>{content}</div>
      <div css={chatTime}>{time.slice(3, time.length - 3)}</div>
    </section>
  )
}

const chatTime = css`
  font-size: ${theme.textStyle.body_small.font_size};
  line-height: ${theme.textStyle.body_small.line_height};
  align-self: flex-start;
`

const chatContent = css`
  font-size: ${theme.textStyle.body_large.font_size};
  line-height: ${theme.textStyle.body_large.line_height};
`

const chattingWrapper = css`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  gap: 5px;
  padding: 10px;
  background-color: ${theme.color.white};
  color: ${theme.color.black};
`
