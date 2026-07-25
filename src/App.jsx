import WidgetBox from './components/WidgetBox'
import { useState, useEffect } from 'react'
const App = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('todo-tasks')
    return saved
      ? JSON.parse(saved)
      : [
          { text: 'Mail packages', isDone: false },
          { text: 'Return library books', isDone: false },
          { text: 'Pickup food for birthday party', isDone: false }
        ]
  })

  useEffect(() => {
    localStorage.setItem('todo-tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <div className="App">
      <WidgetBox tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default App
