import React from 'react'
import theme from '../../styles/theme'
import { css } from '@emotion/react'
import ChatbotHeader from '../../components/ChatbotHeader/ChatbotHeader'
import { useAtom } from 'jotai'
import { DUMMY_chat, DUMMY_friends, type UserInterface } from '../../util/store'
import UserListCard from '../../components/UserListCard/UserListCard'
import IconInput from '../../components/IconInput/IconInput'
import { useNavigate } from 'react-router-dom'

export default function NewChat() {
  const navigate = useNavigate()
  const [DUMMY_FRIENDS] = useAtom(DUMMY_friends)
  const [DUMMY_CHAT, setDUMMY_CHAT] = useAtom(DUMMY_chat)
  const cardClickHandler = (friend: UserInterface) => {
    let iteration = 0
    DUMMY_CHAT.forEach((chat) => {
      if (chat.opponent === friend.name) {
        alert('이미 존재하는 채팅방입니다.')
        return
      }
      iteration++
    })
    if (iteration === DUMMY_CHAT.length) {
      setDUMMY_CHAT((prev) => {
        const newChatRoom = {
          opponent: friend.name,
          id: String(DUMMY_CHAT.length + 1),
          chatting: [],
        }
        const newChatRooms = prev.concat(newChatRoom)
        return newChatRooms
      })
      navigate(`/chat/${DUMMY_CHAT.length + 1}`)
    }
  }
  return (
    <div css={newchatWrapper}>
      <ChatbotHeader header="대화상대 선택" />
      <section css={friends}>
        <div css={searchFriendInput}>
          <IconInput whichIcon="search" placeholder="이름,학번 입력" />
        </div>
        <p css={numberOfFriends}>친구 {DUMMY_FRIENDS.length}</p>
        {DUMMY_FRIENDS.map((friend) => (
          <UserListCard
            image={friend.img}
            major={friend.major}
            name={friend.name}
            key={friend.id}
            onClick={() => {
              cardClickHandler(friend)
            }}
          />
        ))}
      </section>
    </div>
  )
}
const searchFriendInput = css`
  padding: 20px;
`

const newchatWrapper = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

const friends = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 90px;
`

const numberOfFriends = css`
  padding: 0 20px 20px 20px;
  font-size: ${theme.textStyle.body_large.font_size};
  line-height: ${theme.textStyle.body_large.line_height};
`
