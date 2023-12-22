import React, { useRef, PropsWithChildren, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import theme from '../../styles/theme'
import { css } from '@emotion/react'
import { motion, AnimatePresence } from 'framer-motion'

interface ModalProps {
  content: string
  isOpen: boolean
}

export default function PillModal({ content, isOpen }: ModalProps) {
  const portal = document.querySelector('#modal') as Element
  const [isModalOpen, setIsModalOpen] = useState(isOpen)
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsModalOpen(!isModalOpen)
      }, 300)
    }
  }, [])

  return ReactDOM.createPortal(
    
    <motion.div
      css={modalWrapper}
      animate={isModalOpen ? { opacity: 1 } : { opacity: 0 }}
    >
      {content}
    </motion.div>,
    portal,
  )
}

const modalWrapper = css`
  position: fixed;
  bottom: 25%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
  background-color: ${theme.color.primary};
  color: ${theme.color.white};
  border-radius: 25px;
  padding: 15px;
`
