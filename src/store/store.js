// import create from "zustand";

// export const useTodo = create((set) => ({
//   data: [],

//   addTodo:(newData)=>set((state)=>({...state,data:[...state.data,newData]}))
// }));





// addTodo: (todo) => set((state) => ({
//     todos: [...state.todos, todo]
//   })),

//   removeTodo: (id) => set((state) => ({
//     todos: state.todos.filter((todo) => todo.id !== id)
//   })),

//   toggleTodo: (id) => set((state) => ({
//     todos: state.todos.map((todo) =>
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//     )
//   }))


import create from 'zustand';

 export const useTodoStore = create((set) => ({
  todos: [],
  
  addTodo: (todo) => set((state) => ({
    todos: [...state.todos, todo]
  })),

  removeTodo: (id) => set((state) => ({
    todos: state.todos.filter((todo) => todo.id !== id)
  })),

  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  }))
}));
