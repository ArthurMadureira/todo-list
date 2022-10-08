import styles from './CardHeader.module.css'

interface TodosProps {
  todos: object[]
}

export function CardHeader({ todos }: TodosProps) {
  return (
    <div className={styles.cardHeader}>
      <p>Tarefas criadas <span>{todos.length}</span> </p>
      <p>Concluídas <span>3 de 5</span></p>
    </div>
  )
}