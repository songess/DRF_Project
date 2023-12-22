import React, { useEffect, useState } from 'react'
import theme from '../../styles/theme'
import { css } from '@emotion/react'
import Header from '../../components/ChatbotHeader/ChatbotHeader'
import IconInput from '../../components/IconInput/IconInput'
import { useNavigate, useParams } from 'react-router-dom'
import { useAtom } from 'jotai'
import {
  DUMMY_Allusers,
  DUMMY_friends,
  type UserInterface,
} from '../../util/store'
import Button from '../../components/Button/Button'
import PillModal from '../../components/Modal/PillModal'

export default function FindFriend() {
  const navigate = useNavigate()
  const params = useParams().whichtofind
  const [DUMMY_ALLUSER] = useAtom<UserInterface[]>(DUMMY_Allusers)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [DUMMY_FRIENDS, setDUMMY_FRIENDS] = useAtom(DUMMY_friends)
  const [isAlreadyFriends, setIsAlreadyFriends] = useState<boolean>(false)
  const [FindedUser, setFindedUser] = useState<UserInterface[]>([])
  const findFriendHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (params === '이름') {
      const findResult = DUMMY_ALLUSER.filter((friend) => friend.name === value)
      setFindedUser(findResult)
      DUMMY_FRIENDS.forEach((friend) => {
        if (findResult.length > 0 && friend.name === findResult[0].name) {
          //동명이인 없음 가정
          setIsAlreadyFriends(true)
        }
      })
    } else {
      //params==='학번'
      const findResult = DUMMY_ALLUSER.filter(
        (friend) => friend.studentId === value,
      )
      setFindedUser(findResult)
      DUMMY_FRIENDS.forEach((friend) => {
        if (findResult.length > 0 && friend.name === findResult[0].name) {
          setIsAlreadyFriends(true)
        }
      })
    }
    if (value === '') {
      setIsAlreadyFriends(false)
    }
  }
  const buttonHandler = () => {
    if (!isAlreadyFriends) {
      setIsAlreadyFriends(true)
      setDUMMY_FRIENDS((p: UserInterface[]) => [...p, FindedUser[0]])
      setIsOpen(true)
    } else {
      navigate('/friend')
    }
  }
  useEffect(() => {
    const inputFocus = document.querySelector<HTMLInputElement>('#search')
    if (inputFocus) {
      inputFocus.focus()
    }
  }, [])
  console.log(isOpen)
  return (
    <div css={findfriendWrapper}>
      <PillModal content="친구추가 완료!" isOpen={isOpen} />
      <Header header={`${params}으로 친구추가`} />
      <IconInput
        whichIcon="check"
        id="search"
        placeholder={`${params}를 입력하세요`}
        onChange={findFriendHandler}
      />
      {FindedUser.map((friend: UserInterface) => (
        <div css={friendCard} key={friend.phoneNumber}>
          <img src="/defaultImage.jpeg" alt="profile" width={50} height={50} />
          <div css={friendName}>{friend.name}</div>
          <Button
            backgroundColor="primary"
            color="white"
            size="medium"
            onClick={buttonHandler}
          >
            {isAlreadyFriends ? '1:1채팅' : '친구추가'}
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
