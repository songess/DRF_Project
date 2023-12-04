import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Input from '../../components/Input/Input'
import { css } from '@emotion/react'
import theme from '../../styles/theme'
import { ReactComponent as ArrowLeft } from '../../assets/image/arrowLeft.svg'
import { ReactComponent as CheckSquare } from '../../assets/image/checkSquare.svg'
import { useAtom } from 'jotai'
import { LoginUser } from '../../util/store'

export default function SettingDetail() {
  const [DUMMY_USER, setDUMMY_USER] = useAtom(LoginUser)
  const { detail } = useParams()
  const _detail = detail as string
  const navigate = useNavigate()
  const [userSettingChange, setUserSettingChange] = useState<string>('')
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserSettingChange(e.target.value)
  }
  const settingLoginUser = () => {
    setDUMMY_USER((prev) => ({ ...prev, [_detail]: userSettingChange }))
    navigate('/setting', { replace: true })
  }

  const enterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      settingLoginUser()
    }
  }

  useEffect(() => {
    const settingDetail =
      document.querySelector<HTMLInputElement>('#settingDetail')
    if (settingDetail) {
      settingDetail.focus()
    }
  }, [])

  return (
    <div css={settingDetailWrapper}>
      <header css={settingDetailHeader}>
        <div
          css={goBack}
          onClick={() => {
            navigate(-1)
          }}
        >
          <ArrowLeft />
        </div>
        <p>{detail} 변경</p>
        <div css={acceptChange} onClick={settingLoginUser}>
          <CheckSquare />
        </div>
      </header>
      <Input
        isIconVisible={false}
        id="settingDetail"
        isValid={true}
        touched={false}
        type="text"
        placeholder={`${detail}을 입력하세요`}
        value={userSettingChange}
        onChange={inputChangeHandler}
        onKeyDown={enterHandler}
      />
    </div>
  )
}
const goBack = css`
  position: absolute;
  padding: 0 5px;
  border-radius: 10px;
  top: 20px;
  left: 0;
  &:hover {
    background-color: ${theme.color.background};
  }
`

const acceptChange = css`
  position: absolute;
  padding: 5px 5px 0 5px;
  border-radius: 10px;
  top: 20px;
  right: 0;
  &:hover {
    background-color: ${theme.color.background};
  }
`

const settingDetailHeader = css`
  position: relative;
  display: flex;
  padding: 20px;
  margin-bottom: 40px;
  justify-content: center;
  font-size: ${theme.textStyle.title_large.font_size};
  line-height: ${theme.textStyle.title_large.line_height};
`

const settingDetailWrapper = css`
  width: 100%;
  height: 100%;
  padding: 0 20px;
`
