import React, { useState } from 'react'

interface FriendInfo {
  name: string
  major: string
  id: number
  img: string
  favorites: boolean
}

export function useCallModal() {
  const [selectedFriend, setSelectedFriend] = useState<FriendInfo>({
    name: '',
    major: '',
    id: 0,
    img: '',
    favorites: false,
  })

  return { selectedFriend, setSelectedFriend }
}
