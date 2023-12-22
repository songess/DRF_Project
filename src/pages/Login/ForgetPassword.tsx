import React, {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  useState,
} from 'react'
import { css } from '@emotion/react'
import theme from '../../styles/theme'
import { ReactComponent as ShowStage1 } from '../../assets/image/showStage1.svg'
import { ReactComponent as Mail } from '../../assets/image/mail.svg'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../../assets/image/arrowLeft.svg'
import Modal from '../../components/Modal/Modal'
import { useModal } from '../../hooks/useModal'

export default function ForgetPassword() {
  const navigate = useNavigate()
  const { isOpen, toggle } = useModal()
  const sentence = '비밀번호를 찾기위해\n이메일을 입력해주세요'
  const [email, setEmail] = useState<string>('')
  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const submitHandler = () => {
    if (/^\S+@\S+\.\S+$/.test(email)) {
      navigate('/forgetpassword_2')
    } else {
      toggle()
    }
  }
  const keyDownHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') submitHandler()
  }
  return (
    <section css={forgetPasswordWrapper}>
      <Modal isOpen={isOpen} onClear={toggle}>
        <Modal.Header>이메일 양식 오류</Modal.Header>
        <Modal.Content>올바른 이메일을 작성해주세요</Modal.Content>
        <Modal.Footer>
          <Button
            backgroundColor="primary"
            color="white"
            size="medium"
            width="100%"
            onClick={toggle}
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
      <p css={forgetPasswordS1}>비밀번호를 잊으셨나요?</p>
      <p css={forgetPasswordS2}>{sentence}</p>
      <Input
        isIconVisible={false}
        isValid={true}
        touched={false}
        type="text"
        placeholder="이메일"
        value={email}
        onChange={emailChangeHandler}
        onKeyDown={keyDownHandler}
      />
      <Button
        backgroundColor="primary"
        color="white"
        size="medium"
        width="100%"
        onClick={submitHandler}
      >
        계속
      </Button>
    </section>
  )
}
const forgetPasswordS1 = css`
  font-size: ${theme.textStyle.headline_small.font_size};
  line-height: ${theme.textStyle.headline_small.line_height};
`
const forgetPasswordS2 = css`
  font-size: ${theme.textStyle.body_medium.font_size};
  line-height: ${theme.textStyle.body_medium.line_height};
  color: ${theme.color.subtle_light};
`

const forgetPasswordWrapper = css`
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
