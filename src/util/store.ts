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
    name: '박채원',
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
