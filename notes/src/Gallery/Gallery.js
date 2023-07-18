import React,{useState,useEffect} from "react";
import "./style.css";


function Gallery(){
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("items");
        // if there are todos stored
        if (savedTodos) {
          return JSON.parse(savedTodos);
        } else {
          return [];
        }
      });
      // need state to keep track of the value in the input
      const [todo, setTodo] = useState("");
    
      // useEffect to run once we return to site again
      useEffect(() => {
        localStorage.setItem("items", JSON.stringify(todos));
      }, [todos]);
    
      // function to get the value of the input and set the new state
      function handleInputChange(e) {
        // set the new state value to what's currently in the input box
        setTodo(e.target.value);
      }
    
      //delete the images
      const deleteItem =(id) => {
        // 
        const newList = todos.filter((k,i)=> i!==id);
        setTodos(newList);
      }

      const deleteAll=()=>{
        setTodos([]);
      }
    
      // function to create a new object on form submit
      function handleFormSubmit(e) {
        e.preventDefault();
        if (todo !== "") {
          setTodos([
            ...todos,
            {
              text: todo.trim()
            }
          ]);
        }
        setTodo("");
      }
    
      return (
        <div className="App">
          <h3>Make Notes</h3>
          <form className="search">
              <input
                  className="input"
                  name="todo"
                  type="text"
                  placeholder="Enter text"
                  value={todo}
                  onChange={handleInputChange}
                />

            <button className="button" onClick={handleFormSubmit}>+ Add</button>
            <button className="button" onClick={()=>deleteAll()}>Delete all</button>
          </form>
          <div className="todo-list">
            {todos.map((todo,index) => {return (
              <div className="card" key={index}>
                <p>{todo.text}</p>
                <button className="Btn delete" onClick={()=>deleteItem(index)}><i className="fa-solid fa-trash-can-arrow-up"></i></button>
              </div>
            )})}
              
          </div>
        </div>
      );
}


export default Gallery;