import * as React from 'react'
import { Todo } from '../models/todo.model'
import Todos from './Todos'

interface ITodosListProps {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodosList: React.FC<ITodosListProps> = ({ todos, setTodos }) => {
  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const renderTodos = (): JSX.Element[] => {
    return todos.map((td) => (
      <Todos key={td.id} todo={td} handleDelete={handleDelete} />
    ))
  }

  return (
    <>
      <h2 className="mt-3">Todos</h2>
      <div>{renderTodos()}</div>
    </>
  )
}

export default TodosList
