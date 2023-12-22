import React, { useState } from 'react'
import theme from '../../styles/theme'
import { css } from '@emotion/react'
import { ReactComponent as ShowStage1 } from '../../assets/image/showStage1.svg'
import { ReactComponent as ArrowLeft } from '../../assets/image/arrowLeft.svg'
import { ReactComponent as Mail } from '../../assets/image/mail.svg'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import { useModal } from '../../hooks/useModal'
import Modal from '../../components/Modal/Modal'

export default function SignUp_1() {
  const navigate = useNavigate()
  const { isOpen, toggle } = useModal()
  const [email, setEmail] = useState<string>('')
  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submitHandler()
    }
  }
  const submitHandler = () => {
    if (/^\S+@\S+\.\S+$/.test(email)) {
      navigate('/signup_2')
    } else {
      toggle()
    }
  }
  return (
    <section css={suWrapper}>
      <Modal isOpen={isOpen} onClear={toggle}>
        <Modal.Header>이메일 양식오류</Modal.Header>
        <Modal.Content>이메일을 입력해주세요</Modal.Content>
        <Modal.Footer>
          <Button
            backgroundColor="primary"
            color="white"
            size="medium"
            onClick={toggle}
            width='100%'
          >
            확인
          </Button>
        </Modal.Footer>
      </Modal>
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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="이메일"
        onKeyDown={keyDownHandler}
      />
      <Button
        backgroundColor="primary"
        color="white"
        size="medium"
        width="100%"
        onClick={() => {
          submitHandler()
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
