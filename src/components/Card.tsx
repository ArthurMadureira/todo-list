import { useState } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import styles from './Card.module.css'


interface todoObjProps {
  id: string;
  title: string;
  isChecked: boolean;
}

interface CardProps {
  todo: todoObjProps;
  deleteTodo: (card: any) => void;
  onCompleteTask: (id: string) => void;
}


export function Card({ todo, deleteTodo, onCompleteTask }: CardProps) {

  function handleCompleteTask(id: string) {
    onCompleteTask(id)
  }

  function handleDeleteTodo(e: any) {
    deleteTodo(todo)
  }

  return (
    <div className={styles.card}>
      <div className={styles.radio} >
        <input
          className={styles.checkbox}
          type="checkbox"
          onChange={() => handleCompleteTask(todo.id)}
        />
      </div>

      <span>{todo.title}</span>

      <button onClick={handleDeleteTodo}>
        <FiTrash2 size={16} />
      </button>
    </div>
  )
}