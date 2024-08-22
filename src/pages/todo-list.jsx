import React, { useState } from 'react';
import { useTodoStore } from '../store/store';

export const TodoList = () => {
    const [todoText, setTodoText] = useState('');
    const { todos, addTodo, removeTodo, toggleTodo } = useTodoStore();

    const handleAddTodo = () => {
        const newTodo = {
            id: Date.now(),
            text: todoText,
            completed: false
        };
        addTodo(newTodo);
        setTodoText('');
    };

    return (
        <div style={{backgroundColor:"blue",marginLeft:"700px", maxWidth:"400px",height:"500px",margin:"auto"}}>
            <h2 >Todo List</h2>
            <input style={{padding:"12px",borderradius:"6px",marginLeft:"9px"}}
                type="text"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
            />
            <button style={{marginLeft:"30px"}} onClick={handleAddTodo}>Add Todo</button>

            <ul>
                {todos.map((todo) => (
                    <li  key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none',  padding:"20px" }}>
                        {todo.text}
                        <button style={{color:"red",backgroundColor:"yellow", marginLeft:"20px"} } onClick={() => toggleTodo(todo.id)}>Toggle</button>
                        <button style={{backgroundColor:"yellow",marginLeft:'20px',color:"red"}} onClick={() => removeTodo(todo.id)}>delete</button>
                    </li>
                ))} 
            </ul>
        </div>
    );
};

export default TodoList;
