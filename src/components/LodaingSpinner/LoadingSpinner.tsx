import React from 'react'
import theme from '../../styles/theme'
import { css } from '@emotion/react'
export default function LoadingSpinner() {
  return (
    <div css={spinner_overlay}>
      <div css={spinner_ring}></div>
    </div>
  )
}

const spinner_overlay = css`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(128,128,128,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`

const spinner_ring = css`
  display: inline-block;
  width: 64px;
  height: 64px;
  &::after {
    content: ' ';
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid ${theme.color.thick_primary};
    border-color: ${theme.color.thick_primary} transparent ${theme.color.thick_primary} transparent;
    animation: ring 2s linear infinite;
  }
  @keyframes ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
