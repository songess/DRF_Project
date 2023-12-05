import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { css } from '@emotion/react'
import theme from '../../styles/theme'
import Button from '../../components/Button/Button'
import { ReactComponent as VisibleSvg } from '../../assets/image/visiblePwd.svg'
import { ReactComponent as NonVisibleSvg } from '../../assets/image/nonVisiblePwd.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import { DUMMY_Users } from '../../util/store'

interface LoginFormProps {
  toggle: () => void
  modeSwitchHandler: () => void
}

interface FormInput {
  email: string
  password: string
}

export default function ReactHookForm({
  toggle,
  modeSwitchHandler,
}: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormInput>()
  //const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data)
  const [DUMMY_USER] = useAtom(DUMMY_Users)
  const navigate = useNavigate()
  const [isFocused1, setIsFocused1] = useState<boolean>(false)
  const [isFocused2, setIsFocused2] = useState<boolean>(false)
  const [pwdVisible, setPwdVisible] = useState<boolean>(false)

  const submitHandler: SubmitHandler<FormInput> = (data) => {
    const loginUser = DUMMY_USER.filter(
      (user) => user.email === data.email && user.password === data.password,
    )
    if (loginUser.length === 0) {
      toggle()
    } else {
      navigate('/friend')
    }
  }

  return (
    <form css={formWrapper} onSubmit={handleSubmit(submitHandler)}>
      <section css={sectionStyle}>
        <div css={inputWrapper}>
          <label htmlFor="1" css={labelStyle(isFocused1)}>
            <input
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              placeholder="이메일"
              id="1"
              type="email"
              css={formInputStyle}
              onFocus={() => setIsFocused1(true)}
              onBlur={() => setIsFocused1(false)}
            />
          </label>
          {errors.email && (
            <p css={errorMessageStyle}>email이 잘못되었습니다.</p>
          )}
        </div>
        <div css={inputWrapper}>
          <label htmlFor="2" css={labelStyle(isFocused2)}>
            <input
              {...register('password', {
                required: {
                  value: true,
                  message: 'password가 잘못되었습니다.',
                },
                minLength: 8,
              })}
              placeholder="비밀번호"
              id="2"
              type="password"
              css={formInputStyle}
              onFocus={() => setIsFocused2(true)}
              onBlur={() => setIsFocused2(false)}
            />
            {pwdVisible ? (
              <NonVisibleSvg
                css={inputSvg}
                onClick={() => setPwdVisible((p) => !p)}
                onMouseDown={(e) => e.preventDefault()}
              />
            ) : (
              <VisibleSvg
                css={inputSvg}
                onClick={() => setPwdVisible((p) => !p)}
                onMouseDown={(e) => e.preventDefault()}
              />
            )}
          </label>
          <p css={errorMessageStyle}>{errors.password?.message}</p>
        </div>
        <p
          css={isForgetPassword}
          onClick={() => {
            navigate('/forgetpassword')
          }}
        >
          비밀번호를 잊으셨나요?
        </p>
      </section>
      <footer css={loginFooter}>
        <Button
          backgroundColor="primary"
          color="white"
          size="medium"
          width="100%"
          type="submit"
          disabled={!isValid}
        >
          로그인
        </Button>
        <div css={loginGrid}>또는</div>
        <Button
          backgroundColor="subtle_dark"
          color="white"
          size="medium"
          width="100%"
          onClick={() => {
            modeSwitchHandler()
          }}
        >
          회원가입
        </Button>
      </footer>
    </form>
  )
}

const loginFooter = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const labelStyle = (isFocused: boolean) => css`
  display: flex;
  gap: 10px;
  font-size: ${theme.textStyle.body_large};
  line-height: ${theme.textStyle.body_large};
  border-bottom: 2px solid
    ${isFocused ? theme.color.primary : theme.color.primary_subtle};
  width: 100%;
  height: 40px;
  padding: 5px;
`

const formWrapper = css`
  display: flex;
  width: 100%;
  flex-grow: 1;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  height: 100%;
`

const formInputStyle = css`
  outline: none;
  border: none;
  flex-grow: 1;
  ::placeholder {
    color: ${theme.color.subtle_light};
  }
`

const errorMessageStyle = css`
  font-size: ${theme.textStyle.body_small.font_size};
  line-height: ${theme.textStyle.body_small.line_height};
  color: ${theme.color.red};
`

const inputWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1px;
  width: 100%;
  height: 40px;
`

const inputSvg = css`
  fill: ${theme.color.subtle_light};
  &:hover {
    fill: ${theme.color.subtle_dark};
  }
`
const loginGrid = css`
  margin: 10px 0;
  color: ${theme.color.background};
  font-size: 12px;
  text-align: center;
  &::before,
  ::after {
    display: inline-block;
    width: calc(50% - 20px);
    height: 1px;
    margin: 8px 0;
    background-color: rgba(0, 0, 0, 0.06);
    vertical-align: top;
    content: '';
  }
`

const sectionStyle = css`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 30px;
`

const isForgetPassword = css`
  color: ${theme.color.subtle_light};
  font-size: ${theme.textStyle.body_small.font_size};
  line-height: ${theme.textStyle.body_small.line_height};
  align-self: end;
  &:hover {
    color: ${theme.color.subtle_dark};
    cursor: pointer;
  }
`
