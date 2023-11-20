import React from 'react'
import { css } from '@emotion/react'
import theme from '../../styles/theme'
import { ReactComponent as Search } from '../../assets/image/search.svg'
import { ReactComponent as AddUser } from '../../assets/image/addUser.svg'
import { ReactComponent as Filter } from '../../assets/image/filter.svg'
import { ReactComponent as NewChat } from '../../assets/image/plus.svg'
import { Link } from 'react-router-dom'

type HeaderButton = 'search' | 'adduser' | 'filter' | 'chat'
interface MainHeaderProps {
  headerName: string
  buttonNames: HeaderButton[]
  onClick: (name: string) => void
}

export default function MainHeader({
  headerName,
  buttonNames,
  onClick,
}: MainHeaderProps) {
  return (
    <header css={header}>
      <p css={headerNameStyle}>{headerName}</p>
      {buttonNames.includes('search') && (
        <Search css={headerButton} onClick={()=>{onClick('search')}} />
      )}
      {buttonNames.includes('adduser') && (
        <AddUser css={headerButton} onClick={()=>{onClick('adduser')}} />
      )}
      {buttonNames.includes('chat') && (
        <NewChat css={headerButton} onClick={()=>{onClick('chat')}} />
      )}
      {buttonNames.includes('filter') && (
        <Link to="/setting" css={buttonContainer}>
          <Filter css={headerButton} />
        </Link>
      )}
    </header>
  )
}
const buttonContainer = css``

const header = css`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  padding: 20px 20px 10px 20px;
  gap: 10px;
  background-color: white;
  border-bottom: 1px solid ${theme.color.background};
`
const headerNameStyle = css`
  flex-grow: 1;
  font-size: ${theme.textStyle.title_large.font_size};
  line-height: ${theme.textStyle.title_large.line_height};
`
const headerButton = css`
  color: ${theme.color.black};
  border-radius: 5px;
  &:hover {
    color: ${theme.color.subtle_dark};
    background-color: ${theme.color.background};
  }
`
