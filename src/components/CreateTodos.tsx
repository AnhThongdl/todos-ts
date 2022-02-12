import * as React from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { Todo } from '../models/todo.model'

interface ICreareTodosProps {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const CreareTodos: React.FC<ICreareTodosProps> = ({ todos, setTodos }) => {
  const [error, setError] = React.useState<string>('')

  const titleRef = React.useRef<HTMLInputElement | null>(null)
  const textRef = React.useRef<HTMLTextAreaElement | null>(null)
  const colorRef = React.useRef<HTMLInputElement | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (titleRef.current?.value === '' || textRef.current?.value === '') {
      return setError('All fields are mandatory')
    }

    setError('')
    setTodos([
      ...todos,
      {
        id: new Date().toString(),
        title: (titleRef.current as HTMLInputElement).value,
        text: (textRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: new Date().toString(),
      },
    ])
    ;(titleRef.current as HTMLInputElement).value = ''
    ;(textRef.current as HTMLTextAreaElement).value = ''
  }

  return (
    <>
      <h2>Add Todos</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form className="mt-3 mb-3" onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Todo Title"
            ref={titleRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Title</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your Todo"
            ref={textRef}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="colorInput">Todo Color</Form.Label>
          <Form.Control
            type="color"
            id="colorInput"
            defaultValue="#dfdfdf"
            title="Choose your color"
            ref={colorRef}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Add
        </Button>
      </Form>
    </>
  )
}

export default CreareTodos
