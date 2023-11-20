import React, { useRef, PropsWithChildren } from 'react'
import theme from '../../styles/theme'
import { css } from '@emotion/react'
import { CSSTransition } from 'react-transition-group'

interface ModalProps {
  children: React.ReactNode
  onClear: () => void
  isOpen: boolean
}

export default function UpdateModal({ onClear, children, isOpen }: ModalProps) {
  const outside = useRef(null)

  const clickHandler = (e: React.MouseEvent) => {
    if (outside.current === e.target) onClear()
  }

  return (
    <CSSTransition
      in={isOpen}
      timeout={200}
      classNames={modalStyles.transitionClassNames}
      mountOnEnter
      unmountOnExit
    >
      <div css={modalOverlay} ref={outside} onClick={clickHandler}>
        <div css={modalWrapper}>{children}</div>
      </div>
    </CSSTransition>
  )
}

function Header({ children }: PropsWithChildren) {
  return (
    <header css={modalHeader}>
      <h2>{children}</h2>
    </header>
  )
}

function Content({ children }: PropsWithChildren) {
  return <div css={modalContent}>{children}</div>
}

// function Footer({ children }: PropsWithChildren) {
//   return <footer css={modalFooter}>{children}</footer>
// }

UpdateModal.Header = Header
UpdateModal.Content = Content
// UpdateModal.Footer = Footer

const modalOverlay = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: rgba(128, 128, 128, 0.8);
`

const modalWrapper = css`
  z-index: 1;
  display: flex;
  width: 100%;
  height: 200px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  background-color: ${theme.color.surface};
`

const modalHeader = css`
  color: ${theme.color.normal};
  font-size: ${theme.textStyle.body_large};
  line-height: ${theme.textStyle.body_large};
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const modalContent = css`
  font-size: ${theme.textStyle.body_medium};
  line-height: ${theme.textStyle.body_medium};
  color: ${theme.color.subtle_dark};
  display: flex;
  width: 100%;
`

// const modalFooter = css`
//   width: 100%;
//   display: flex;
//   gap: 10px;
//   justify-content: center;
// `

const modalStyles = {
  transitionClassNames: 'modal',
  enter: css`
    opacity: 0;
  `,
  enterActive: css`
    opacity: 1;
    transition:
      opacity 300ms,
      transform 300ms;
  `,
  exit: css`
    opacity: 1;
  `,
  exitActive: css`
    opacity: 0;
    transition:
      opacity 300ms,
      transform 300ms;
  `,
}
