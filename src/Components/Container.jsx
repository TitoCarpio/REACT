import React, { useState } from "react";

import TaskList from "./TaskList";
import FormTodo from "./FormTodo";

const Container = () => {
  const [list, setList] = useState([]); // obtengo la lista 

  //agrego el elemneto al contenedor
  const handleAddItem = addItem => {
    setList([...list, addItem]); 
  };
  return (
    <div>
      {/*(A-1)*/}
      <FormTodo handleAddItem={handleAddItem} /> {/*agrega todos los componentes del contenedor*/}
      {/*(C)*/}
      <TaskList list={list} setList={setList} /> {/*agrega una lista*/}
    </div>
  );
};

export default Container;