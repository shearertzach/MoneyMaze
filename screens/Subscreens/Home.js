import { useEffect, useState } from 'react'
import Bill from '../../components/Dashboard/Bill'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthSlice, signout } from '../../redux/auth'
import BillView from '../../components/Dashboard/BillView'

export default function Home() {
  const auth = useSelector(getAuthSlice)
  const [currentBill, setCurrentBill] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!auth.bills) dispatch(signout())
  }, [])

  return (
    <div className='relative p-4 h-full overflow-scroll py-16 '>
      {/* <h1 className='text-xl my-3'>Your Bills</h1> */}
      <div className='flex justify-center items-center flex-col mt-3'>
        {(auth.bills > 0) &&
          auth.bills.map(b => <Bill
            key={b.id}
            b={b}
            setBill={setCurrentBill}
          />)}
      </div>
      {currentBill && <BillView bill={currentBill} close={() => setCurrentBill(null)} />}
    </div>
  )
}
