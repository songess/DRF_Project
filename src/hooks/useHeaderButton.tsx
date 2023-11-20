import React, { useState } from 'react'

export default function useHeaderButton() {
  const [showSearchInput, setShowSearchInput] = useState<boolean>(false)
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState<boolean>(false)
  const [isChatModalOpen, setIsChatModalOpen] = useState<boolean>(false)
  const headerClickHandler = (name: string) => {
    if (name === 'adduser') {
      setIsAddUserModalOpen((p) => !p)
    } else if (name === 'search') {
      setShowSearchInput((p) => !p)
    } else if (name === 'chat') {
      setIsChatModalOpen((p) => !p)
    }
  }
  return {
    showSearchInput,
    setShowSearchInput,
    isAddUserModalOpen,
    setIsAddUserModalOpen,
    isChatModalOpen,
    setIsChatModalOpen,
    headerClickHandler,
  }
}

