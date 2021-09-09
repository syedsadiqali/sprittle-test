import { Action, State } from '../IApp'
import { actionTypes } from './actionTypes'

export function entriesReducer(state: State, action: Action): State {
  switch (action.type) {
    case actionTypes.ADD:
      let updatedEntries1 = [
        ...state.entries,
        {
          timestamp: new Date(),
          value: state.current.toFixed(2),
          action: 'Add',
        },
      ]
      localStorage.setItem('transactions', JSON.stringify(updatedEntries1))
      return {
        ...state,
        entries: updatedEntries1,
      }
    case actionTypes.REMOVE:
      let updatedEntries2 = [
        ...state.entries,
        {
          timestamp: new Date(),
          value: -state.current.toFixed(2),
          action: 'Remove',
        },
      ]
      localStorage.setItem('transactions', JSON.stringify(updatedEntries2))

      return {
        ...state,
        entries: updatedEntries2,
      }
    case actionTypes.UPDATE_CURRENT:
      return {
        ...state,
        current: action.data,
      }
    default:
      throw new Error()
  }
}
