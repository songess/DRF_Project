import React from 'react'
import { css } from '@emotion/react'
import theme from '../../styles/theme'
import FootBar from '../../components/FootBar/FootBar'
import { ReactComponent as ArrowLeft } from '../../assets/image/arrowLeft.svg'
import { ReactComponent as Edit } from '../../assets/image/edit.svg'
import SettingList from './SettingList'

const DUMMY_SETTINGS = [
  { title: '전화번호', content: '010-9145-9931', id: 1 },
  { title: '학번', content: '20201593', id: 2 },
  { title: '이메일', content: 'songess@naver.com', id: 3 },
  { title: '비밀번호', content: '', id: 4 },
]

export default function Setting() {
  return (
    <div css={settingWrapper}>
      <header css={settingHeader}>
        <ArrowLeft css={arrowLeft} />
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
      {DUMMY_SETTINGS.map((setting) => (
        <>
          <SettingList
            content={setting.content}
            title={setting.title}
            key={setting.id}
          />
          <hr />
        </>
      ))}
      <div css={settingFooter}>
        <p css={withdraw}>회원탈퇴</p>
        <p css={logOut}>로그아웃</p>
      </div>
      <FootBar />
    </div>
  )
}

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
`
const logOut = css`
  color: ${theme.color.subtle_dark};
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

const arrowLeft = css`
  position: absolute;
  top: 25px;
  left: 20px;
`
