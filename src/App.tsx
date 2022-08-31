import reactLogo from './assets/react.svg'
import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { incremented, amountAdded } from './features/counter/counter-slice'

function App() {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch();

  // increment by 1
  function handleIncrement() {
    dispatch(incremented())
  }

  // increment by a fixed amount
  function handleAmount() {
    dispatch(amountAdded(5))
  }

  return (
    <div>
      <h2>Counter Using Redux Toolkit</h2>
      {/* ↓ Here you can call handleIncremented or handleAmount */}
      <button onClick={handleAmount}>
        count is {count}
      </button>
    </div>
  )
}

export default App
