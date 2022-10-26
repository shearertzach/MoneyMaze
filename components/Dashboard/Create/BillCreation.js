import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBill, getAuthSlice } from '../../../redux/auth'
import TabHeader from '../TabHeader'
import AddItems from './AddItems'
import BillInfo from './BillInfo'
import FinalCreate from './FinalCreate'

export default function BillCreation({ type, close }) {
  const dispatch = useDispatch()
  const [step, setStep] = useState(1)
  const [billName, setBillName] = useState('')

  const [addedFriends, setAddedFriends] = useState([])
  const [items, setItems] = useState([])
  const auth = useSelector(getAuthSlice)


  const editItem = (id, name, price) => {
    const newItems = items.map(i => {
      if (i.id == id) {
        i.name = name
        i.price = price
      }
      return i
    })
    setItems(newItems)
  }

  const deleteItem = (id) => {
    setItems(items.filter(i => i.id != id))
  }

  return (
    <div className='w-full h-full absolute top-0 left-0 rounded-3xl overflow-hidden py-16'>
      <TabHeader tab={`Create New ${type}`} subtab close={() => close()} />
      {step == 1 &&
        <BillInfo
          billName={billName}
          setBillName={setBillName}
          addedFriends={addedFriends}
          setAddedFriends={setAddedFriends}
          friends={auth.friends}
          next={() => setStep(step + 1)}
          close={() => setStep(step - 1)} />
      }
      {step == 2 &&
        <AddItems
          items={items}
          setItems={setItems}
          editItem={editItem}
          deleteItem={deleteItem}
          billName={billName}
          friends={addedFriends}
          next={() => setStep(step + 1)}
          close={() => setStep(step - 1)} />
      }
      {step == 3 &&
        <FinalCreate
          billName={billName}
          friends={addedFriends}
          items={items}
          create={() => {
            setStep(0)
            close()
            dispatch(addBill({
              name: billName,
              users: [...addedFriends],
              items: [...items]
            }))
          }}
          close={() => setStep(step - 1)}
        />
      }
    </div >
  )
}
