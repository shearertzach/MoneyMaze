
import TabHeader from '../TabHeader'

export default function FinalCreate({ create, items, billName, friends, close }) {

  const getCostPerPerson = () => {
    const cost = 0
    items.map(i => cost += Number(i.price))
    return (cost / (friends.length + 1)).toFixed(2)
  }

  return (
    <div className='w-full h-full absolute top-0 left-0 rounded-3xl overflow-hidden py-16'>
      <TabHeader tab={billName} subtab close={close} />
      <div className='w-full h-full bg-white px-8'>
        {items.length > 0 &&
          <div className='max-h-[55%] overflow-scroll p-3 mt-5 bg-gray-100 rounded-md'>
            <div className='flex justify-between px-2'>
              <h3 className='w-7/12 font-medium'>Name</h3>
              <h3 className='w-4/12 text-right font-medium'>Price</h3>
            </div>
            <div className='bg-gray-200 rounded-md mt-2'>
              {items.map(i => (
                <div className='flex justify-between p-2 hover:bg-gray-300 transition-all ' key={i.id}>
                  <p className='w-7/12'>{i.name}</p>
                  <p className='w-4/12 text-right'>${i.price}</p>
                </div>
              ))}
            </div>
          </div>
        }
        <div className='absolute bottom-[28%] left-1/2 -translate-x-1/2 w-11/12 text-center'>
          <p className='text-lg'>Evenly split {friends.length + 1} ways</p>
          <p className='text-3xl my-1.5'>${getCostPerPerson()}</p>
          <p className='text-lg'>Per person</p>
        </div>
      </div>
      {(items.length > 0) && <button onClick={create} className='text-center border-2 border-black bg-black text-white rounded-md py-3 w-11/12 transition-all mt-5 absolute bottom-[80px] left-[20px]'>Finish</button>}
    </div >
  )
}
