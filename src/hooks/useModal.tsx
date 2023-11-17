import React, { useState } from 'react'

export function useModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggle = () => {
    setIsOpen((p) => !p)
  }
  return { isOpen, toggle }
}
