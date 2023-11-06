import type { Meta, StoryObj } from '@storybook/react'

import LoginInput from './LoginInput'
import { VALIDATOR_MINLENGTH } from '../../util/validator'

const meta: Meta<typeof LoginInput> = {
  title: 'MyComponent/LoginInput',
  component: LoginInput,
}

export default meta
type Story = StoryObj<typeof meta>

export const Text: Story = {
  args: {
    isIconVisible: false,
    placeholder: '입력해주세요',
    type: 'email',
    value: '',
    validator: [VALIDATOR_MINLENGTH(6)],
    errorMessage: '6자 이상 입력해주세요',
  },
}

export const Password: Story = {
  args: {
    isIconVisible: true,
    placeholder: '입력해주세요',
    type: 'password',
    value: '',
    validator: [VALIDATOR_MINLENGTH(6)],
    errorMessage: '6자 이상 입력해주세요',
  },
}
