import React, { useRef } from 'react'
import theme from '../../styles/theme'
import { css } from '@emotion/react'
import { ReactComponent as ShowStage2 } from '../../assets/image/showStage2.svg'
import { ReactComponent as Mail } from '../../assets/image/mail.svg'
import { ReactComponent as ArrowLeft } from '../../assets/image/arrowLeft.svg'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import Modal from '../../components/Modal/Modal'
import { useModal } from '../../hooks/useModal'
import Input from '../../components/Input/Input'

export default function ForgetPassword_2() {
  const ref = useRef()
  const navigate = useNavigate()
  const { isOpen, toggle } = useModal()
  return (
    <section css={fp2Wrapper}>
      <Modal isOpen={isOpen} onClear={toggle}>
        <Modal.Header>OTP 불일치</Modal.Header>
        <Modal.Content>이메일을 다시 한 번 확인해주세요</Modal.Content>
        <Modal.Footer>
          <Button
            backgroundColor="primary"
            color="white"
            size="medium"
            width="100%"
            onClick={() => {
              toggle()
            }}
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
      <ShowStage2 />
      <Mail />
      <div css={fp2HeaderStyle}>OTP 5자리를 입력해주세요</div>
      <div css={fp2ContentStyle}>이메일로 보낸 OTP 5자리를 입력해주세요.</div>
      <div css={inputStyle}>
        <Input
          isIconVisible={false}
          isValid={true}
          touched={false}
          type="text"
          placeholder="OTP 5자리를 입력하세요"
        />
      </div>
      <Button
        backgroundColor="primary"
        color="white"
        size="medium"
        width="100%"
        onClick={() => {
          navigate('/forgetpassword_3')
        }}
      >
        비밀번호 초기화
      </Button>
    </section>
  )
}
const inputStyle = css``

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

const otpBox = css`
  width: 60px;
  height: 70px;
  border-radius: 12px;
  background-color: ${theme.color.thick_primary_subtle};
  font-size: ${theme.textStyle.headline_medium.font_size};
  line-height: ${theme.textStyle.headline_medium.line_height};
  text-align: center;
  border: none;
  outline: none;
`

const fp2OTPBoxStyle = css`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;
`

const fp2HeaderStyle = css`
  font-size: ${theme.textStyle.headline_small.font_size};
  line-height: ${theme.textStyle.headline_small.line_height};
`
const fp2ContentStyle = css`
  font-size: ${theme.textStyle.body_medium.font_size};
  line-height: ${theme.textStyle.body_medium.line_height};
  color: ${theme.color.subtle_light};
`

const fp2Wrapper = css`
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
