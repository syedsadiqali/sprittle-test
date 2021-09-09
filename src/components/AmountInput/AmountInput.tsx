import { memo } from 'react'

interface IProps {
  value: any
  onChange: any
}

function AmountInput(props: IProps) {
  return (
    <input
      type='number'
      
      onChange={props.onChange}
      value={props.value}
    />
  )
}

export default memo(AmountInput)
