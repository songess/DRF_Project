import React, { Fragment, useEffect, useRef, useState } from 'react'
import { css } from '@emotion/react'
import theme from '../../styles/theme'
import ChatHeader from '../../components/ChatHeader/ChatHeader'
import MessageInput from '../../components/MessageInput/MessageInput'
import { useParams } from 'react-router-dom'
import Mychat from './Mychat'
import OpponentChat from './OpponentChat'
import { useAtom } from 'jotai'
import { DUMMY_chat, LoginUser } from '../../util/store'
import { set } from 'ol/transform'

interface Chatting {
  content: string
  date: string
  time: string
  id: string
  from: string
}

interface ChatRoom {
  chatting: Chatting[]
  opponent: string
  id: string
}

export default function ChatRoom() {
  const [DUMMY_CHAT, setDUMMY_CHAT] = useAtom(DUMMY_chat)
  const params = useParams().roomId
  const [loginUSER] = useAtom(LoginUser)
  const [messageInput, setMessageInput] = useState<string>('')
  const chatRoomRef = useRef<HTMLDivElement>(null)
  // const [date, setDate] = useState<string>('')
  // const [isDateChanged, setIsDateChanged] = useState<boolean>(false)
  let date = ''
  let isDateChanged = false
  const friendIndex = DUMMY_CHAT.findIndex(
    (chatRoom) => chatRoom.id === String(params),
  )
  const submitHandler = () => {
    const newChat = {
      content: messageInput,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      id: String(DUMMY_CHAT[friendIndex].chatting.length + 1),
      from: loginUSER.name,
    }
    setDUMMY_CHAT((prev) => {
      const newChatting = prev[friendIndex].chatting.concat(newChat)
      const newChatRoom = prev[friendIndex]
      newChatRoom.chatting = newChatting
      const newChatRooms = prev
      newChatRooms[friendIndex] = newChatRoom
      return newChatRooms
    })
    setMessageInput('')
  }

  useEffect(() => {
    if (chatRoomRef.current) {
      chatRoomRef.current.scrollTop = chatRoomRef.current.scrollHeight
    }
  })

  useEffect(() => {
    let timeout = setTimeout(() => {
      console.log('hello')
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div css={chatRoomWrapper}>
      <ChatHeader header={DUMMY_CHAT[friendIndex].opponent} key="1" />
      <section css={chatRoomSection} ref={chatRoomRef}>
        {DUMMY_CHAT[friendIndex].chatting.map((chat) => {
          isDateChanged = false
          if (date !== chat.date) {
            date = chat.date
            isDateChanged = true
          }
          if (chat.from === loginUSER.name) {
            return (
              <Fragment key={chat.id}>
                {isDateChanged ? <div css={dateGrid}>{date}</div> : null}
                <Mychat
                  content={chat.content}
                  time={chat.time}
                  id={chat.id}
                  from={chat.from}
                  key={chat.id}
                />
              </Fragment>
            )
          } else {
            return (
              <Fragment key={chat.id}>
                {isDateChanged ? <div css={dateGrid}>{date}</div> : null}
                <OpponentChat
                  content={chat.content}
                  time={chat.time}
                  id={chat.id}
                  from={chat.from}
                  key={chat.id}
                />
              </Fragment>
            )
          }
        })}
      </section>
      <MessageInput
        placeholder="메세지 보내기..."
        value={messageInput}
        onChange={(e) => {
          setMessageInput(e.target.value)
        }}
        onClick={submitHandler}
      />
    </div>
  )
}
const dateGrid = css`
  margin: 10px 0;
  color: ${theme.color.subtle_dark};
  font-size: 12px;
  text-align: center;
  padding: 0 10px;
`

const chatRoomSection = css`
  z-index: 0.1;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  padding-top: 90px;
  gap: 10px;
  align-items: center;
  overflow-y: scroll;
`

const chatRoomWrapper = css`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: ${theme.color.primary_subtle};
`
