function TodoItem(props) {
    return(
      <li className="todo-item--li">
        <span 
          className={`icon icon-completed ${props.completed && 'icon-completed--active'}`}
          onClick={props.onComplete}
        >V</span>
        <p className={`item-p ${props.completed && 'item-p--complete'}`}>{props.text}</p>
        <span 
          className="icon icon-deleted"
          onClick={props.onDelete}
        >X</span>
      </li>
    );
  }

  export {TodoItem};