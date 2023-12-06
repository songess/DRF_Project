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
    major: '컴퓨터공학과',
    name: '송은수',
    isChecked: false,
  },
}
