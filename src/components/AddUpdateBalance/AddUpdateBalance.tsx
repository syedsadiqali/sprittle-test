import { memo } from 'react'
import Balance from '../Balance/Balance'
import AmountInput from '../AmountInput/AmountInput'

interface IProps {
  balance: number
  updateCurrentValue: any
  currentValue: any
  handleAdd: any
  handleRemove: any
  error: string | null
}

function AddUpdateBalance(props: IProps) {
  return (
    <div className='section1'>
      <Balance balance={props.balance} />
      <AmountInput
        onChange={props.updateCurrentValue}
        value={props.currentValue}
      />
      <div className='button-group'>
        <button className={'add'} onClick={props.handleAdd}>
          Add
        </button>
        <button className={'remove'} onClick={props.handleRemove}>
          Remove
        </button>
      </div>
      {props.error && <p className='error'>{props.error}</p>}
    </div>
  )
}

export default memo(AddUpdateBalance)
