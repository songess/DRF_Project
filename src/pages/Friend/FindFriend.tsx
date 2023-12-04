import React, { useEffect } from 'react'
import theme from '../../styles/theme'
import { css } from '@emotion/react'
import Header from '../../components/ChatbotHeader/ChatbotHeader'
import IconInput from '../../components/IconInput/IconInput'
import { useParams } from 'react-router-dom'
import { useAtom } from 'jotai'
import { DUMMY_Allusers } from '../../util/store'

interface User {
  이름: string
  이메일: string
  학번: string
  전화번호: string
  비밀번호: string
}

export default function FindFriend() {
  const params = useParams().whichtofind
  const [DUMMY_ALLFRIENDS] = useAtom<User[]>(DUMMY_Allusers)
  const friendFindHandler1 = () => {
    console.log('name')
  }
  const friendFindHandler2 = (name: string) => {
    console.log(name)
  }
  useEffect(() => {
    const inputFocus = document.querySelector<HTMLInputElement>('#search')
    if (inputFocus) {
      inputFocus.focus()
    }
  }, [])
  return (
    <div css={findfriendWrapper}>
      <Header header={`${params}으로 친구추가`} />
      <IconInput
        whichIcon="check"
        id="search"
        placeholder={`${params}를 입력하세요`}
        onClick={() => friendFindHandler2('name')}
      />
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
