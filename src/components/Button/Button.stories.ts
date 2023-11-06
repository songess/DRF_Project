import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'MyComponent/Button',
  component: Button,
  argTypes: {
    // buttonType: {
    //   color: {
    //     options: ['primary', 'white', 'black'],
    //     control: { type: 'radio' },
    //   },
    //   backgroundColor: {
    //     options: ['primary', 'primary_subtle', 'background'],
    //     control: { type: 'radio' },
    //   },
    // },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'small',
    width: 'auto',
    children: '안녕하세요',
    backgroundColor: 'primary',
    color: 'white',
  },
}
