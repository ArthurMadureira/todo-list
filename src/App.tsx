import { useState, FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Header } from './components/Header';
import { Card } from './components/Card';
import { CardHeader } from './components/CardHeader';

import { FiPlusCircle } from 'react-icons/fi'
import styles from './App.module.css'

export function App() {


  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: "Oi",
      isChecked: false
    }
  ])

  function handleNewTodos(e: FormEvent) {
    e.preventDefault()

    setTodos([...todos, {
      id: uuidv4(),
      title: e.target.input.value,
      isChecked: false
    }])
    console.log(e.target.input.value);

  }

  function deleteTodo(todoToDelete: any) {
    const todosWithoutDeletedOne = todos.filter(todo => {
      return todo != todoToDelete
    })

    setTodos(todosWithoutDeletedOne)
  }


  return (
    <div>
      <Header />

      <main className={styles.main}>
        <div className={styles.formDiv}>

          <form className={styles.form} onSubmit={handleNewTodos}>
            <input
              type="text"
              name="input"
              autoComplete='off'
              placeholder="Adicione uma nova tarefa"
              required
            />
            <button type='submit'>
              Criar
              <FiPlusCircle size={15} />
            </button>
          </form>

        </div>

        <div className={styles.cardDiv}>
          <CardHeader todos={todos} />
          <div className={styles.cardList}>

            {todos.map(todo => {
              return <Card key={todo.id} todo={todo} deleteTodo={deleteTodo} />
            })}
          </div>
        </div>

      </main>
    </div>
  )
}



// const { todoInput } = useContext(TodoContext)