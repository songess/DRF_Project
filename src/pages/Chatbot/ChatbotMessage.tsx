import React from 'react'
import theme from '../../styles/theme'
import { css } from '@emotion/react'
import { ReactComponent as AiChatbot } from '../../assets/image/aiChatBot.svg'
import ChatbotHeader from '../../components/ChatbotHeader/ChatbotHeader'
import MessageInput from '../../components/MessageInput/MessageInput'
import ChatbotMessageItem from './ChatbotMessageItem'

interface ChatbotChat {
  name: string
  message: string
  time: string
  id: string
}

const DUMMY_CHATBOTCHAT: ChatbotChat[] = [
  {
    name: 'chatbot',
    message: '안녕하세요, 무엇을 도와드릴까요?',
    time: '오후03:11:11',
    id: '1',
  },
  {
    name: '송은수',
    message: '내일 날씨 알려줘.',
    time: '오후03:12:11',
    id: '2',
  },
  {
    name: 'chatbot',
    message: '내일의 날씨는 ...',
    time: '오후03:13:11',
    id: '3',
  },
]

export default function ChatbotMessage() {
  return (
    <div css={chatbotMessageWrapper}>
      <ChatbotHeader header="AI Chatbot" />
      <div css={chatbotMessageStyle}>
        <AiChatbot css={aiChatbotStyle} />
        {DUMMY_CHATBOTCHAT.map((chat) => (
          <ChatbotMessageItem
            message={chat.message}
            name={chat.name}
            time={chat.time}
            key={chat.id}
          />
        ))}
      </div>
      <MessageInput placeholder="메세지 보내기 ..." />
    </div>
  )
}
const aiChatbotStyle = css`
  align-self: center;
  padding: 20px;
`
const chatbotMessageStyle = css`
  padding: 5px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const chatbotMessageWrapper = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 90px;
`
