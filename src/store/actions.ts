import { actionTypes } from './actionTypes'

export const addTransaction = () => {
  return { type: actionTypes.ADD }
}

export const removeTransaction = () => {
  return { type: actionTypes.REMOVE }
}

export const updateCurrent = (value: number | string) => {
  return { type: actionTypes.UPDATE_CURRENT, data: value }
}
