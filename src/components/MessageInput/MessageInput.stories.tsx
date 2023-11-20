import type { Meta, StoryObj } from '@storybook/react'
import MessageInput from './MessageInput'

const meta: Meta<typeof MessageInput> = {
  title: 'MyComponent/MessageInput',
  component: MessageInput,

}

export default meta
type Story = StoryObj<typeof meta>

export const Input: Story = {
  args: {
    placeholder: '메세지 보내기...',
  },
}
