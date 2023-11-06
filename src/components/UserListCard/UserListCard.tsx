import React from 'react'
import theme from '../../styles/theme'
import { css } from '@emotion/react'

interface UserListProps {
  image: string
  name: string
  major: string
  onClick: () => void
}

export default function UserListCard({
  image,
  name,
  major,
  onClick,
}: UserListProps) {
  return (
    <div css={userWrapper} onClick={onClick}>
      <img src={image} alt="profile" css={userImage} />
      <div css={userInfo}>
        <p css={userName}>{name}</p>
        <p css={usermajor}>{major}</p>
      </div>
    </div>
  )
}

const userWrapper = css`
  display: flex;
  padding-left: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  gap: 10px;
  &:hover {
    background-color: ${theme.color.primary_subtle};
  }
`

const userImage = css`
  width: 40px;
  height: 40px;
  border-radius: 10px;
`

const userInfo = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1px;
`

const userName = css`
  color: ${theme.color.normal};
  font-size: ${theme.textStyle.body_medium.font_size};
  line-height: ${theme.textStyle.body_medium.line_height};
`

const usermajor = css`
  color: ${theme.color.subtle_light};
  font-size: ${theme.textStyle.body_small.font_size};
  line-height: ${theme.textStyle.body_small.line_height};
`
