import { createContext, useState } from 'react'

interface TodoContextProps {
  todoInput: string;
  setTodoInput: React.Dispatch<React.SetStateAction<string>>;
}


export const TodoContext = createContext({} as TodoContextProps)

interface ITodo {
  id: number;
  title: string
  isChecked: boolean
}

export function TodoContextProvider({ children }: any) {
  const [todoInput, setTodoInput] = useState('')
  const [todos, setTodos] = useState<ITodo[]>([])

  return (
    <TodoContext.Provider value={
      { todoInput, setTodoInput }
    } >
      {children}
    </TodoContext.Provider>
  )
}