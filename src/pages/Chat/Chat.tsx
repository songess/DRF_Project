import React from 'react'
import { css } from '@emotion/react'
import FootBar from '../../components/FootBar/FootBar'
import MainHeader from '../../components/MainHeader/MainHeader'

export default function Chat() {
  return (
    <div css={chatWrapper}>
      <MainHeader
        headerName="채팅"
        buttonNames={['search', 'chat', 'filter']}
      />
      <FootBar />
    </div>
  )
}

const chatWrapper = css`
  position: relative;
  width: 100%;
  height: 100%;
`
