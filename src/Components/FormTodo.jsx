import React, { useState } from "react";

const FormTodo = props => {
  const { handleAddItem } = props; 
  const [description, setDescription] = useState(""); //agrega el input
  const handleSubmit = e => {
    e.preventDefault(); //evita que la pagina se refresque
 
    handleAddItem({
      done: false,
      id: (+new Date()).toString(), //aca esta toda la info de lo que se ingrese al input
      description
    });
    setDescription(""); // (B)
  };
  return (
    <form onSubmit={handleSubmit}>
      {/*(D)*/}
      <div className="todo-list">
        <div className="file-input">
          {/*(F-2)*/}
          <input
            type="text"
            className="text"
            value={description}
            placeholder = "Agregue un evento"
            onChange={e => setDescription(e.target.value)}
          />
          {/*(A)*/}
          <button
            className="button pink"
            disabled={description ? "" : "disabled"}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormTodo;