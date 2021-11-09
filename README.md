# 부동산 dapp 개발 example 

간단한 부동산 거래기능을 담는 기능을 이더리움 네트워크에 담을 수 있는 smartcontract를 만든다. <br>
해당 example을 돌리기 위해 다음과 같은 사전 준비가 필요하다. 

## 사전준비 

## ganache ([https://www.trufflesuite.com/ganache](https://www.trufflesuite.com/ganache))

- blockchain을 테스트 하기 위한 UI를 가진 tool (Metamask에서 붙을 수 있는 가상의 network)
- 로컬에서 테스트 용도로 사용할 수 있는 테스트 네트워크다.
- 각 계정의 밸류 및 트랜잭션의 내용을 확인 할 수 있다.
- truffle관 연동하여 테스트를 하고자 할 때 사용한다.

## truffle

- node.js 설치 및 npm을 이용한 truffle 설치한다.
- 최신의 truffle 버전을 사용하면 최신의 ganache를 사용하자( 그렇지 않으면 삽질할 수 있음..)
- truffle을 통해 smart contract 프로젝트의 초기화 및 deploy 테스트 등을 할 수 있다.
- 다음과 같은 명령등이 존재한다.
- 

```bash
# truffle을 이용해 프로젝트를 생성한다
truffle init 

# truffle을 이용해 truffle-config.js에 정의되어 있는 ganache 네트워크에 컴파일 및 배포한다.
truffle migrate --network ganache
# 다음의 명령을 쓰면 전부다 다시 컴파일 후 배포한다. 
truffle migrate --compile-all --reset --network ganache

# ganache network에 console 모드로 접근한다. 
truffle console --network ganache

# ganache network에서 테스트 한다.
truffle test --network ganache
```

## 실행방법

1. ganache를 실행한다. (ganache의 port가 truffle-config의 port와 일치한다 가정함)
2. `truffle migrate --network ganache` 를 이용해 contract를 배포한다.
3. index.html 경로에서 `npm run dev`를 실행해 사이트를 localhost에 띄운다.
4. metamask에 사이트를 연결하고 계정정보가 ganache와 일치하는지 확인한다. 
5. 부동산 구입 테스트를 진행한다. 
