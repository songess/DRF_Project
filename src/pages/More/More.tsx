import React from 'react'
import { css } from '@emotion/react'
import theme from '../../styles/theme'
import MainHeader from '../../components/MainHeader/MainHeader'
import FootBar from '../../components/FootBar/FootBar'
import { ReactComponent as ArrowRight } from '../../assets/image/arrowRightCircle.svg'
import { Link } from 'react-router-dom'

export default function More() {
  return (
    <div css={moreWrapper}>
      <MainHeader headerName="더보기" buttonNames={['filter']} onClick={()=>{}}/>
      <section css={moreSection}>
      <section css={studentCard}>
        <div css={studentCardInfo}>
          <div css={studentCardHeader}>학생증</div>
          <Link to="https://saint.sogang.ac.kr/irj/portal" css={saintPortal}>
            <p>세인트로 이동</p>
            <ArrowRight />
          </Link>
        </div>
        <img src="myProfileImage2.jpeg" alt="프로필" css={profileImage}></img>
      </section>
      </section>
      <FootBar />
    </div>
  )
}

const moreSection = css`
  flex-grow: 1;
`
const saintPortal = css`
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
  color: inherit;
`

const profileImage = css`
  height: 70px;
  width: 70px;
  border-radius: 50%;
`
const studentCardInfo = css`
  width: 100%;
  display: flex;
  align-items: center;
`

const moreWrapper = css`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column; 
`

const studentCard = css`
  height: 200px;
  background-color: ${theme.color.primary};
  color: ${theme.color.white};
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  p {
    font-size: ${theme.textStyle.body_medium.font_size};
    line-height: ${theme.textStyle.body_medium.line_height};
  }
`
const studentCardHeader = css`
  font-size: ${theme.textStyle.title_large.font_size};
  line-height: ${theme.textStyle.title_large.line_height};
  flex-grow: 1;
`
