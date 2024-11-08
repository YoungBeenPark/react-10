# Day 44 문제

## **쉬운 문제 (15개)**

### **React의 핵심 개념 이해**

- **질문**: React에서 컴포넌트란 무엇이며, 어떤 두 가지 형태로 작성할 수 있나요?

컴포넌트란?

- 독립적이고 재사용 가능한 UI의 구성 요소로 react앱의 기본 빌딩 블록임

형태

- 함수형 - 순수 함수로 정의, props를 받아 UI를 반환, 상태관리와 생명주기 메서드를 Hook을 통해 사용 가능
- 클래스형 - react.component를 상속받아 정의, 상태관리와 생명주기 메서드를 직접 사용(hook의 등장으로 사용반도가 줄어들고 있음)

### **JSX의 역할**

- **질문**: JSX란 무엇이며, React에서 어떤 역할을 하나요?
- **답변**: JSX - javascript를 확장한 문법, HTML과 유사한 구조로 javascript코드 내에서 사용 가능하게 함(react UI를 정의하는데 사용)
- 역할

```jsx
// 1. UI 구성 요소 - HTML과 유사한 문법을 이용해 컴포넌트의 레이아웃을 쉽게 작성 가능
const element = <h1>Hello, world!</h1>;

// 2. javascript 표현식 - {}를 이용하여 변수나 함수 호출이 가능
const name = "Alice";
const element = <h1>Hello, {name}!</h1>;

// 3. 컴포넌트 재사용 - JSX를 이용해 사용자 정의 컴포넌트를 쉽개 만들고 재사용이 가능함
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// 4. 조건부 렌더링 - javascript의 조건문을 사용해 특정 조건에 따라 다른 UI를 렌더링 할 수 있음
const isLoggedIn = true;
const element = (
  <h1>{isLoggedIn ? "Welcome back!" : "Please sign in."}</h1> // 삼항
);

// 5. 스타일, 속성 적용 - JSX를 사용해 HTML요소에 속성과 스타일을 쉽게 적용 가능(camelCase로 작성해야 함)
const element = <div style={{ color: "blue" }}>Hello, world!</div>;
```

### **State와 Props의 차이**

- **질문**: React에서 **state**와 **props**의 차이점을 설명하세요.
- **답변**:

| 구분        | State                                              | Props                                             |
| ----------- | -------------------------------------------------- | ------------------------------------------------- |
| 정의        | 컴포넌트 내부에서 관리되는 동적 데이터             | 부모 컴포넌트에서 자식 컴포넌트로 전달되는 데이터 |
| 변경 가능성 | 컴포넌트 내에서 변경 가능                          | 변경 불가능 (부모 컴포넌트에서만 변경 가능)       |
| 사용 용도   | 컴포넌트의 동적인 상태를 관리                      | 컴포넌트 간 데이터 전달 및 설정                   |
| 초기화 방법 | useState 훅 또는 클래스 컴포넌트의 this.state 사용 | 부모 컴포넌트에서 속성으로 전달                   |
| 예시        | 사용자 입력, 토글 상태 등                          | 사용자 이름, 설정 값 등                           |

### **이벤트 처리 방식**

- **질문**: React에서 이벤트를 처리할 때 주의해야 할 두 가지 사항은 무엇인가요?
- **답변**: 1. camelCase를 이용해야함 2. 자주 호출되는 이벤트(예 : 스크롤, 입력 등)는 debounce나 throttle 기법을 사용해 호출 빈도를 조절

### **컴포넌트 내 조건부 렌더링**

- **질문**: 컴포넌트에서 조건부 렌더링을 구현하는 일반적인 방법 두 가지는 무엇인가요?
- **답변**: 1. if 문을 사용한 조건부 렌더링 2. 삼항이나 논리 연산자를 이용

### **리스트 렌더링과 Key**

- **질문**: React에서 배열을 렌더링할 때 각 요소에 `key`를 부여하는 이유는 무엇인가요?
- **답변**: 각 요소를 고유하게 식별하고 올바르게 설정되면 react가 어떤 항목을 변경했고 추가, 삭제를 감지하고 업데이트해 도움을 줌

### **useState Hook의 기본 사용법**

- **질문**: 함수형 컴포넌트에서 `useState` Hook을 사용하여 상태를 관리하는 기본적인 방법을 설명하세요.

