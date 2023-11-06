import type { Meta, StoryObj } from '@storybook/react'
import IconInput from './IconInput'

const meta: Meta<typeof IconInput> = {
  title: 'MyComponent/IconInput',
  component: IconInput,
  argTypes: {
    whichIcon: {
      options: ['search', 'check'],
      control: { type: 'radio' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Input: Story = {
  args: {
    placeholder: '검색어를 입력해주세요',
    whichIcon: 'search',
  },
}
