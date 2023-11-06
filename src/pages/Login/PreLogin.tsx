import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Sogang } from '../../assets/image/sogang.svg'
import { css } from '@emotion/react'
import theme from '../../styles/theme'

export default function PreLogin() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/login')
    }, 1000)
  })
  return (
    <div css={preLoginStyle}>
      <Sogang />
    </div>
  )
}

const preLoginStyle = css`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.thick_primary};
`
