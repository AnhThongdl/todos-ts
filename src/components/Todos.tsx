import * as React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Todo } from '../models/todo.model'

interface ITodosProps {
  todo: Todo
  handleDelete: (id: string) => void
}

const Todos: React.FunctionComponent<ITodosProps> = ({
  todo,
  handleDelete,
}) => {
  return (
    <>
      <div className="mb-3">
        <Card style={{ background: todo.color }}>
          <Card.Body>
            <Card.Title>{todo.title}</Card.Title>
            <Card.Text>{todo.text}</Card.Text>
            <Card.Subtitle className="text-muted">{todo.date}</Card.Subtitle>
            <Button
              className="mt-3"
              variant="danger"
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Todos
