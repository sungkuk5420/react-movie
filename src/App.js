import Button from "./Button";
import {useState} from "react"


function App() {
  const [toDo, setTodo] = useState("");
  const [toDos,setTodos] = useState([]);
  const onChange = (event)=>setTodo(event.target.value)
  const onSubmit = (event) =>{
    event.preventDefault();
    console.log(toDo);
    if(toDo === ""){
      return;
    }

    setTodos((currnet)=>[toDo,...currnet])
    setTodo("");
    console.log(toDos)
  }
  return (
    <div >
      <form onSubmit  = {onSubmit }>
        <input type="text" placeholder="Write your to do "
        value={toDo}
        onChange = { onChange} />
        <button> submit </button>
      </form>
      <hr />
      {toDos.map((item,index)=> <li key={index}>{item}</li>)}
    </div>
  );
}

export default App;
