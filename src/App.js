import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { NewTask } from './NewTask';

import'./MyTasks.css';
import './App.css';
import React from 'react';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Tomar el curso de intro a React', completed: false},
  { text: 'Llorar', completed: false},
  { text: 'LALALALALALA', completed: false},
  { text: 'Comer palta', completed: true},
]

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(defaultTodos);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  )

    const completeTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );
      newTodos[todoIndex].completed = true;
      setTodos(newTodos);
    }

    const deleteTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );
      newTodos.splice(todoIndex, 1);
      setTodos(newTodos);
      console.log(123);
    }

  console.log('los usuarios buscan ToDos de ' + searchValue);


  return (
  <React.Fragment>
    <AppContainer>
      <NewTask />
      <section className='my-tasks--container'>
        <h1 className='my-tasks--title'>Your Tasks</h1>
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <TodoList>
          {searchedTodos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
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
