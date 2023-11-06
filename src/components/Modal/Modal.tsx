import React, { useRef, PropsWithChildren } from 'react'
import ReactDOM from 'react-dom'
import theme from '../../styles/theme'
import { css } from '@emotion/react'
import { CSSTransition } from 'react-transition-group'

interface ModalProps {
  children: React.ReactNode
  onClear: () => void
  isOpen: boolean
}

export default function Modal({ onClear, children, isOpen }: ModalProps) {
  const portal = document.querySelector('#modal') as Element
  const outside = useRef(null)

  const clickHandler = (e: React.MouseEvent) => {
    if (outside.current === e.target) onClear()
  }

  return ReactDOM.createPortal(
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
    </CSSTransition>,
    portal,
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

function Footer({ children }: PropsWithChildren) {
  return <footer css={modalFooter}>{children}</footer>
}

Modal.Header = Header
Modal.Content = Content
Modal.Footer = Footer

const modalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(128, 128, 128, 0.8);
`

const modalWrapper = css`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  gap: 30px;
  background-color: white;
  border-radius: 20px;
`

const modalHeader = css`
  font-weight: 700;
  color: ${theme.color.normal};
  font-size: ${theme.textStyle.body_large};
  line-height: ${theme.textStyle.body_large};
`

const modalContent = css`
  font-size: ${theme.textStyle.body_medium};
  line-height: ${theme.textStyle.body_medium};
  color: ${theme.color.subtle_dark};
`

const modalFooter = css`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
`

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
