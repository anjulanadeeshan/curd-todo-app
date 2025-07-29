import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [content, setContent] = useState("");
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-3">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-xl">
          <h1 className="text-center font-semibold text-3xl mb-6">
            Task Manager
          </h1>
          <form className="" onSubmit={console.log()}>
            <input
              className="input bg-gray-200 px-4 py-2 border-1 rounded-md w-full h-12 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Add task here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <button
              type="submit"
              className="btn w-auto px-5 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition mt-3"
            >
              Add Todo
            </button>
          </form>
        </div>

        <div className="mt-6 space-y-4">
          {}
        </div>
      </div>
    </>
  );
}

export default App;
