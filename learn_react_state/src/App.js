import './App.css'
import { useState } from 'react';
import ClassButton from './components/ClassButton';

const App = () => {
  const [counter, setCounter] = useState(1);
  const [user, setUser] = useState({name: "名字", age: 18});
  const buttonName = "类组件按钮";

  const addHandler = () => {
    setCounter(counter + 1);
  }
  const reduceHandler = () => {
    setCounter(counter - 1);
  }
  const userHandler = () => {
    setUser({name: "新名字", age: 20});
  }

  return <div className="box">
    <h2>{counter} -- {user.name} -- {user.age}</h2>
    <button onClick={reduceHandler}> - </button>
    <button onClick={addHandler}> + </button>
    <button onClick={userHandler}>修改用户</button>
    <ClassButton buttonName={buttonName} />
  </div>
}

export default App;