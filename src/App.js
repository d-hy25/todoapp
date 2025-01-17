import { useEffect, useState } from "react";
import "./App.scss";
import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./components/TodoTemplate";
import Todolist from "./components/Todolist";

const App = () => {
  //id, text, checked
  const [todos,setTodos] = useState(()=>{
    //초기값
    const load = localStorage.getItem('todos');
    return load ? JSON.parse(load) : [];
  });
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);

  // const handleinsert =(value)=>{
  //   // const todo = {id:todos.length+1, text:value, checked:false};
  //   const todo = {id:Date.now(), text:value, checked:false};
  //   setTodos([...todos,todo]);
  // }
  const handleinsert = (value)=>{
    // const todo = {id:todos.length+1, text:value, checked:false};
    const todo = {id:Date.now(), text:value, checked:false};
    setTodos((prev)=>{return[...prev,todo]} );
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
  const handleDelete = (id)=>{
    //id만 제외하고 todos 배열을 구성
    const result = todos.filter((list)=>{
      return list.id !== id;
    });
    setTodos(result);
  }
  return (
    <div className="app">
      <TodoTemplate>
        <TodoInsert onInsert={handleinsert}/>
        <Todolist todos={todos} onChecked={handleChecked} onRemove={handleDelete}/>
      </TodoTemplate>
    </div>
  );
};

export default App;
