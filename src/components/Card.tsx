import { useState } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import styles from './Card.module.css'

import checked from '../assets/checked.svg'

interface todoObjProps {
  id: string;
  title: string;
  isChecked: boolean;
}

interface CardProps {
  todo: todoObjProps;
  deleteTodo: (card: any) => void;
}


export function Card({ todo, deleteTodo }: CardProps) {

  const [inputChecked, setInputChecked] = useState(true)


  function handleDeleteTodo(e: any) {
    deleteTodo(todo)
  }


  return (
    <div className={styles.card}>
      <div className={styles.radio} >
        <img src={checked} />
        <input type="checkbox" />
      </div>

      <span>{todo.title}</span>

      <button onClick={handleDeleteTodo}>
        <FiTrash2 size={16} />
      </button>
    </div>
  )
}