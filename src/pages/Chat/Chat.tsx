import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import theme from '../../styles/theme'
import FootBar from '../../components/FootBar/FootBar'
import MainHeader from '../../components/MainHeader/MainHeader'
import ChatListItem from './ChatListItem'
import useHeaderButton from '../../hooks/useHeaderButton'
import IconInput from '../../components/IconInput/IconInput'
import UpdateModal from '../../components/Modal/UpdateModal'
import { ReactComponent as ChatSvg } from '../../assets/image/chat.svg'
import { ReactComponent as TeamChatSvg } from '../../assets/image/teamChat.svg'
import { useNavigate } from 'react-router-dom'

interface ChatType {
  name: string
  image: string
  lastMessage: string
  time: string
  id: string
  numberOfUnreadMessage: number
}

const DUMMY_CHAT: ChatType[] = [
  {
    name: '채원',
    image: 'defaultImage.jpeg',
    lastMessage: '혹시 시간 되시나요?',
    time: '오후 10:34:01',
    id: '1',
    numberOfUnreadMessage: 3,
  },
  {
    name: '학림',
    image: 'defaultImage.jpeg',
    lastMessage: '아까 ㅈㄴ 어이없었음',
    time: '오후 10:32:01',
    id: '2',
    numberOfUnreadMessage: 10,
  },
  {
    name: '주혁',
    image: 'defaultImage.jpeg',
    lastMessage: '그래서 어떻게 하면 되는데',
    time: '오후 09:34:01',
    id: '3',
    numberOfUnreadMessage: 3,
  },
]

export default function Chat() {
  const {
    showSearchInput,
    headerClickHandler,
    setIsChatModalOpen,
    isChatModalOpen,
  } = useHeaderButton()
  const navigate = useNavigate()
  const [DUMMY_SHOWCHAT, setDUMMY_SHOWCHAT] = useState<ChatType[]>(DUMMY_CHAT)
  const searchChatHandler = () => {
    let searchInput = document.querySelector<HTMLInputElement>('#search')
    if (searchInput) {
      console.log('hello')
      const searchValue = searchInput.value
      const searchResult = DUMMY_CHAT.filter((friend) => {
        return friend.name.includes(searchValue)
      })
      if (searchValue === '') {
        setDUMMY_SHOWCHAT(DUMMY_CHAT)
      } else {
        setDUMMY_SHOWCHAT(searchResult)
      }
    }
  }
  useEffect(() => {
    const searchInput = document.querySelector<HTMLInputElement>('#search')
    if (searchInput) {
      searchInput.focus()
    }
  }, [showSearchInput])
  return (
    <div css={chatWrapper}>
      <UpdateModal
        isOpen={isChatModalOpen}
        onClear={() => setIsChatModalOpen((p) => !p)}
      >
        <UpdateModal.Header>새로운 채팅</UpdateModal.Header>
        <UpdateModal.Content>
          <div
            css={modalCard}
            onClick={() => {
              navigate('/newchat')
            }}
          >
            <ChatSvg />
            <p>일반 채팅</p>
          </div>
          <div
            css={modalCard}
            onClick={() => {
              navigate('/newchatgroup')
            }}
          >
            <TeamChatSvg />
            <p>팀 채팅</p>
          </div>
        </UpdateModal.Content>
      </UpdateModal>
      <MainHeader
        headerName="채팅"
        buttonNames={['search', 'chat', 'filter']}
        onClick={headerClickHandler}
      />
      <section css={chatSection}>
        {showSearchInput && (
          <div css={searchInputStyle}>
            <IconInput
              placeholder="검색"
              whichIcon="search"
              id="search"
              onChange={searchChatHandler}
            />
          </div>
        )}
        {DUMMY_SHOWCHAT.map((chat) => (
          <ChatListItem
            image={chat.image}
            lastMessage={chat.lastMessage}
            name={chat.name}
            numberOfUnreadMessage={chat.numberOfUnreadMessage}
            time={chat.time.slice(0, chat.time.length - 3)}
            key={chat.id}
            onClick={() => {
              navigate(`/chat/${chat.id}`)
            }}
          />
        ))}
      </section>
      <FootBar />
    </div>
  )
}

const chatSection = css`
  flex-grow: 1;
`

const chatWrapper = css`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const searchInputStyle = css`
  padding: 10px 20px;
`

const modalCard = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  gap: 5px;
  flex-grow: 1;
  p {
    font-size: ${theme.textStyle.body_small.font_size};
    line-height: ${theme.textStyle.body_small.line_height};
  }
  &:hover {
    background-color: ${theme.color.background};
    cursor: pointer;
  }
`
