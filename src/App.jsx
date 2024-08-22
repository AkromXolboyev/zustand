// import React from 'react';
// // import TodoList from './TodoList';
// import { useTodo } from './store/store';
// function App() {
//   const { data } = useTodo((state) => state)
//   console.log(data);

// }

// export default App;

// // return (
// //   <div className="App">
// //     <TodoList />
// //   </div>


import React from 'react';
import TodoList from './pages/todo-list';
import { useStore } from 'zustand';
function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
