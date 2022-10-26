import { useState } from 'react'
import TabHeader from '../TabHeader'
import Item from './Item'
import { v4 as uuidv4 } from 'uuid';
import FinalCreate from './FinalCreate';

export default function AddItems({ setItems, editItem, deleteItem, close, next, items }) {


  return (
    <div className='w-full h-full absolute top-0 left-0 rounded-3xl overflow-hidden py-16'>
      <TabHeader tab={`Add Items to your Bill`} subtab close={() => close()} />
      <div className='w-full h-full bg-white px-8'>
        <button className='text-center border-2 border-black rounded-md py-2.5 w-full transition-all mt-5' onClick={() => setItems([...items, { id: uuidv4(), name: '', price: '' }])}>Add Item</button>
        {items.length > 0 &&
          <div className='max-h-[75%] overflow-scroll p-3 bg-gray-100 mt-5 rounded-md'>
            <div className='flex'>
              <h3 className='w-7/12 ml-2'>Name</h3>
              <h3 className='w-4/12'>Price ($)</h3>
            </div>
            {items.map(i => <Item key={i.id} id={i.id} name={i.name} price={i.price} editItem={editItem} deleteItem={deleteItem} />)}
          </div>
        }
      </div>
      {(items.length > 0) && <button onClick={next} className='text-center border-2 border-black bg-black text-white rounded-md py-3 w-11/12 transition-all mt-5 absolute bottom-[80px] left-[20px]'>Next</button>}
    </div >
  )
}
