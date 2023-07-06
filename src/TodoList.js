function TodoList({children}) {
    return (
        <ul className="todo-list--ul scrollingDiv">
            {children}
        </ul>
    );
}

export {TodoList};