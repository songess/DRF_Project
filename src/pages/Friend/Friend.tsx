import React, { useEffect, useRef, useState, LegacyRef } from 'react'
import { css } from '@emotion/react'
import theme from '../../styles/theme'
import FootBar from '../../components/FootBar/FootBar'
import { ReactComponent as Card } from '../../assets/image/card.svg'
import { ReactComponent as Notebook } from '../../assets/image/notebook.svg'
import UserListCard from '../../components/UserListCard/UserListCard'
import Modal from '../../components/Modal/Modal'
import Button from '../../components/Button/Button'
import MainHeader from '../../components/MainHeader/MainHeader'
import { useLocation, useNavigate } from 'react-router-dom'
import UpdateModal from '../../components/Modal/UpdateModal'
import IconInput from '../../components/IconInput/IconInput'
import useHeaderButton from '../../hooks/useHeaderButton'
import { useAtom } from 'jotai'
import {
  DUMMY_chat,
  DUMMY_friends,
  LoginUser,
  type UserInterface,
} from '../../util/store'
import { set } from 'ol/transform'
import { motion } from 'framer-motion'

export default function Friend() {
  const navigate = useNavigate()
  const [DUMMY_CHAT, setDUMMY_CHAT] = useAtom(DUMMY_chat)
  const [Loginuser] = useAtom(LoginUser)
  const [DUMMY_FRIENDs] = useAtom(DUMMY_friends)
  const [DUMMY_FRIENDS, setDUMMY_FRIENDS] =
    useState<UserInterface[]>(DUMMY_FRIENDs)
  const [DUMMY_FAVORITES_FRIENDS, setDUMMY_FAVORITES_FRIENDS] = useState<
    UserInterface[]
  >(DUMMY_FRIENDS.filter((friend) => friend.favorites === true))
  const {
    headerClickHandler,
    isAddUserModalOpen,
    setIsAddUserModalOpen,
    showSearchInput,
  } = useHeaderButton()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [selectedFriend, setSelectedFriend] = useState<UserInterface>({
    name: '',
    major: '',
    id: 0,
    img: '',
    favorites: false,
    index: 0,
    email: '',
    password: '',
    phoneNumber: '',
    studentId: '',
  })

  const cardClickHandler = (friend: UserInterface, idx: number) => {
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
  const searchFriendHandler = () => {
    const searchInput = document.querySelector<HTMLInputElement>('#search')
    if (searchInput) {
      const searchValue = searchInput.value
      const searchResult = DUMMY_FRIENDs.filter((friend) =>
        friend.name.includes(searchValue),
      )
      if (searchValue === '') {
        setDUMMY_FRIENDS(DUMMY_FRIENDs)
      } else {
        setDUMMY_FRIENDS(searchResult)
      }
    }
  }
  const findFriendHandler = (whichtoFind: string) => {
    if (whichtoFind === 'name') {
      navigate('/findfriend/이름')
    } else {
      navigate('/findfriend/학번')
    }
  }
  const gotoChatRoomHandler = () => {
    let iteration = 0
    DUMMY_CHAT.forEach((chat) => {
      if (chat.opponent === selectedFriend.name) {
        navigate(`/chat/${chat.id}`)
      }
      iteration++
    })
    if (iteration === DUMMY_CHAT.length) {
      setDUMMY_CHAT((prev) => {
        const newChatRoom = {
          opponent: selectedFriend.name,
          id: String(DUMMY_CHAT.length + 1),
          chatting: [],
        }
        const newChatRooms = prev.concat(newChatRoom)
        return newChatRooms
      })
      navigate(`/chat/${DUMMY_CHAT.length + 1}`)
    }
  }
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    // const searchInput = document.querySelector<HTMLInputElement>('#search')
    // if (searchInput) {
    //   searchInput.focus()
    // }
    // setTimeout(() => {
    //   searchInput!.focus()
    // }, 1)
    setTimeout(() => {
      inputRef.current!.focus()
    }, 1)
  }, [showSearchInput])

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
            onClick={gotoChatRoomHandler}
          >
            1:1채팅
          </Button>
        </Modal.Footer>
      </Modal>
      <UpdateModal
        isOpen={isAddUserModalOpen}
        onClear={() => setIsAddUserModalOpen((p) => !p)}
      >
        <UpdateModal.Header>친구추가</UpdateModal.Header>
        <UpdateModal.Content>
          <div
            css={modalCard}
            onClick={() => {
              findFriendHandler('name')
            }}
          >
            <Notebook />
            <p>이름으로 친구추가</p>
          </div>
          <div
            css={modalCard}
            onClick={() => {
              findFriendHandler('stdId')
            }}
          >
            <Card />
            <p>학번으로 친구추가</p>
          </div>
        </UpdateModal.Content>
      </UpdateModal>
      <MainHeader
        headerName="친구"
        buttonNames={['search', 'adduser', 'filter']}
        onClick={headerClickHandler}
      />
      <section css={friendSection}>
        <motion.div
          css={searchInputStyle}
          animate={
            showSearchInput
              ? { opacity: 1, y: 0, display: 'block', width: '100%' }
              : { opacity: 0, y: -50, display: 'none', width: '0%' }
          }
        >
          <IconInput
            placeholder="검색"
            whichIcon="search"
            id="search"
            onChange={searchFriendHandler}
            autoFocus
            ref={inputRef}
          />
        </motion.div>

        <section
          css={myProfile}
          onClick={() => {
            navigate('/setting')
          }}
        >
          <img src={Loginuser.img} alt="프로필" css={myProfileImage} />
          <p>{Loginuser.name}</p>
        </section>
        <hr />
        <section css={favorites}>
          <p css={numberOfFavorites}>
            즐겨찾기 {DUMMY_FAVORITES_FRIENDS.length}
          </p>
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
const friendWrapper = css`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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

const modalCard = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  gap: 5px;
  flex-grow: 1;
  p {
    font-size: ${theme.textStyle.body_small.font_size};
    line-height: ${theme.textStyle.body_small.line_height};
  }
  &:hover {
    background-color: ${theme.color.background};
    cursor: pointer;
  }
`

const searchInputStyle = css`
  padding: 10px 20px;
`
const friendSection = css`
  flex-grow: 1;
`
