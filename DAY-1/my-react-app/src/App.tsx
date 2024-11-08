import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
         <p>너는 {count} 번 클릭했어</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      <EmailForm/>
    </div>
  )
};

function EmailForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  function handleChange(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    if (!email.includes('@')) {
      setError('Invalid email address');
    } else {
      setError('');
      // 서버로 전송하는 로직
    }
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="text" value={email} onChange={handleChange} />
      </label>
      {error && <p>{error}</p>}
      <input type="submit" value="Submit" />
    </form>
  );
}



export default App
