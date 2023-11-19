import React from 'react'
import theme from '../../styles/theme'
import { css } from '@emotion/react'
import { ReactComponent as ShowStage1 } from '../../assets/image/showStage1.svg'
import { ReactComponent as ArrowLeft } from '../../assets/image/arrowLeft.svg'
import { ReactComponent as Mail } from '../../assets/image/mail.svg'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'

export default function SignUp_1() {
  const navigate = useNavigate()
  return (
    <section css={suWrapper}>
      <div
        css={goBack}
        onClick={() => {
          navigate(-1)
        }}
      >
        <ArrowLeft />
      </div>
      <ShowStage1 />
      <Mail />
      <div css={su1HeaderStyle}>세인트 이메일 인증을 해주세요</div>
      <div css={su1ContentStyle}>
        회원가입을 위해 <br />
        학교이메일 인증이 필요해요
      </div>
      <Input
        isIconVisible={false}
        isValid={false}
        touched={false}
        type="email"
        placeholder="이메일"
      />
      <Button
        backgroundColor="primary"
        color="white"
        size="medium"
        width="100%"
        onClick={() => {
          navigate('/signup_2')
        }}
      >
        계속
      </Button>
    </section>
  )
}

const goBack = css`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 5px 5px 0 5px;
  border-radius: 12px;
  &:hover {
    background-color: ${theme.color.background};
  }
`

const su1HeaderStyle = css`
  font-size: ${theme.textStyle.headline_small.font_size};
  line-height: ${theme.textStyle.headline_small.line_height};
`

const su1ContentStyle = css`
  font-size: ${theme.textStyle.body_medium.font_size};
  line-height: ${theme.textStyle.body_medium.line_height};
  color: ${theme.color.subtle_light};
  text-align: center;
`

const suWrapper = css`
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
