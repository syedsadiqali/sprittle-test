import { useEffect, useRef } from 'react'
import { Entry } from '../../IApp'
import Transaction from './Transaction'

interface IProps {
  entries: Array<Entry>
}

function TransactionList(props: IProps) {
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if(endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [props.entries])

  return (
    <div className='section2'>
      <p>Transactions: </p>
      {props.entries.map((entry, index) => (
        <Transaction entry={entry} index={index} />
      ))}
      <div style={{ float: 'left', clear: 'both' }} ref={endRef}></div>
    </div>
  )
}

export default TransactionList
