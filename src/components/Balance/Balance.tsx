import { memo } from 'react'

interface IProps {
  balance: number
}

function Balance(props: IProps) {
  return <p>{`Balance : ${props.balance}`}</p>
}

export default memo(Balance)
