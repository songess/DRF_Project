import React, { useState } from 'react'
import { css } from '@emotion/react'
import theme from '../../styles/theme'
import { ReactComponent as CloseSquare } from '../../assets/image/closeSquare.svg'
import { ReactComponent as CheckSquare } from '../../assets/image/checkSquare.svg'

type InputType = 'password' | 'email' | 'text'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isIconVisible: boolean
  type: InputType
  errorMessage?: string
  isValid: boolean
  touched: boolean
  whichIcon?: 'close' | 'check'
}

export default function Input({
  isIconVisible,
  type,
  placeholder,
  errorMessage,
  isValid,
  touched,
  whichIcon,
  ...props
}: InputProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [isHover, setIsHover] = useState<boolean>(false)
  const handleMouseOver = () => {
    setIsHover(true)
  }
  const handleMouseOut = () => {
    setIsHover(false)
  }
  return (
    <div css={inputWrapper}>
      <label
        htmlFor={placeholder}
        css={
          !isValid && touched
            ? [inputContainer(isFocused), inputInvalid]
            : inputContainer(isFocused)
        }
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <input
          css={inputStyle}
          type={type}
          id={placeholder}
          placeholder={placeholder}
          {...props}
        />
        {isIconVisible &&
          (whichIcon === 'close' ? (
            <CloseSquare
              style={isHover ? { color: 'black' } : { color: 'gray' }} //loginInput 형식으로
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          ) : (
            <CheckSquare
              style={isHover ? { color: 'black' } : { color: 'gray' }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          ))}
      </label>
      {!isValid && touched && <div css={errorMessageStyle}>{errorMessage}</div>}
    </div>
  )
}

const inputWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1px;
  width: 100%;
  height: 40px;
`
const inputStyle = css`
  flex-grow: 1;
  outline: none;
  border: none;
  ::placeholder {
    color: ${theme.color.subtle_light};
  }
`
const inputContainer = (isFocused: boolean) => css`
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

const inputInvalid = css`
  border-bottom: 2px solid ${theme.color.red};
`

const errorMessageStyle = css`
  font-size: ${theme.textStyle.body_small.font_size};
  line-height: ${theme.textStyle.body_small.line_height};
  color: ${theme.color.red};
`
