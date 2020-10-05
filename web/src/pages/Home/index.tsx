import React, { FormEvent, useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ToDo from "../../components/ToDo";
import "./styles.css";

const Home = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<Array<string>>([]);

  function handleDelete(index: number) {
    let newTodoList = todoList.filter((todo, idx) => idx !== index);
    setTodoList(newTodoList);
    console.log(todoList);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setTodoList([...todoList, todo]);
  }

  return (
    <div className="home-container">
      <main className="todo-container">
        <h1>To Do List</h1>
        <form onSubmit={handleSubmit}>
          <Input
            value={todo}
            setValue={setTodo}
            name="todo"
            label="todo"
            placeholder="todo"
          />
          <Button name="Criar ToDo" />
        </form>

        {todoList.length > 0 ? (
          <div className="todo-list-container">
            {todoList.map((todo, index) => (
              <ToDo
                key={index}
                value={todo}
                index={index}
                onDelete={handleDelete}
              />
            ))}
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
};

export default Home;
