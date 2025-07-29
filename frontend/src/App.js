import { useEffect, useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    const gettodos = async () => {
      const response = await fetch(`http://localhost:5000/api/todos`, {
        method: "GET",
      });

      const todos = await response.json();
      setTodos(todos);
    };

    gettodos();
  }, []);

  const createNewTodo = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:5000/api/todos`, {
      method: "POST",
      body: JSON.stringify({ task: content }),
      headers: { "Content-type": "application/json" },
    });

    const newTodo = await res.json();
    setContent("");
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = async (todoID) => {
    const res = await fetch(`http://localhost:5000/api/todos/${todoID}`, {
      method: "DELETE",
    });
    if (!res.ok) return;
    setTodos((prev) => prev.filter((todo) => todo._id !== todoID)); //set todos after delete
  };

  return (
    <div className="container">
      <div className="">
        <h1 className="text-red-700">Task Manager</h1>

        <form className="todo-from" onSubmit={createNewTodo}>
          <input
            type="text"
            className="todo-input"
            placeholder="Add a new todo.."
            value={content}
            required
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="submit" className="todo-button">
            Add Todo
          </button>
        </form>

        <div>
          {todos.length > 0 ? (
            todos.map((todo) => (
              <div key={todo._id} className="todos">
                <p>{todo.task}</p>
                <p> {todo.status ? "completed" : "pending"}</p>
                <button onClick={() => deleteTodo(todo._id)}>Delete</button>
              </div>
            ))
          ) : (
            <div>
              <p>No todos founds</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
