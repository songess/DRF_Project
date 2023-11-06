import type { Meta, StoryObj } from '@storybook/react'

import UserListCard from './UserListCard'

const meta: Meta<typeof UserListCard> = {
  title: 'MyComponent/UserListCard',
  component: UserListCard,
}

export default meta
type Story = StoryObj<typeof meta>

export const User: Story = {
  args: {
    major: '컴퓨터공학과',
    image: 'defaultImage.jpeg',
    name: '송은수',
  },
}
