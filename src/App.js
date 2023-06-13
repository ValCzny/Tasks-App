import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { NewTask } from './NewTask';

import'./MyTasks.css'
import './App.css'
import React from 'react';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Tomar el curso de intro a React', completed: false},
  { text: 'Llorar', completed: false},
  { text: 'LALALALALALA', completed: false},
  { text: 'Comer palta', completed: true},
]

function App() {
  return (
  <React.Fragment>
    <AppContainer>
      <NewTask />
      <section className='my-tasks--container'>
        <h1 className='my-tasks--title'>Your Tasks</h1>
        <TodoCounter completed={16} total={25} />
        <TodoSearch />

        <TodoList>
          {defaultTodos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </TodoList>
      </section>
    </AppContainer>
  </React.Fragment>
  );
}

function AppContainer({children}) {
  return(
    <div className="main-container">
      {children}
    </div>
  )
}

export default App;
