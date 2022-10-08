import styles from './CardHeader.module.css'

interface TodosProps {
  todos: any[]
}

export function CardHeader({ todos }: TodosProps) {
  const totalTaskDone = todos.reduce((acc, current) => acc + current.isChecked, 0)
  return (
    <div className={styles.cardHeader}>
      <p>Tarefas criadas <span>{todos.length}</span> </p>
      <p>Concluídas {` ${totalTaskDone} de ${todos.length}`}</p>
    </div>
  )
}