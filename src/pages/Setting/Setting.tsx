import React, { Fragment } from 'react'
import { css } from '@emotion/react'
import theme from '../../styles/theme'
import { ReactComponent as ArrowLeft } from '../../assets/image/arrowLeft.svg'
import { ReactComponent as Edit } from '../../assets/image/edit.svg'
import SettingList from './SettingList'
import { useNavigate } from 'react-router-dom'
import { LoginUser } from '../../util/store'
import { useAtom } from 'jotai'
import Modal from '../../components/Modal/Modal'
import Button from '../../components/Button/Button'

export default function Setting() {
  const [DUMMY_USER] = useAtom(LoginUser)
  console.log(LoginUser)
  const keys = Object.keys(DUMMY_USER)
  const values = Object.values(DUMMY_USER)
  let DUMMY_SETTINGS: {
    key: string
    title: string
    content: string
    id: number
  }[] = []
  for (let i = 0; i < keys.length; i++) {
    switch (keys[i]) {
      case 'name':
        DUMMY_SETTINGS = [
          ...DUMMY_SETTINGS,
          { key: 'name', title: '이름', content: values[i], id: i + 1 },
        ]
        break
      case 'email':
        DUMMY_SETTINGS = [
          ...DUMMY_SETTINGS,
          { key: 'email', title: '이메일', content: values[i], id: i + 1 },
        ]
        break
      case 'studentId':
        DUMMY_SETTINGS = [
          ...DUMMY_SETTINGS,
          { key: 'studentId', title: '학번', content: values[i], id: i + 1 },
        ]
        break
      case 'phoneNumber':
        DUMMY_SETTINGS = [
          ...DUMMY_SETTINGS,
          {
            key: 'phoneNumber',
            title: '전화번호',
            content: values[i],
            id: i + 1,
          },
        ]
        break
      case 'password':
        DUMMY_SETTINGS = [
          ...DUMMY_SETTINGS,
          { key: 'password', title: '비밀번호', content: values[i], id: i + 1 },
        ]
        break
      default:
        break
    }
  }
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
  return (
    <div css={settingWrapper}>
      <Modal
        isOpen={isModalOpen}
        onClear={() => {
          setIsModalOpen((p) => !p)
        }}
      >
        <Modal.Header>정말 탈퇴하시겠습니까?</Modal.Header>
        <Modal.Content>저장되어있는 모든 정보는 소멸됩니다.</Modal.Content>
        <Modal.Footer>
          <Button
            backgroundColor="primary_subtle"
            color="primary"
            size="medium"
            width="100%"
            onClick={() => setIsModalOpen((p) => !p)}
          >
            취소
          </Button>
          <Button
            backgroundColor="primary"
            color="white"
            size="medium"
            width="100%"
            onClick={() => {
              navigate('/login')
            }}
          >
            탈퇴
          </Button>
        </Modal.Footer>
      </Modal>
      <header css={settingHeader}>
        <div
          css={goBackButtonContainer}
          onClick={() => {
            navigate('/friend')
          }}
        >
          <ArrowLeft />
        </div>
        <p>프로필 관리</p>
      </header>
      <section css={settingProfile}>
        <div css={settingProfleDetail}>
          <img src={DUMMY_USER.img} alt="profile" css={settingProfileImage} />
          <Edit css={editImage} />
        </div>
      </section>
      {DUMMY_SETTINGS.map((setting) => {
        const isPassword = setting.title === '비밀번호' ? true : false
        return (
          <Fragment key={setting.id}>
            <SettingList
              title={setting.title}
              content={isPassword ? '' : setting.content}
              onClick={() => {
                navigate(`/setting/${setting.title}`)
              }}
            />
            <hr />
          </Fragment>
        )
      })}
      <div css={settingFooter}>
        <p css={withdraw} onClick={() => setIsModalOpen((p) => !p)}>
          회원탈퇴
        </p>
        <p
          css={logOut}
          onClick={() => {
            navigate('/login')
          }}
        >
          로그아웃
        </p>
      </div>
      {/* <FootBar /> */}
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
  bottom: 0;
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
