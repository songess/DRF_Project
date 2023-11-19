import React from 'react'
import theme from '../../styles/theme'
import { css } from '@emotion/react'
import { ReactComponent as ArrowLeft } from '../../assets/image/arrowLeft.svg'
import { ReactComponent as ShowStage3 } from '../../assets/image/showStage3.svg'
import { ReactComponent as Avatar } from '../../assets/image/avatar.svg'
import { ReactComponent as Edit } from '../../assets/image/edit.svg'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'

export default function SignUp_3() {
  const navigate = useNavigate()
  return (
    <section css={su3Wrapper}>
      <div
        css={goBack}
        onClick={() => {
          navigate(-1)
        }}
      >
        <ArrowLeft />
      </div>
      <ShowStage3 />
      <div css={su3HeaderStyle}>마지막 단계입니다!</div>
      <div css={su3ContentStyle}>계정생성을 위한 추가정보를 입력해주세요</div>
      <div css={avatarStyle}>
        <Avatar />
        <Edit css={editStyle}/>
      </div>
      <div css={inputStyle}>
      <Input
        isIconVisible={false}
        isValid={true}
        touched={false}
        type="text"
        placeholder="학번"
      />
      <Input
        isIconVisible={false}
        isValid={true}
        touched={false}
        type="text"
        placeholder="전공"
      />
      </div>
      <Button
        backgroundColor="primary"
        color="white"
        size="medium"
        width="100%"
      >
        회원가입
      </Button>
    </section>
  )
}

const inputStyle =css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
`

const avatarStyle =css`
  position: relative;
`

const editStyle = css`
  position: absolute;
  bottom: 0;
  right: 0;
`

const su3HeaderStyle = css`
  font-size: ${theme.textStyle.headline_medium.font_size};
  line-height: ${theme.textStyle.headline_medium.line_height};
`

const su3ContentStyle = css`
  font-size: ${theme.textStyle.body_medium.font_size};
  line-height: ${theme.textStyle.body_medium.line_height};
  color: ${theme.color.subtle_light};
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

const su3Wrapper = css`
  position: relative;
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
`
