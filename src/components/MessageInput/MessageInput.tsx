import React from 'react'
import theme from '../../styles/theme'
import { css } from '@emotion/react'
import {ReactComponent as Plus} from "../../assets/image/plus.svg"
import {ReactComponent as Send} from "../../assets/image/send.svg"

interface MessageInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

export default function MessageInput({...props}:MessageInputProps) {
  return (
    <label css={messageInputWrapper}>
      <Plus/>
      <input css={messageInputStyle} {...props}/>
      <Send/>
    </label>
  )
}

const messageInputStyle = css`
  border: none;
  outline: none;
  font-size: ${theme.textStyle.body_large.font_size};
  line-height: ${theme.textStyle.body_large.line_height};
  flex-grow: 1;
`

const messageInputWrapper = css`
  margin: 20px;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  gap: 10px;
  border: 2px solid ${theme.color.subtle_light};
  color: ${theme.color.normal};
`