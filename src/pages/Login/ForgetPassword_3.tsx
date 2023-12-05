import React from 'react'
import theme from '../../styles/theme'
import { css } from '@emotion/react'
import { ReactComponent as ShowStage3 } from '../../assets/image/showStage3.svg'
import { ReactComponent as ArrowLeft } from '../../assets/image/arrowLeft.svg'
import { ReactComponent as Mail } from '../../assets/image/mail.svg'
import Button from '../../components/Button/Button'
import PasswordValidForm from './PasswordValidForm'
import { useNavigate } from 'react-router-dom'

export default function ForgetPassword_3() {
  const navigate = useNavigate()
  return (
    <section css={fp3Wrapper}>
      <div
        css={goBack}
        onClick={() => {
          navigate(-1)
        }}
      >
        <ArrowLeft />
      </div>
      <ShowStage3 />
      <Mail />
      <div css={fp3HeaderStyle}>비밀번호 초기화</div>
      <div css={fp3ContentStyle}>새로 만들 비밀번호를 입력해주세요</div>
      <PasswordValidForm />
      <Button
        backgroundColor="primary"
        color="white"
        size="medium"
        width="100%"
        onClick={() => {
          navigate('/login')
        }}
      >
        초기화
      </Button>
    </section>
  )
}
const goBack = css`
  position: absolute;
  padding: 5px 5px 0 5px;
  border-radius: 10px;
  top: 20px;
  left: 20px;
  &:hover {
    background-color: ${theme.color.background};
  }
`

const fp3ContentStyle = css`
  font-size: ${theme.textStyle.body_medium.font_size};
  line-height: ${theme.textStyle.body_medium.line_height};
  color: ${theme.color.subtle_light};
`
const fp3HeaderStyle = css`
  font-size: ${theme.textStyle.headline_small.font_size};
  line-height: ${theme.textStyle.headline_small.line_height};
`

const fp3Wrapper = css`
  position: relative;
  padding: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
`
