import './NewTask.css'

function NewTask() {
    return (
        <section className="newTask-container">
            <h1 className='new-task--title'>Create new task</h1>
            <p className='new-task--p'>Task Name</p>
            <input type="text" placeholder="viajar a Marte" className='new-task--input' />
            <button 
                className='new-task--button' 
                onClick={ 
                    (event) => {
                        console.log('diste click')
                        console.log(event)
                        console.log(event.target)
                    }
                } 
            >Create task</button>
            <picture className='cat-picture'>
                <img alt='imagen de gatito' src='https://cdn.shopify.com/s/files/1/0588/8075/3851/files/2bigger_1000x1000.png?v=1649248081'/>
            </picture>
        </section>
    );
}

export {NewTask};