import { useState } from "react";
import "./App.scss";
import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./components/TodoTemplate";
import Todolist from "./components/Todolist";

const App = () => {
  //id, text, checked
  const [todos,setTodos] = useState([
    {id:1, text:"리엑트의 기초 알아보기", checked:false},
    {id:2, text:"컴포넌트 스타일링 해보기", checked:true}
  ]);
  const handleinsert =(value)=>{
    const todo = {id:todos.length+1, text:value, checked:false};
    setTodos([...todos,todo]);
  }
  const handleChecked = (id)=>{
    const toggle = todos.map((list)=>{
      return(list.id  === id) ? {...list,checked:!list.checked} : list;
    })
    setTodos(toggle);
    // setTodos(
    //   todos.map((list)=>{
    //     return list.id === id ? {...list, checked: !list.checked} : list;
    //   })
    // );
  }
  return (
    <div className="app">
      <TodoTemplate>
        <TodoInsert onInsert={handleinsert}/>
        <Todolist todos={todos} onChecked={handleChecked}/>
      </TodoTemplate>
    </div>
  );
};

export default App;
