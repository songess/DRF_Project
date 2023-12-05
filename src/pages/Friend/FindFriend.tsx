import React, { useEffect, useState } from 'react'
import theme from '../../styles/theme'
import { css } from '@emotion/react'
import Header from '../../components/ChatbotHeader/ChatbotHeader'
import IconInput from '../../components/IconInput/IconInput'
import { useParams } from 'react-router-dom'
import { useAtom } from 'jotai'
import { DUMMY_Allusers } from '../../util/store'
import Button from '../../components/Button/Button'

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
  const [FindedUser, setFindedUser] = useState<User[]>([])
  const findFriendHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    console.log(value)
    if (params === '이름') {
      const findResult = DUMMY_ALLFRIENDS.filter(
        (friend) => friend.이름 === value,
      )
      setFindedUser(findResult)
    } else {
      //params==='학번'
      const findResult = DUMMY_ALLFRIENDS.filter(
        (friend) => friend.학번 === value,
      )
      setFindedUser(findResult)
    }
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
        onChange={findFriendHandler}
      />
      {FindedUser.map((friend: User) => (
        <div css={friendCard} key={friend.전화번호}>
          <img src="/defaultImage.jpeg" alt="profile" width={50} height={50}/>
          <div css={friendName}>{friend.이름}</div>
          <Button backgroundColor="primary" color="white" size="medium">
            친구추가
          </Button>
        </div>
      ))}
    </div>
  )
}
const friendName = css`
  font-size: ${theme.textStyle.body_medium};
  line-height: ${theme.textStyle.body_medium};
`
const friendCard = css`
  width: 300px;
  height: 200px;
  background-color: ${theme.color.background};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  img {
    border-radius: 10px;
  }
`

const findfriendWrapper = css`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
`
