import React, { useState } from 'react'
import { css } from '@emotion/react'
import LoginInput from '../../components/Input/LoginInput'
import { VALIDATOR_MINLENGTH } from '../../util/validator'

type InputType = 'password' | 'email' | 'text'
interface InputInfo {
  value: string
  isValid: boolean
  touched: boolean
}

export default function PasswordValidForm() {
  const [password, setPassword] = useState<string>('')
  const [passwordCheck, setPasswordcheck] = useState<string>('')

  const onpasswordChange = (type: InputType, val: InputInfo) => {
    setPassword((p) => val.value)
  }
  const onpasswordCheckChange = (type: InputType, val: InputInfo) => {
    setPasswordcheck((p) => val.value)
  }
  return (
    <div css={passwordValidFormStyle}>
      <LoginInput
        errorMessage="8자이상 입력하세요"
        isIconVisible={true}
        type="password"
        validator={[VALIDATOR_MINLENGTH(8)]}
        onInputChange={onpasswordChange}
        placeholder='비밀번호'
      />
      <LoginInput
        errorMessage="비밀번호가 일치하지 않습니다."
        isIconVisible={true}
        type="password"
        validator={[VALIDATOR_MINLENGTH(8)]}
        onInputChange={onpasswordCheckChange}
        placeholder='비밀번호 확인'
      />
    </div>
  )
}

const passwordValidFormStyle = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`
