import React, { PropsWithChildren } from 'react'
import theme from '../../styles/theme'
import { css } from '@emotion/react'

type Color = 'primary' | 'white' | 'black'
type BackgroundColor =
  | 'primary'
  | 'primary_subtle'
  | 'background'
  | 'subtle_dark'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'small' | 'medium' | 'large'
  width?: 'auto' | '100%'
  color: Color
  backgroundColor: BackgroundColor
}

export default function Button({
  size,
  width = 'auto',
  children,
  color,
  backgroundColor,
  disabled,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const buttonStyle = buttonStyles(width, color, backgroundColor)[size]
  return (
    <button css={buttonStyle} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

const commonStyle = (
  width: string,
  color: Color,
  backgroundColor: BackgroundColor,
) => css`
  border: none;
  width: ${width};
  color: ${theme.color[color]};
  background-color: ${theme.color[backgroundColor]};
  &:hover {
    cursor: pointer;
    background-color: ${backgroundColor === 'background'
      ? theme.color.subtle_light
      : backgroundColor === 'subtle_dark'
      ? '#31313B'
      : backgroundColor === 'primary_subtle'
      ? theme.color.thick_primary_subtle
      : theme.color.thick_primary};
  }
  &:disabled {
    background: #ccc;
    color: #979797;
    border-color: #ccc;
    cursor: not-allowed;
  }
`

const buttonStyles = (
  width: string,
  color: Color,
  backgroundColor: BackgroundColor,
) => ({
  small: css`
    ${commonStyle(width, color, backgroundColor)}
    padding: 8px 12px;
    font-size: ${theme.textStyle.body_medium.font_size};
    line-height: ${theme.textStyle.body_medium.line_height};
    border-radius: 8px;
  `,
  medium: css`
    ${commonStyle(width, color, backgroundColor)}
    padding: 12px 16px;
    font-size: ${theme.textStyle.body_large.font_size};
    line-height: ${theme.textStyle.body_large.line_height};
    border-radius: 12px;
  `,
  large: css`
    ${commonStyle(width, color, backgroundColor)}
    padding: 16px 20px;
    font-size: ${theme.textStyle.title_medium.font_size};
    line-height: ${theme.textStyle.title_medium.line_height};
    border-radius: 16px;
  `,
})
