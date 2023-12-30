import { atom } from 'jotai'
export interface UserInterface {
  name: string
  major: string
  studentId: string
  img: string
  favorites?: boolean
  email: string
  phoneNumber: string
  password: string
  id: number
  index?: number
}

interface Chatting {
  content: string
  date: string
  time: string
  id: string
  from: string
}

interface ChatRoom {
  chatting: Chatting[]
  opponent: string
  id: string
}

export const DUMMY_CheckList = atom<number[]>([])

export const DUMMY_Users = atom<UserInterface[]>([
  {
    name: '송은수',
    major: '컴퓨터공학과',
    studentId: '20201593',
    img: '/myProfileImage2.jpeg',
    email: 'songess@naver.com',
    phoneNumber: '01091459931',
    password: 'qmfforvldzm',
    id: 1,
  },
  {
    name: '채원',
    major: '디자인과',
    studentId: '20202020',
    img: '/myProfileImage.jpg',
    email: 'star7602@naver.com',
    phoneNumber: '01000000000',
    password: 'qmfforvldzm',
    id: 2,
  },
])

export const LoginUser = atom<UserInterface>({
  name: '송은수',
  major: '컴퓨터공학과',
  studentId: '20201593',
  img: '/myProfileImage2.jpeg',
  email: 'songess@naver.com',
  phoneNumber: '01091459931',
  password: 'qmfforvldzm',
  id: 1,
})

export const DUMMY_friends = atom<UserInterface[]>([
  {
    name: '철수',
    major: '컴퓨터공학과',
    studentId: '20200000',
    id: 1,
    img: 'defaultImage.jpeg',
    favorites: false,
    email: 'songess@naver.com',
    phoneNumber: '01091459931',
    password: 'qmfforvldzm',
  },
  {
    name: '영희',
    major: '컴퓨터공학과',
    studentId: '20200001',
    id: 2,
    img: 'defaultImage.jpeg',
    favorites: false,
    email: 'songess@naver.com',
    phoneNumber: '01091459931',
    password: 'qmfforvldzm',
  },
  {
    name: '채원',
    major: '디자인과',
    studentId: '20200002',
    id: 4,
    img: 'defaultImage.jpeg',
    favorites: true,
    email: 'songess@naver.com',
    phoneNumber: '01091459931',
    password: 'qmfforvldzm',
  },
  {
    name: '주혁',
    major: '소프트웨어학과',
    studentId: '20200003',
    id: 5,
    img: 'defaultImage.jpeg',
    favorites: false,
    email: 'songess@naver.com',
    phoneNumber: '01091459931',
    password: 'qmfforvldzm',
  },
  {
    name: '학림',
    major: '화학과',
    studentId: '20200004',
    id: 6,
    img: 'defaultImage.jpeg',
    favorites: false,
    email: 'songess@naver.com',
    phoneNumber: '01091459931',
    password: 'qmfforvldzm',
  },
  {
    name: '강남',
    major: '화과',
    studentId: '20200005',
    id: 7,
    img: 'defaultImage.jpeg',
    favorites: false,
    email: 'songess@naver.com',
    phoneNumber: '01091459931',
    password: 'qmfforvldzm',
  },
  {
    name: '혜화',
    major: '화학과',
    studentId: '20200006',
    id: 8,
    img: 'defaultImage.jpeg',
    favorites: false,
    email: 'songess@naver.com',
    phoneNumber: '01091459931',
    password: 'qmfforvldzm',
  },
  {
    name: '채은',
    major: '화학과',
    studentId: '20200007',
    id: 9,
    img: 'defaultImage.jpeg',
    favorites: true,
    email: 'songess@naver.com',
    phoneNumber: '01091459931',
    password: 'qmfforvldzm',
  },
])

export const DUMMY_Allusers = atom<UserInterface[]>([
  {
    name: '서강',
    major: '디자인과',
    studentId: '20200000',
    id: 0,
    img: 'defaultImage.jpeg',
    favorites: false,
    email: 'songess@naver.com',
    phoneNumber: '01091459931',
    password: 'qmfforvldzm',
  },
  {
    name: '연세',
    major: '경제학과',
    studentId: '20201234',
    id: 0,
    img: 'defaultImage.jpeg',
    favorites: false,
    email: 'songess@naver.com',
    phoneNumber: '01091459931',
    password: 'qmfforvldzm',
  },
  {
    name: '주혁',
    major: '컴퓨터공학과',
    studentId: '20201593',
    id: 0,
    img: 'defaultImage.jpeg',
    favorites: false,
    email: 'songess@naver.com',
    phoneNumber: '01091459931',
    password: 'qmfforvldzm',
  },
])

export const DUMMY_chat = atom<ChatRoom[]>([
  {
    chatting: [
      {
        content: '안녕하세요',
        date: '2023. 10. 10.',
        time: '오후 10:23:01',
        id: '1',
        from: '채원',
      },
      {
        content: '시러요',
        date: '2023. 10. 10.',
        time: '오후 10:24:01',
        id: '2',
        from: '채원',
      },
      {
        content: '>.<',
        date: '2023. 10. 10.',
        time: '오후 10:25:01',
        id: '3',
        from: '송은수',
      },
      {
        content: '혹시 시간 되시나요?',
        time: '오후 10:26:01',
        date: '2023. 10. 10.',
        id: '4',
        from: '채원',
      },
    ],
    opponent: '채원',
    id: '1',
  },
  {
    chatting: [
      {
        content: '안녕하세요',
        time: '오후 10:33:01',
        date: '2023. 10. 10.',
        id: '1',
        from: '학림',
      },
      {
        content: '하지 마세요',
        time: '오후 10:34:01',
        date: '2023. 10. 10.',
        id: '2',
        from: '학림',
      },
      {
        content: '당장 해결해',
        time: '오후 10:35:01',
        date: '2023. 10. 10.',
        id: '3',
        from: '송은수',
      },
      {
        content: '아까 ㅈㄴ 어이없었음',
        time: '오후 10:36:01',
        date: '2023. 10. 10.',
        id: '4',
        from: '학림',
      },
    ],
    opponent: '학림',
    id: '2',
  },
  {
    chatting: [
      {
        content: '안녕하세요',
        time: '오후 10:43:01',
        date: '2023. 10. 10.',
        id: '1',
        from: '주혁',
      },
      {
        content: '하지 마세요',
        time: '오후 10:44:01',
        date: '2023. 10. 10.',
        id: '2',
        from: '주혁',
      },
      {
        content: '당장 해결해',
        time: '오후 10:45:01',
        date: '2023. 10. 10.',
        id: '3',
        from: '송은수',
      },
      {
        content: '그래서 어떻게 하면 되는데?',
        date: '2023. 10. 10.',
        time: '오후 10:46:01',
        id: '4',
        from: '송은수',
      },
    ],
    opponent: '주혁',
    id: '3',
  },
])
