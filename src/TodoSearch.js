import React from'react';

function TodoSearch({searchValue, setSearchValue,}) {
 
  return (
      <input placeholder="Search..." className="todo-search--input"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
      />
    )
  }

  export {TodoSearch};