import React from 'react'
import theme from '../../styles/theme'
import { css } from '@emotion/react'
import ChatbotHeader from '../../components/ChatbotHeader/ChatbotHeader'
import { useAtom } from 'jotai'
import { DUMMY_friends, type UserInterface } from '../../util/store'
import UserListCard from '../../components/UserListCard/UserListCard'
import IconInput from '../../components/IconInput/IconInput'

export default function NewChat() {
  const [DUMMY_FRIENDS] = useAtom(DUMMY_friends)
  const cardClickHandler = (friend: UserInterface, idx: number) => {
    console.log(friend)
  }
  return (
    <div css={newchatWrapper}>
      <ChatbotHeader header="대화상대 선택" />
      <section css={friends}>
        <div css={searchFriendInput}>
          <IconInput whichIcon="search" placeholder="이름,학번 입력" />
        </div>
        <p css={numberOfFriends}>친구 {DUMMY_FRIENDS.length}</p>
        {DUMMY_FRIENDS.map((friend, idx) => (
          <UserListCard
            image={friend.img}
            major={friend.major}
            name={friend.name}
            key={friend.id}
            onClick={() => {
              cardClickHandler(friend, idx)
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
