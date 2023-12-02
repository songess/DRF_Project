import React from 'react'
import theme from '../../styles/theme'
import { css } from '@emotion/react'
import Header from '../../components/ChatbotHeader/ChatbotHeader'
import IconInput from '../../components/IconInput/IconInput'

export default function FindFriend() {//친구추가 작업중
  return (
    <div css={findfriendWrapper}>
      <Header header='학번으로 친구추가'/>
      <IconInput whichIcon='check'/>
    </div>
  )
}

const findfriendWrapper = css`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`