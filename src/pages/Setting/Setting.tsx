import React from 'react'
import { css } from '@emotion/react'
import theme from '../../styles/theme'
import FootBar from '../../components/FootBar/FootBar'
import { ReactComponent as ArrowLeft } from '../../assets/image/arrowLeft.svg'
import { ReactComponent as Edit } from '../../assets/image/edit.svg'
import SettingList from './SettingList'
import { useNavigate } from 'react-router-dom'
import { LoginUser } from '../../util/store'
import { useAtom } from 'jotai'

export default function Setting() {
  const [DUMMY_USER] = useAtom(LoginUser)
  const keys = Object.keys(DUMMY_USER)
  const values = Object.values(DUMMY_USER)
  let DUMMY_SETTINGS: { title: string; content: string; id: number }[] = []
  console.log(keys, values)
  for (let i = 0; i < keys.length; i++) {
    DUMMY_SETTINGS = [
      ...DUMMY_SETTINGS,
      { title: keys[i], content: values[i], id: i + 1 },
    ]
  }
  const navigate = useNavigate()
  return (
    <div css={settingWrapper}>
      <header css={settingHeader}>
        <div
          css={goBackButtonContainer}
          onClick={() => {
            navigate(-1)
          }}
        >
          <ArrowLeft />
        </div>
        <p>프로필 관리</p>
      </header>
      <section css={settingProfile}>
        <div css={settingProfleDetail}>
          <img
            src="myProfileImage.jpg"
            alt="profile"
            css={settingProfileImage}
          />
          <Edit css={editImage} />
        </div>
      </section>
      {DUMMY_SETTINGS.map((setting) => {
        const isPassword = setting.title === '비밀번호' ? true : false
        return (
          <>
            <SettingList
              title={setting.title}
              content={isPassword ? '' : setting.content}
              key={setting.id}
              onClick={() => {
                navigate(`/setting/${setting.title}`)
              }}
            />
            <hr />
          </>
        )
      })}
      <div css={settingFooter}>
        <p css={withdraw}>회원탈퇴</p>
        <p
          css={logOut}
          onClick={() => {
            navigate('/login')
          }}
        >
          로그아웃
        </p>
      </div>
      <FootBar />
    </div>
  )
}
const goBackButtonContainer = css`
  position: absolute;
  padding: 0 5px;
  border-radius: 10px;
  top: 20px;
  left: 20px;
  &:hover {
    background-color: ${theme.color.background};
  }
`

const settingFooter = css`
  width: 100%;
  padding: 30px;
  position: absolute;
  bottom: 58px;
  display: flex;
  justify-content: space-between;
  font-size: ${theme.textStyle.title_medium.font_size};
  line-height: ${theme.textStyle.title_medium.line_height};
`
const withdraw = css`
  color: ${theme.color.primary};
  padding: 5px;
  &:hover {
    background-color: ${theme.color.background};
    border-radius: 5px;
    cursor: pointer;
  }
`
const logOut = css`
  color: ${theme.color.subtle_dark};
  padding: 5px;
  &:hover {
    background-color: ${theme.color.background};
    border-radius: 5px;
    cursor: pointer;
  }
`
const settingProfleDetail = css`
  position: relative;
`
const editImage = css`
  position: absolute;
  bottom: 0;
  right: 0;
`
const settingHeader = css`
  position: relative;
  display: flex;
  padding: 20px;
  justify-content: center;
  font-size: ${theme.textStyle.title_large.font_size};
  line-height: ${theme.textStyle.title_large.line_height};
`

const settingWrapper = css`
  position: relative;
  width: 100%;
  height: 100%;
  hr {
    background-color: ${theme.color.background};
    border: none;
    padding: 0.5px;
  }
`

const settingProfile = css`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 20px;
  position: relative;
`

const settingProfileImage = css`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  & + div {
    position: absolute;
    top: 0;
    right: 0;
  }
`
