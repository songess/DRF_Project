import React from 'react'
import Button from '../../components/Button/Button'
import { css } from '@emotion/react'
import theme from '../../styles/theme'

interface SettingListProps {
  title: string
  content: string
}

export default function SettingList({ title, content }: SettingListProps) {
  return (
    <section css={settingListWrapper}>
      <div css={settingTitle}>{title}</div>
      <div css={settingContent}>{content}</div>
      <Button backgroundColor="primary" color="white" size="small">
        변경
      </Button>
    </section>
  )
}

const settingListWrapper = css`
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`
const settingTitle = css`
  flex-basis: 100px;
`
const settingContent = css`
  flex-grow: 1;
  color: ${theme.color.subtle_light};
`
