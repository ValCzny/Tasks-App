function TodoList({children}) {
    return (
        <ul className="todo-list--ul">
            {children}
        </ul>
    );
}

export {TodoList};