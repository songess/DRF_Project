# DRF-PROJECT

### 멤버

송은수, 정태현

# 프로젝트 - 서강대! 내 도도독!

임의로 지은 프로젝트 명

## 배경

프로젝트 모집을 하고보니 지원한 게 저 한명 뿐이라 프론트, 백엔드 각각 한명

뭔가 새로 만들어내는 프로젝트 보단 각 분야는 혼자해야하니, 처음부터 끝까지 혼자 처리하는 프로젝트를 기획

비록 둘이 하기때문에 큰 프로젝트는 못하겠지만, 뭔가 새로운 걸 넣어보자 해서 기획한 게 채팅 웹앱을 만들어 보자!

멤버 프론트 벡 한명씩이고, 팀 빌딩이 추석이후로 되고, 곧 시험기간이었어서 같이 협업한게 없음. 프론트엔드 위주의 발표

서비스 기획보단, 기술관련하여 얘기

## 메신저

학교 메신저 - 서강톡톡 - 메신저 용으로 아무도 사용안함

이름, 학번만 알면 검색할 수 있다  
but 불쾌한 사람들을 위한 사람이 있을 수 있으니 on,off 기능 추가

실시간 접속 중인지 확인할 수 있는 기능도 추가

# 프론트엔드

### 피그마를 통한 프레임 작성

- 괜찮아보이는 와이어프레임을 통해 프레임 짜기

### 색상에 대한 고민

학교 웹앱을 만들고 싶었기 때문에 학교 대표색상을 메인컬러로 선정하고 싶었음

하지만 틀리면 띄워야하는 빨간색과 비슷해서 UX적으로 좋아보이지 않음

빨간색을 메인컬러로 하는 브랜드들을 찾아보니 대부분 검정색, 흰색을 앱의 색상으로 사용

배포 목적이 아니니깐 학교의 메인컬러와 혼용하기로 결정!

### 배경색

배경색상을 연한분홍으로 했는데, 이것 자체가 뭔가 좀 촌스러워 보였음 -> 배경색을 흰색으로 수정

## 리액트 + 타입스크립트 + 이모션 + 스토리북

### 웹앱

리액트네이티브,플러터 등의 프레임 워크를 사용할 수 있겠지만, 리액트를 사용하고 싶었기 때문에 앱에서는 웹뷰형식으로 앱에 띄우기

flex박스를 통한 반응형 웹

### TypeScript

에러 최소화, 자동완성

### Emotion : css style

그동안 CSS와 JS코드가 분리되어있는게 편하다고 생각 -> CSS in CSS(다른 파일로 분리)

프로젝트 규모가 커지다 보니 분리되어있는게 꼭 좋은거 같지는 않다고 생각, 개발할 때 다른파일에 있는게 불편

styled-component는 컴포넌트와 스타일드컴포넌트가 헷갈림

Emotion 선정 + Theme

### StoryBook : 컴포넌트 라이브러리

타입스크립트를 통해 확장성있는 컴포넌트를 만들어보고자 해서 변수들을 늘리다보니, 컴포넌트의 변수가 많아졌고 이를 로컬서버에 띄우기가 번거로움

스토리북은 독립적인 환경에서 모든 변수의 경우의 수에 대한 렌더링 결과를 확인해볼 수 있다

### jotai : 상태관리 라이브러리

전역변수처럼 사용하기 위한 라이브러리. context API보다 효율성이 좋고, 다른 유용한 상태관리 라이브러리도 많지만 useState과 사용법이 가장 비슷해서 이걸로 선정

### CSSTransition : 애니메이션

최근 메타는 `framer-motion`, 간단한 애니메이션만 넣고 싶었고 이는 `CSSTransition`만으로 충분할 것 같아 CSSTransition 선택

## 코드

`.babelrc`,`config-overrids.js`는 babel을 위함

`custom.d.ts`는 svg를 컴포넌트처럼 쓰기 위함

- CRA의 문제점들을 경험, 다음번엔 vite혹은 next로 개발
- 웹팩 수정 시 스토리북도 별도로 수정해줘야 했음

### 실제코드, 환경을 보면서
