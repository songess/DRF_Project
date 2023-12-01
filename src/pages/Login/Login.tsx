import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import theme from '../../styles/theme'
import { css } from '@emotion/react'
import Modal from '../../components/Modal/Modal'
import '../../styles/modal.css'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

export default function Login() {
  const [isSignUpMode, setIsSignUpMode] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <div css={loginWrapper}>
      <Modal
        isOpen={isModalOpen}
        onClear={() => {
          setIsModalOpen((p) => !p)
        }}
      >
        <Modal.Header>로그인 실패!</Modal.Header>
        <Modal.Content>
          이메일 또는 비밀번호가 맞는지 확인해주세요
        </Modal.Content>
        <Modal.Footer>
          <Button
            backgroundColor="primary"
            color="white"
            size="medium"
            width="100%"
            onClick={() => {
              setIsModalOpen((p) => !p)
            }}
          >
            확인
          </Button>
        </Modal.Footer>
      </Modal>
      <header css={loginHeader}>
        <p css={loginTitle}>서강대! 너 내 도도독!</p>
        <p css={loginSubtitle}>
          {isSignUpMode
            ? '회원가입을 진행해주세요'
            : '이메일과 비밀번호를 입력해주세요'}
        </p>
      </header>
      {isSignUpMode ? (
        <SignUpForm
          toggle={() => setIsModalOpen((p) => !p)}
          modeSwitchHandler={() => setIsSignUpMode((p) => !p)}
        />
      ) : (
        <LoginForm
          toggle={() => setIsModalOpen((p) => !p)}
          modeSwitchHandler={() => setIsSignUpMode((p) => !p)}
        />
      )}
    </div>
  )
}

const loginSubtitle = css`
  color: ${theme.color.subtle_dark};
  font-size: ${theme.textStyle.title_medium.font_size};
  line-height: ${theme.textStyle.title_medium.line_height};
`

const loginTitle = css`
  font-weight: 700;
  color: ${theme.color.thick_primary};
  font-size: ${theme.textStyle.headline_large.font_size};
  line-height: ${theme.textStyle.headline_large.line_height};
`

const loginHeader = css`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const loginWrapper = css`
  width: 100%;
  height: 100%;
  gap: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 60px 40px 80px 40px;
  background-color: ${theme.color.white};
`
