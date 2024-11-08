---

# **Day 45 문제**

# **쉬운 문제 (15개)**

## **상태(state)란 무엇인가요?**

- 컴포넌트가 자체적으로 관리하는 데이터
- 상호작용이나 시간에 따라 변화할 수 있는 정보를 저장
- 렌더링에 직접적인 영향을 미침
- State를 통해 동적인 UI 구현 가능

## **속성(props)의 주요 용도는 무엇인가요?**

- 부모 컴포넌트가 자식 컴포넌트에게 전달하는 데이터
- 컴포넌트간의 데이터 전달을 위한 매개체
- props는 읽기 전용,자식 컴포넌트에서 변경 불가
- props를 통해 컴포넌트 재사용성을 높임
- 코드 가독성과 유지보수성을 높임

## **React에서 상태(state)를 선언할 때 사용하는 훅은 무엇인가요?**

- `useState`
- 함수형 컴포넌트에서 상태 변수를 선언하고 관리를 할 수 있음

## **부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달할 때 사용하는 것은 무엇인가요?**

- `props`
- 부모 컨포넌트가 자식 컴포넌트에 데이터를 전달해줌

## **상태(state)를 업데이트하는 함수는 무엇이라고 하나요?**

- `setState` - 상태를 업데이트 할 떄
- `this.setState` - 클래스형 컴포넌트에서 상태를 업데이트 할 때
- `useState` - 함수형 컴포넌트에서 상태와 상태를 업데이트하는 함수를 반환

## **속성(props)은 변경 가능한가요?**

- 못합니다! 속성(props)은 부모 컴포넌트에서 전달되며, 자식 컴포넌트에서는 읽기 전용입니다. 자식 컴포넌트에서 props를 직접 변경하려고 하면 오류가 발생합니다.

## **함수형 컴포넌트에서 상태(state)를 선언하려면 어떤 함수를 사용해야 하나요?**

- `useState` - 함수형 컴포넌트에서 상태와 상태를 업데이트하는 함수를 반환

## **React에서 단방향 데이터 흐름이란 무엇을 의미하나요?**

- 단방향 데이터 흐름(one-way data flow)은 데이터가 부모 컴포넌트에서 자식 컴포넌트로만 흐르는 구조를 의미함

## **상태(state)와 속성(props)의 가장 큰 차이점은 무엇인가요?**

| 구분 | 상태 (State) | 속성 (Props) |
| --- | --- | --- |
| 정의 | 컴포넌트 내부에서 관리되는 데이터 | 부모 컴포넌트에서 자식 컴포넌트로 전달되는 데이터 |
| 변경 가능성 | 컴포넌트 내부에서 변경 가능 | 읽기 전용, 자식 컴포넌트에서 변경 불가 |
| 소유 | 컴포넌트가 소유 | 부모 컴포넌트가 소유 |
| 사용 용도 | 컴포넌트의 동적인 상태를 관리 | 컴포넌트 간 데이터 전달 및 설정 |
| 업데이트 | setState를 통해 업데이트 | 부모 컴포넌트에서 변경하여 재렌더링 |

## **컴포넌트가 다시 렌더링되는 주요 원인은 무엇인가요?**

- 상태나 속성이 변경되면 컴포넌트가 다시 렌더링 됨
- 상태(state) 변경: setState로 상태를 업데이트하면 렌더링됨
- 속성(props) 변경: 부모가 자식에게 전달하는 속성이 바뀌면 렌더링됨
- 컨텍스트(Context) 변경: Context의 값이 변경되면 관련 컴포넌트가 렌더링됨

## **상태(state)를 변경할 때 직접 수정해도 되나요?**

- 안됨.
- 상태가 변경되었음을 React가 인식하지못해 렌더링이 되지 않을 수 있음
- 직접수정하면 상태 변화를 추적하기 어려워 버그가 발생
- 불변성을 유지하지 않으면 React의 최적화 기능 활용이 불가함

이로써 React에서 State는 불변성을 유지하는것이 중요함

## **속성(props)을 통해 전달된 데이터를 자식 컴포넌트에서 수정할 수 있나요?**

- 위에 문제에서 말했듯이 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 단방향 데이터 흐름을 가지고 있기에 props는 자식에서 수정이 불가함

### **상태(state)와 속성(props) 중 어떤 것이 컴포넌트 내부에서 관리되나요?**

- 상태! State.
- 상태(state): 컴포넌트의 내부 데이터로, 컴포넌트가 스스로 관리하며, setState를 통해 업데이트할 수 있습니다. 상태가 변경되면 컴포넌트가 다시 렌더링 됨
- 속성(props): 단방향 데이터 흐름이므로 자식 컴포넌트는 읽기만 할 수 있고, 직접 수정할 수는 없음 속성은 부모에 의해 관리 됨

## **상태(state)의 초기값을 설정하는 방법은 무엇인가요?**

클래스형 컴포넌트에서 초기값

- 생성자에서 `this.state`를 사용하여 초기값 설정

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0, // 초기값 설정
    };
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}
```

함수형 컴포넌트에서 초기값

- `useState`훅을 사용하여 초기값 설정

```jsx
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0); // 초기값 설정

  return <div>{count}</div>;
}
```

## **부모 컴포넌트에서 자식 컴포넌트로 함수를 전달할 수 있나요?**

```jsx
// 부모 컴포넌트
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const showMessage = () => {
    alert('안녕하세요, 부모 컴포넌트에서 보낸 메시지입니다!');
  };

  return <ChildComponent onClick={showMessage} />;
}; // ChildComponent prop으로 전달

export default ParentComponent;
```

```jsx
// 자식 컴포넌트
import React from 'react';

const ChildComponent = ({ onClick }) => {
  return <button onClick={onClick}>메시지 보기</button>;
}; // ChildComponent prop을 받아 버튼 클릭시 함수 호출됨

export default ChildComponent;
```

---