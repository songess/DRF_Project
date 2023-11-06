import React, { PropsWithChildren } from 'react'
import { css } from '@emotion/react'
import theme from '../styles/theme'

export default function Layout(props: PropsWithChildren) {
  return (
    <div css={layout}>
      <div css={container}>{props.children}</div>
    </div>
  )
}

const layout = css`
  position: fixed;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.color.surface};
`

const container = css`
  max-width: 540px;
  height: 100%;
  max-height: 840px;
  margin: 0 auto;
  background-color: ${theme.color.white};
`
