import React, { useState } from 'react'
import { css } from '@emotion/react'
import theme from '../../styles/theme'
import FootBar from '../../components/FootBar/FootBar'
import { ReactComponent as Search } from '../../assets/image/search.svg'
import { ReactComponent as AddUser } from '../../assets/image/addUser.svg'
import { ReactComponent as Filter } from '../../assets/image/filter.svg'
import UserListCard from '../../components/UserListCard/UserListCard'
import Modal from '../../components/Modal/Modal'
import Button from '../../components/Button/Button'

interface FriendInfo {
  name: string
  major: string
  id: number
  img: string
  favorites: boolean
}
const DUMMY_FRIENDS = [
  {
    name: '철수',
    major: '컴퓨터공학과',
    id: 1,
    img: 'defaultImage.jpeg',
    favorites: false,
  },
  {
    name: '영희',
    major: '컴퓨터공학과',
    id: 2,
    img: 'defaultImage.jpeg',
    favorites: true,
  },
  {
    name: '강남',
    major: '경제학과',
    id: 3,
    img: 'defaultImage.jpeg',
    favorites: false,
  },
]
const me = '송은수'

export default function Friend() {
  const DUMMY_FAVORITES_FRIENDS = DUMMY_FRIENDS.filter(
    (friend) => friend.favorites === true,
  )
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [selectedFriend, setSelectedFriend] = useState<FriendInfo>({
    name: 'sssss',
    major: 'sssssssssss',
    id: 0,
    img: 'defaultImage.image',
    favorites: false,
  })

  const cardClickHandler = (friend: FriendInfo) => {
    setSelectedFriend((p) => ({ ...p, friend }))
    setIsModalOpen((p) => !p)
  }
  return (
    <div css={friendWrapper}>
      <Modal isOpen={isModalOpen} onClear={() => setIsModalOpen((p) => !p)}>
        <Modal.Header>{selectedFriend.img}</Modal.Header>
        <Modal.Content>
          <p css={selectedFriendName}>{selectedFriend.name}</p>
          <p css={selectedFriendMajor}>{selectedFriend.major}</p>
        </Modal.Content>
        <Modal.Footer>
          <Button backgroundColor='primary' color='white' size='small' width='100%'>즐겨찾기</Button>
          <Button backgroundColor='subtle_dark' color='white' size='small' width='100%'>1:1채팅</Button>
        </Modal.Footer>
      </Modal>
      <header css={friendHeader}>
        <p css={friend}>친구</p>
        <Search css={friendButton} />
        <AddUser css={friendButton} />
        <Filter css={friendButton} />
      </header>
      <section css={myProfile}>
        <img src="defaultImage.jpeg" alt="프로필" css={myProfileImage} />
        <p>{me}</p>
      </section>
      <hr />
      <section css={favorites}>
        <p css={numberOfFavorites}>즐겨찾기 {DUMMY_FAVORITES_FRIENDS.length}</p>
        {DUMMY_FAVORITES_FRIENDS.map((friend) => (
          <UserListCard
            image={friend.img}
            major={friend.major}
            name={friend.name}
            key={friend.id}
            onClick={() => {
              cardClickHandler(friend)
            }}
          />
        ))}
      </section>
      <hr />
      <section css={friends}>
        <p css={numberOfFriends}>친구 {DUMMY_FRIENDS.length}</p>
        {DUMMY_FRIENDS.map((friend) => (
          <UserListCard
            image={friend.img}
            major={friend.major}
            name={friend.name}
            key={friend.id}
            onClick={() => {
              cardClickHandler(friend)
            }}
          />
        ))}
      </section>
      <FootBar />
    </div>
  )
}
const selectedFriendName = css`
  font-size: ${theme.textStyle.title_medium.font_size};
  line-height: ${theme.textStyle.title_medium.line_height};
`
const selectedFriendMajor = css`
  font-size: ${theme.textStyle.body_medium.font_size};
  line-height: ${theme.textStyle.body_medium.line_height};
  color: ${theme.color.background};
`

const friends = css`
  display: flex;
  flex-direction: column;
`
const numberOfFriends = css`
  padding: 0 20px 20px 20px;
  font-size: ${theme.textStyle.body_large.font_size};
  line-height: ${theme.textStyle.body_large.line_height};
`

const numberOfFavorites = css`
  padding: 0 20px 20px 20px;
  font-size: ${theme.textStyle.body_large.font_size};
  line-height: ${theme.textStyle.body_large.line_height};
`
const favorites = css`
  display: flex;
  flex-direction: column;
`
const myProfileImage = css`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`

const myProfile = css`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
  font-size: ${theme.textStyle.title_medium.font_size};
  line-height: ${theme.textStyle.title_medium.line_height};
  &:hover {
    background-color: ${theme.color.primary_subtle};
  }
`

const friendButton = css`
  color: ${theme.color.black};
  &:hover {
    color: ${theme.color.subtle_dark};
  }
`

const friend = css`
  flex-grow: 1;
  font-size: ${theme.textStyle.title_large.font_size};
  line-height: ${theme.textStyle.title_large.line_height};
`
const friendHeader = css`
  position: relative;
  top: 0;
  width: 100%;
  display: flex;
  padding: 20px 20px 0 20px;
  gap: 10px;
`

const friendWrapper = css`
  position: relative;
  width: 100%;
  height: 100%;
  hr {
    background-color: ${theme.color.background};
    border: none;
    padding: 0.5px;
    margin: 10px auto;
  }
`
