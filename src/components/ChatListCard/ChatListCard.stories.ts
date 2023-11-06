import type { Meta, StoryObj } from '@storybook/react'

import ChatListCard from './ChatListCard'

const meta: Meta<typeof ChatListCard> = {
  title: 'MyComponent/ChatListCard',
  component: ChatListCard,
}

export default meta
type Story = StoryObj<typeof meta>

export const Chat: Story = {
  args: {
    image: 'defaultImage.jpeg',
    lastMessage: '배고파요',
    name: '송은수',
    numberOfUnreadmessage: 3,
    time: '오전 10:34',
  },
}
