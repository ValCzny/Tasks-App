import { CompleteIcon } from './CompleteIcon'
import { DeleteIcon } from './DeleteIcon'

function TodoItem(props) {
    return(
      <li className="todo-item--li">
        <CompleteIcon 
          completed={props.completed}
          onComplete={props.onComplete}
        />
        <p className={`item-p ${props.completed && 'item-p--complete'}`}>{props.text}</p>
        <DeleteIcon 
          onDelete={props.onDelete}
        />
      </li>
    );
  }

  export {TodoItem};