import { useReducer, useState } from 'react'
import AddUpdateBalance from './components/AddUpdateBalance/AddUpdateBalance'
import TransactionList from './components/TransactionList/TransactionList'
import { Entry } from './IApp'
import './App.css'
import { entriesReducer } from './store/reducer'
import {
  addTransaction,
  removeTransaction,
  updateCurrent,
} from './store/actions'

function App() {
  const getInitialEntries = () => {
    let oldItemsString = localStorage.getItem('transactions')
    var oldItems: [] = oldItemsString ? JSON.parse(oldItemsString) : []

    return oldItems
  }
  const [state, dispatch] = useReducer(entriesReducer, {
    entries: getInitialEntries() || [],
    current: '',
  })

  const [error, setError] = useState<string | null>(null)

  const getBalance = () => {
    let total = 0
    state.entries.map((a: Entry) => {
      total += Number(a.value)
    })
    return total
  }

  const handleAdd = () => {
    setError(null)
    if (state.current <= 0) {
      setError(`entered amount should be greater than zero`)
      dispatch(updateCurrent(''))
      return
    }
    dispatch(addTransaction())
  }

  const handleRemove = () => {
    setError(null)
    if (state.current <= 0) {
      setError(`entered amount should be greater than zero`)
      dispatch(updateCurrent(''))
      return
    }
    if (getBalance() - state.current < 0) {
      setError(`you don't have that much balance!`)
      return
    }
    dispatch(removeTransaction())
  }

  const handleUpdateCurrentValue = (e: any) => {
    dispatch(updateCurrent(Number(e.target.value)))
  }

  return (
    <div className='App'>
      <h1>Expense Tracker - Basic</h1>
      <p className='warning'>
        all old transactions are stored in localstorage click{' '}
        <span
          onClick={() => {
            if (
              window.confirm(
                'All Old Transactions will be Cleared! Are you Sure?'
              )
            ) {
              localStorage.clear()
              window.location.reload()
            }
          }}
        >
          here
        </span>{' '}
        to clear it{' '}
      </p>
      <AddUpdateBalance
        balance={getBalance()}
        updateCurrentValue={handleUpdateCurrentValue}
        handleAdd={handleAdd}
        handleRemove={handleRemove}
        currentValue={state.current}
        error={error}
      />
      <TransactionList entries={state.entries} />
    </div>
  )
}

export default App
