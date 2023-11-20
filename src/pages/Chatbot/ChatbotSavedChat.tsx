import React from 'react'
import theme from '../../styles/theme'
import { css } from '@emotion/react'
import { ReactComponent as AiChatbot } from '../../assets/image/aiChatBot.svg'
import ChatbotHeader from '../../components/ChatbotHeader/ChatbotHeader'
import ChatbotSavedChatItem from './ChatbotSavedChatItem'

interface SavedChat {
  firstChat: string
  date: string
  id: string
}

const DUMMY_SAVEDCHAT: SavedChat[] = [
  { firstChat: '내일 날씨 알려줘.', date: '15 May 2023', id: '1' },
  { firstChat: '10월 5일 날씨 알려줘.', date: '1 Oct 2023', id: '2' },
]

export default function ChatbotSavedChat() {
  return (
    <div>
      <ChatbotHeader header="저장된 기록" />
      {DUMMY_SAVEDCHAT.map((chat) => (
        <ChatbotSavedChatItem
          date={chat.date}
          firstChat={chat.firstChat}
          key={chat.id}
        />
      ))}
    </div>
  )
}
