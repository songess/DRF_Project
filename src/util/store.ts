import { Atom, atom } from 'jotai'

interface User {
  이름: string
  이메일: string
  학번: string
  전화번호: string
  비밀번호: string
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
