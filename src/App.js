import React, {useEffect} from "react";
import TodoList from "./Todo/TodoList/TodoList";
import Context from "./context";
import Loader from "./Loader/Loader";

// import AddTodo from "./Todo/AddTodo";
const AddTodo = React.lazy(()=>import("./Todo/AddTodo/AddTodo"));

function App() {
  // 1
  // let todos =[
  //   {id:1,completed:false,title:"Купить Хлеб"},
  //   {id:2,completed:false,title:"Купить Молоко"},
  //   {id:3,completed:false,title:"Купить Кефир"}
  // ]
  // const toggleTodo = (id) =>{
  //   todos.map(todo=>{
  //     if(todo.id===id){
  //       todo.completed=!todo.completed
  //     }
  //     return todo
  //   })
  // }
  // 2
  
  // const [todos,setTodos] = React.useState([
  //   {id:1,completed:false,title:"Купить Хлеб"},
  //   {id:2,completed:false,title:"Купить Молоко"},
  //   {id:3,completed:false,title:"Купить Кефир"}
  // ])

  let [todos,setTodos] = React.useState([]);
  const [loading,setLoading] = React.useState(true);

  useEffect(()=>{
    // https://jsonplaceholder.typicode.com //типа база постов 
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(response => response.json())
    .then(todos => {
      setTimeout(()=>{
        setTodos(todos)
        setLoading(false)
      },2000)
      
    })
  },[]);// пустой массив чтоб отработало один раз (хз почему так но как-то да...)

  const editTodo =(title,id)=>{
    setTodos(
      todos.map(todo=> {
        if(todo.id===id){
          if(title.trim().length){// trim удаляет пробелы с начала м конца строки
            todo.title=title;
          }
        }
        return todo;
      }))
  }

  const toggleTodo = (id) =>{
    setTodos(
      todos.map(todo=>{
        if(todo.id===id){
          todo.completed=!todo.completed
        } 
      return todo
    }))
  }
  //Context
  const removeTodo =(id)=>{
    setTodos(todos.filter(todo=> todo.id!==id)
    )
  }

  //Forms 10
  const addTodo =(title)=>{
    setTodos(todos.concat([//массив
      {//один объект
        title,
        id: todos.length+1,
        completed:false
      }]))
  }

  //Мой метод


  
  return (
    <Context.Provider value={{removeTodo}}>
      <div className="wrapper">
        <h1>React-Todo</h1>
        <React.Suspense fallback={<Loader/>}>
          <AddTodo onCreate={addTodo}/>
        </React.Suspense>
        {loading&&<Loader />}
        {/*если loading будет правда, то я показываю компонент <Loader />*/}
        {todos.length?(<TodoList todos={todos} onToggle={toggleTodo} editTodo={editTodo}/>):(<p>No todos!</p>)}
      </div>
    </Context.Provider>
  );
}

export default App;
