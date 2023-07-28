import React from 'react';
import '../css/NewTask.css'

function NewTask({input, setInput, onCreate}) {
      const [newTodoValue, setNewTodoValue] = React.useState('');

      const onChange = (event) => {
        setInput(event.target.value);
    }
    
const cleareInput = (event) => {
    event.target.value = '';
}

    return (
        <section className='container'>
            <form 
                className="newTask-container" 
                onSubmit={(event) => {
                    console.log(input)
                    event.preventDefault()
                    onCreate(input)
            }}>
            <h1 className='new-task--title'>Create new task</h1>
            <label className='new-task--p'>Task Name</label>
            <input
                type='text' 
                onChange={onChange}
                placeholder="viajar a Marte" className='new-task--input' 
                required/>
            <button 
                className='new-task--button'
                type='submit' 
            >Create task</button>
            <picture className='cat-picture'>
                <img alt='imagen de gatito' src='https://cdn.shopify.com/s/files/1/0588/8075/3851/files/2bigger_1000x1000.png?v=1649248081'/>
            </picture>
        </form>
        </section>
    );
}

export {NewTask};