import React from 'react'
import theme from '../../styles/theme'
import { css } from '@emotion/react'
import ChatbotHeader from '../../components/ChatbotHeader/ChatbotHeader'
import { useAtom } from 'jotai'
import {
  DUMMY_CheckList,
  DUMMY_friends,
  type UserInterface,
} from '../../util/store'
import IconInput from '../../components/IconInput/IconInput'
import ChatListCard from '../../components/ChatListCard/ChatListCard'
import { ReactComponent as CheckSquare } from '../../assets/image/checkSquare.svg'

export default function NewChatGroup() {
  const [DUMMY_FRIENDS] = useAtom(DUMMY_friends)
  const [DUMMY_CHECKLIST, setDUMMY_CHECKLIST] = useAtom(DUMMY_CheckList)
  const cardClickHandler = (friend: UserInterface) => {
    if (!DUMMY_CHECKLIST.includes(friend.id)) {
      setDUMMY_CHECKLIST((p) => [...p, friend.id])
    } else {
      setDUMMY_CHECKLIST((p) => p.filter((id) => id !== friend.id))
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
          <ChatListCard
            image={friend.img}
            major={friend.major}
            name={friend.name}
            isChecked={DUMMY_CHECKLIST.includes(friend.id)}
            key={friend.id}
            onClick={() => {
              cardClickHandler(friend)
            }}
          />
        ))}
      </section>
      <div css={checkSquareStyle} onClick={()=>{console.log(console.log(DUMMY_CHECKLIST))}}>
        <CheckSquare />
      </div>
    </div>
  )
}
const checkSquareStyle = css`
  position: absolute;
  right: 0;
  top: 40px;
  transform: translate(-50%, -50%);
  padding: 5px 5px 0 5px;
  border-radius: 5px;
  &:hover {
    background-color: ${theme.color.background};
  }
`

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
