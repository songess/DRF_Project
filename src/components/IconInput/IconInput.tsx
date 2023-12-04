import React, { useState, forwardRef, LegacyRef, useRef } from 'react'
import theme from '../../styles/theme'
import { css } from '@emotion/react'
import { ReactComponent as SearchSvg } from '../../assets/image/search.svg'
import { ReactComponent as CheckSvg } from '../../assets/image/checkSquare.svg'

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  whichIcon: 'search' | 'check'
}

const IconInput = forwardRef(
  ({ whichIcon, ...props }: SearchInputProps, ref) => {
    const [isHover, setIsHover] = useState<boolean>(false)
    const handleMouseOver = () => {
      setIsHover(true)
    }
    const handleMouseOut = () => {
      setIsHover(false)
    }
    return (
      <label htmlFor="searchInputFocus" css={searchInputWrapper}>
        <input
          id="searchInputFocus"
          type="text"
          css={searchInput}
          {...props}
          ref={ref as LegacyRef<HTMLInputElement>}
        />
        <div css={iconBg}>
          {whichIcon === 'search' ? (
            <SearchSvg
              style={isHover ? { color: 'black' } : { color: 'gray' }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          ) : (
            <CheckSvg
              style={isHover ? { color: 'black' } : { color: 'gray' }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          )}
        </div>
      </label>
    )
  },
)

export default IconInput

const searchInputWrapper = css`
  width: 100%;
  display: flex;
  padding: 10px;
  gap: 5px;
  background-color: ${theme.color.primary_subtle};
  border-radius: 10px;
`

const searchInput = css`
  flex-grow: 1;
  outline: none;
  border: none;
  font-size: ${theme.textStyle.body_large};
  line-height: ${theme.textStyle.body_large};
  background-color: ${theme.color.primary_subtle};
  ::placeholder {
    color: ${theme.color.subtle_light};
  }
`

const iconBg = css`
  width: 24px;
  height: 24px;
`
