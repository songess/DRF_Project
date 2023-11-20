import React from 'react'
import theme from '../../styles/theme'
import { css } from '@emotion/react'
import { ReactComponent as ArrowRight } from '../../assets/image/arrowRight.svg'

interface SavedChatProps {
  firstChat: string
  date: string
}

export default function ChatbotSavedChatItem({
  firstChat,
  date,
}: SavedChatProps) {
  return (
    <section css={savedChatWrapper}>
      <p>{firstChat}</p>
      <ArrowRight />
      <div css={savedChatDateStyle}>{date}</div>
    </section>
  )
}
const savedChatDateStyle = css`
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: ${theme.color.subtle_dark};
  font-size: ${theme.textStyle.body_medium.font_size};
  line-height: ${theme.textStyle.body_medium.line_height};
`

const savedChatWrapper = css`
  position: relative;
  padding: 40px 20px;
  margin: 20px;
  border-radius: 20px;
  background-color: ${theme.color.surface};
  display: flex;
  p {
    font-size: ${theme.textStyle.title_medium.font_size};
    line-height: ${theme.textStyle.title_medium.line_height};
    flex-grow: 1;
  }
`
