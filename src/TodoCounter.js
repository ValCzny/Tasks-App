
function TodoCounter({total, completed}) {
    return (
      <h1 className='todoCounter-title'>
        Completed {completed} to {total}
      </h1>
    )
  }

  export {TodoCounter};