---
sidebar_position: 1
---

# Next.js 프로젝트 세팅
- [Next.js 프로젝트 세팅](#nextjs-프로젝트-세팅)
  - [Next.js 설치하기 with Typescript](#nextjs-설치하기-with-typescript)
  - [프로젝트 실행하기](#프로젝트-실행하기)
  - [ESLint Airbnb 규칙 설정하기](#eslint-airbnb-규칙-설정하기)
  - [prettier 설치하기](#prettier-설치하기)
    - [1. Prettier 및 플러그인 설치하기](#1-prettier-및-플러그인-설치하기)
    - [2. .prettierrc 파일 생성](#2-prettierrc-파일-생성)

---

## Next.js 설치하기 with Typescript

```
npx create-next-app --typescript
yarn create next-app --typescript
```

## 프로젝트 실행하기
```
npm run dev
yarn dev
```

## ESLint Airbnb 규칙 설정하기
```
1. airbnb + 종속 패키지까지 설치하기
npx install-peerdeps --dev eslint-config-airbnb
or 각각 개별적 설치
npm install -D eslint eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-ally

2. TypeScript 관련 airbnb, lint 패키지 설치하기
npm install -D eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

## prettier 설치하기

### 1. Prettier 및 플러그인 설치하기
**eslint**와 **prettier**를 함께 사용할 시 규칙들이 충돌됨으로 의존성 패키지들을 설치해야 한다.

```
npm install -D prettier eslint-plugin-prettier eslint-config-prettier
```
  - eslint-plugin-prettier : eslint에서 prettier랑 충돌할 규칙 비활성화
  - eslint-config-prettier : 포매팅할때 prettier 사용하게 하기
### 2. .prettierrc 파일 생성

```
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all"
}
```

  - "semi": false - 세미콜론 사용여부. (Next.js는 세미콜론 ; 사용안해서 false함)
  - "singleQuote": true - 작은 따옴표 ' 사용
  - "tabWidth": 2, - 탭 너비 설정
  - "trailingComma": "all" - 여러 줄일때 마지막에 후행 콤마 사용