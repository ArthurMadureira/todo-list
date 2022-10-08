import { FormEvent } from 'react'
import { FiPlusCircle } from 'react-icons/fi'
import styles from './Form.module.css'

export function Form({ setInputText, onSub }: any) {

  // const [inputValue, setInputValue] = useState('')

  // const { todoInput, setTodoInput } = useContext(TodoContext)

  return (
    <form className={styles.form}>
      <input
        type="text"
        name="input"
        placeholder="Adicione uma nova tarefa"
        required
      />
      <button type='submit'>
        Criar
        <FiPlusCircle size={15} />
      </button>
    </form>
  )
}
// onChange={(e) => setTodoInput(e.target.value)}