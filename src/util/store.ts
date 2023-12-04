import { Atom, atom } from 'jotai'

interface User {
  이름: string
  이메일: string
  학번: string
  전화번호: string
  비밀번호: string
}
interface FriendInfo {
  name: string
  major: string
  id: number
  img: string
  favorites: boolean
  index?: number
}

export const DUMMY_Users = atom<User[]>([
  {
    이름: '송은수',
    이메일: 'songess@naver.com',
    학번: '20201593',
    전화번호: '01091459931',
    비밀번호: 'qmfforvldzm',
  },
  {
    이름: '박채원',
    이메일: 'star7602@naver.com',
    학번: '20201593',
    전화번호: '01099999999',
    비밀번호: 'qmfforvldzm',
  },
])

export const LoginUser = atom<User>({
  이름: '송은수',
  이메일: 'songess@naver.com',
  학번: '20201593',
  전화번호: '01091459931',
  비밀번호: 'qmfforvldzm',
})

export const DUMMY_friends = atom<FriendInfo[]>([
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
  {
    name: '강남',
    major: '화과',
    id: 7,
    img: 'defaultImage.jpeg',
    favorites: false,
  },
  {
    name: '혜화',
    major: '화학과',
    id: 8,
    img: 'defaultImage.jpeg',
    favorites: false,
  },
  {
    name: '채은',
    major: '화학과',
    id: 9,
    img: 'defaultImage.jpeg',
    favorites: true,
  },
])

export const DUMMY_Allusers = atom<User[]>([
  {
    이름: '서강대',
    이메일: 'songess@naver.com',
    학번: '20200000',
    전화번호: '01091459931',
    비밀번호: 'qmfforvldzm',
  },
  {
    이름: '서강',
    이메일: 'songess@naver.com',
    학번: '20201234',
    전화번호: '01091459931',
    비밀번호: 'qmfforvldzm',
  },
])
