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
    name: 'sssss',
    major: 'sssssssssss',
    id: 0,
    img: 'defaultImage.image',
    favorites: false,
  })

  return { selectedFriend, setSelectedFriend }
}
