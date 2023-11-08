import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Input from '../../components/Input/Input'
import { css } from '@emotion/react'
import theme from '../../styles/theme'
import { ReactComponent as ArrowLeft } from '../../assets/image/arrowLeft.svg'
import { ReactComponent as CheckSquare } from '../../assets/image/checkSquare.svg'

export default function SettingDetail() {
  const { detail } = useParams()
  const navigate = useNavigate()
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
        <div css={acceptChange}>
          <CheckSquare />
        </div>
      </header>
      <Input
        isIconVisible={false}
        isValid={true}
        touched={false}
        type="text"
        placeholder={`${detail}을 입력하세요`}
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
  padding: 0 5px;
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
