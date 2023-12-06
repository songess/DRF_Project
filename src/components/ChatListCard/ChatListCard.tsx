import React from 'react'
import theme from '../../styles/theme'
import { css } from '@emotion/react'
import { ReactComponent as Checkbox } from '../../assets/image/checkbox.svg'
import { ReactComponent as FillCheckbox } from '../../assets/image/fillCheckbox.svg'

interface ChatListCardProps {
  image: string
  name: string
  major: string
  isChecked: boolean
  onClick: () => void
}

export default function ChatListCard({
  image,
  name,
  major,
  isChecked,
  onClick,
}: ChatListCardProps) {
  return (
    <div css={chatWrapper} onClick={onClick}>
      <img src={image} alt="profile" css={chatImage} />
      <div css={chatInfo}>
        <p css={chatName}>{name}</p>
        <p css={chatLastContent}>{major}</p>
      </div>
      <footer css={chatFooter}>
        {!isChecked ? <Checkbox /> : <FillCheckbox css={squareStyle} />}
      </footer>
    </div>
  )
}
const squareStyle = css`
  color: ${theme.color.primary};
`

const chatFooter = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
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
  &:hover {
    background-color: ${theme.color.primary_subtle};
    cursor: pointer;
  }
`
