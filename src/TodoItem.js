function TodoItem(props) {
    return(
      <li className="todo-item--li">
        <span className="icon icon-completed icon-completed--active">V</span>
        <p>{props.text}</p>
        <span className="icon icon-deleted">X</span>
      </li>
    );
  }

  export {TodoItem};