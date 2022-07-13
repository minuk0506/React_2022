# 다이어트 도와줘

- 오늘 하루 섭취한 식품의 칼로리가 얼마인지 기록하여 다이어트를 하는데 도와주는 App

* MYSQL + Express + NodeJS + React 연동 프로젝트

## NodeJS backend Project 를 생성하기 위하여

- 프로젝트 생성 : express-21c node-310-Food
- 프로젝트 폴더에서 : npm install

## React Frontend Project 를 생성하기 위하여

- node-310-Food 폴더에서 React client 생성 create-react-app client
- client 폴더에서 터미널 열기
- yarn 실행하여 update
- yarn build 실행하여 build 생성하기
- node-310-Food/client/build 폴더 생성 확인

## nodeJS 에서 client 인식시키기

- nodejs-310-Food/app.js 파일 열기

* `app.use(express.static(path.join('./public')));` 부분 `app.use(express.static(path.join('./client/build')));` 으로 변경
* `app.use("/", indexRouter);` 부분 삭제 또는 주석처리
* nodejs-310-Food 폴더에서 서버 Start : nodemon 실행하기
* Web Browser 에서 localhost:3000 주소 입력하여 React 화면 출력 확인

## React 프로젝트 파일 이름 변경

- client/src 폴더에 App._ 파일들을 모두 ReactJS._ 로 변경

* ReactJS.js(App.js 였던) 파일 App 과 관련된 부분들 ReactJS 로 변경
* index.js 파일에 App 과 관련된 부분들 ReactJS 로 변경
* index.js 파일 `reportWebVitals();` 부분 주석
* public/index.html lang ko 로 변경

* /client 터미널에서 yarn build

## MySQL 연동하기

- MySQL DB 와 연동하기 위해 Dependency 설치

```
npm install mysql2
npm install sequelize
npm install moment
```

- Sequelize 도구 설치 : 반드시 global 로 설치

```
npm install -g sequelize-cli
npm install -g sequelize-auto
npm install -g mysql2
```

- Sequelize 도구를 사용하여 mysql DB 연동 정보 자동화 : 터미널

```
sequelize init
sequelize-auto -o "./models" -d mydb -h 127.0.0.1 -u root -x '!Korea8080' -e mysql -l esm
```

- sequelize-auto 사용할때 끝에 `-l esm` 옵션을 생략하면 CommonsJS(ES5 이전) 버전으로 모듈이 생성된다 (const import 등등 많은게 바뀌어버림)

* 사용자의 password 에 특수문자가 포함된 경우 반드시 작은따옴표로 묶어 줄 것
* 선택사항들

```
-o 폴더 : model 설정 파일이 출력될 곳
-d DB명 : 사용할 mysql DB
-h Host : MySQL 서버가 설치된 컴퓨터의 ip, localhost, 127.0.0.1
-u username : MySQL 접속할 권한이 있는 사용자
-x PASSWORD : MySQL 사용자 비밀번호
-e mysql : 사용할 데이터베이스 소프트웨어(engine)
-l ems : ES6+ 버전으로 생성하기
-l em5 : ES5 버전으로 생성하기
-p PORTNUM : port 3306 이외의 다른포트로 사용하는 경우
```