```jsx
**답변**:

import React, { useState } from 'react';
// 1. useState를 사용하기 위해선 react를 임포트 함

const Counter = () => {
    const [count, setCount] = useState(0);
		// 2. useState를 호출해 상태 변수와 해당 상태를 업데이트하는 함수를 선언해 초기 상태값을 인자로 받음

    return (
        <div>
            <p>현재 카운트: {count}</p>
            <button onClick={() => setCount(count + 1)}>증가</button>
        </div>
    );
    // 3. 버튼 클릭 시 setCount함수를 호출해 상태 업데이트함 (증감이 있어 초기값에서 1을 더한 값을 반환)
};

export default Counter;
```

### **useEffect Hook의 역할**

- **질문**: `useEffect` Hook은 어떤 용도로 사용되나요?
- **답변**: React 함수형 컴포넌트에서 부수 효과(side effects)를 처리하는 데 사용
- 데이터 Fetching: API 호출을 통해 데이터를 가져올 때.
- 구독 설정: 이벤트 리스너나 외부 데이터 소스에 구독할 때.
- DOM 조작: 컴포넌트가 렌더링된 후 DOM을 직접 수정할 때.
- 정리 작업: 컴포넌트가 언마운트될 때 리소스를 정리할 때.

### **Props로 함수 전달하기**

- **질문**: 부모 컴포넌트에서 자식 컴포넌트로 함수를 props로 전달하는 이유는 무엇인가요?
- **답변**:
- 상태 관리: 부모 컴포넌트가 자식 컴포넌트의 상태를 관리할 수 있도록 하여, 자식에서 발생한 이벤트에 따라 부모의 상태를 업데이트할 수 있음
- 이벤트 처리: 자식 컴포넌트에서 발생하는 이벤트(예: 버튼 클릭)를 부모 컴포넌트에서 처리할 수 있도록 하여, 더 나은 상태 관리를 가능하게 함
- 재사용성: 자식 컴포넌트가 특정 동작을 수행할 때, 부모에서 정의한 로직을 재사용할 수 있음, 코드의 중복을 줄이고, 유지보수를 용이하게 함
- 데이터 흐름: React의 단방향 데이터 흐름을 유지하면서, 부모에서 자식으로 필요한 기능이나 데이터를 전달할 수 있음

### **컴포넌트의 생명주기 메서드**

- **질문**: 클래스형 컴포넌트에서 컴포넌트가 마운트된 직후에 호출되는 생명주기 메서드는 무엇인가요?
- **답변**: componentDidMount()

### **고차 컴포넌트(HOC)의 기본 개념**

- **질문**: 고차 컴포넌트(HOC)란 무엇인가요?
- **답변**: 컴포넌트를 인자로 받아 새로운 컴포넌트를 반환하는 함수로, 코드 재사용성을 높임

### **고차 컴포넌트의 네이밍 컨벤션**

- **질문**: HOC의 이름을 지을 때 일반적으로 어떤 접두사를 사용하나요?
- **답변**: with
- withAuth : 인증 관련 기능을 추가하는 HOC
- withDataFetching : 데이터 fetching 기능을 추가하는 HOC
- withLoading : 로딩 상태를 관리하는 HOC

### **Context API의 목적**

- **질문**: React에서 Context API는 어떤 문제를 해결하기 위해 사용되나요?
- **답변**: props drilling 문제

- react 애플리케이션에서 발생하는 문제로 상위 컴포넌트에서 하위 컴포넌트로 props를 여러 단계에 걸쳐 전달해야 할 떄 발생

### **Redux의 주요 요소**

- **질문**: Redux에서 상태 관리를 위한 세 가지 핵심 요소는 무엇인가요?
- **답변**: store - 애플리케이션의 상태를 담고 있는 객체, action - 상태에 변경을 요청하는 객체(type, payload 포함), reducer - 상태와 액션을 받아 새로운 상태를 반환하는 순수 함수

### **React Router의 기본 사용법**

- **질문**: React Router에서 URL 경로에 따라 컴포넌트를 렌더링하기 위해 사용하는 컴포넌트는 무엇인가요?
- **답변**: Route컴포넌트로 특정 경로에 대해 어떤 컴포넌트를 렌더링할지 정의함