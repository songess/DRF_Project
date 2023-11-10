import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import theme from '../../styles/theme'
import FootBar from '../../components/FootBar/FootBar'
import { ReactComponent as Search } from '../../assets/image/search.svg'
import { ReactComponent as AddUser } from '../../assets/image/addUser.svg'
import { ReactComponent as Filter } from '../../assets/image/filter.svg'
import UserListCard from '../../components/UserListCard/UserListCard'
import Modal from '../../components/Modal/Modal'
import Button from '../../components/Button/Button'
import MainHeader from '../../components/MainHeader/MainHeader'
import { useNavigate } from 'react-router-dom'

interface FriendInfo {
  name: string
  major: string
  id: number
  img: string
  favorites: boolean
  index?: number
}
const me = '송은수'

export default function Friend() {
  const navigate = useNavigate()
  const [DUMMY_FRIENDS, setDUMMY_FRIENDS] = useState<FriendInfo[]>([
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
      favorites: false,
    },
    {
      name: '채원',
      major: '디자인과',
      id: 4,
      img: 'defaultImage.jpeg',
      favorites: true,
    },
    {
      name: '주혁',
      major: '소프트웨어학과',
      id: 5,
      img: 'defaultImage.jpeg',
      favorites: false,
    },
    {
      name: '학림',
      major: '화학과',
      id: 6,
      img: 'defaultImage.jpeg',
      favorites: false,
    },
  ])
  const [DUMMY_FAVORITES_FRIENDS, setDUMMY_FAVORITES_FRIENDS] = useState<
    FriendInfo[]
  >(DUMMY_FRIENDS.filter((friend) => friend.favorites === true))
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [selectedFriend, setSelectedFriend] = useState<FriendInfo>({
    name: '',
    major: '',
    id: 0,
    img: '',
    favorites: false,
    index: 0,
  })

  const cardClickHandler = (friend: FriendInfo, idx: number) => {
    setSelectedFriend((p) => ({ ...p, ...friend, index: idx }))
    setIsModalOpen((p) => !p)
  }

  const modalButtonHandler = () => {
    setSelectedFriend((p) => ({ ...p, favorites: !p.favorites }))
    setDUMMY_FRIENDS((prevState) =>
      prevState.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, favorites: !friend.favorites }
          : friend,
      ),
    )
    setIsModalOpen((p) => !p)
  }
  useEffect(() => {
    setDUMMY_FAVORITES_FRIENDS(
      DUMMY_FRIENDS.filter((friend) => friend.favorites),
    )
  }, [DUMMY_FRIENDS])
  return (
    <div css={friendWrapper}>
      <Modal isOpen={isModalOpen} onClear={() => setIsModalOpen((p) => !p)}>
        <Modal.Header>
          <img src={selectedFriend.img} alt="profile" css={modalImage} />
        </Modal.Header>
        <Modal.Content>
          <div css={modalContent}>
            <p css={selectedFriendName}>{selectedFriend.name}</p>
            <p css={selectedFriendMajor}>{selectedFriend.major}</p>
          </div>
        </Modal.Content>
        <Modal.Footer>
          <Button
            backgroundColor="primary"
            color="white"
            size="medium"
            width="100%"
            onClick={modalButtonHandler}
          >
            {selectedFriend.favorites ? '즐겨찾기해제' : '즐겨찾기'}
          </Button>
          <Button
            backgroundColor="subtle_dark"
            color="white"
            size="medium"
            width="100%"
          >
            1:1채팅
          </Button>
        </Modal.Footer>
      </Modal>
      <MainHeader
        headerName="친구"
        buttonNames={['search', 'adduser', 'filter']}
      />
      <section
        css={myProfile}
        onClick={() => {
          navigate('/setting')
        }}
      >
        <img src="myProfileImage2.jpeg" alt="프로필" css={myProfileImage} />
        <p>{me}</p>
      </section>
      <hr />
      <section css={favorites}>
        <p css={numberOfFavorites}>즐겨찾기 {DUMMY_FAVORITES_FRIENDS.length}</p>
        {DUMMY_FAVORITES_FRIENDS.map((friend, idx) => (
          <UserListCard
            image={friend.img}
            major={friend.major}
            name={friend.name}
            key={friend.id}
            onClick={() => {
              cardClickHandler(friend, idx)
            }}
          />
        ))}
      </section>
      <hr />
      <section css={friends}>
        <p css={numberOfFriends}>친구 {DUMMY_FRIENDS.length}</p>
        {DUMMY_FRIENDS.map((friend, idx) => (
          <UserListCard
            image={friend.img}
            major={friend.major}
            name={friend.name}
            key={friend.id}
            onClick={() => {
              cardClickHandler(friend, friend.index ?? 0)
            }}
          />
        ))}
      </section>
      <FootBar />
    </div>
  )
}
const selectedFriendName = css`
  font-size: ${theme.textStyle.title_large.font_size};
  line-height: ${theme.textStyle.title_large.line_height};
`
const selectedFriendMajor = css`
  font-size: ${theme.textStyle.title_medium.font_size};
  line-height: ${theme.textStyle.title_medium.line_height};
  color: ${theme.color.subtle_light};
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
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  padding: 20px 20px 10px 20px;
  gap: 10px;
  background-color: white;
  border-bottom: 1px solid ${theme.color.background};
`

const friendWrapper = css`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
  hr {
    background-color: ${theme.color.background};
    border: none;
    padding: 0.5px;
    margin: 10px auto;
  }
`

const modalImage = css`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const modalContent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`
