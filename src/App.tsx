import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import CreateTodos from './components/CreateTodos'
import Header from './components/Header'
import TodosList from './components/TodosList'
import { Todo } from './models/todo.model'

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: new Date().toString(),
      title: 'Meeting',
      text: 'Schedule meeting with team',
      color: '#dfdfdf',
      date: new Date().toString(),
    },
  ])

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col sm={6}>
            <TodosList todos={todos} setTodos={setTodos} />
          </Col>
          {/* </Row> */}
          {/* <Row> */}
          <Col sm={6}>
            <CreateTodos todos={todos} setTodos={setTodos} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
