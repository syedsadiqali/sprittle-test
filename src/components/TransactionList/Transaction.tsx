import { Entry } from '../../IApp'

interface IProps {
  entry: Entry
  index: number
}

function Transaction(props: IProps) {
  return (
    <p key={props.index}>
      {new Date(props.entry.timestamp).toISOString()} - {Math.abs(props.entry.value)} -{' '}
      {props.entry.action}
    </p>
  )
}

export default Transaction;
