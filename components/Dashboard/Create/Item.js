import React from 'react'
import { TrashSVG } from '../../Util/Icons/Other'

export default function Item({ id, name, price, editItem, deleteItem }) {
  return (
    <div className='flex my-2'>
      <input name='itemname' className='rounded-md outline-none border-2 p-2 w-7/12' value={name} type={'text'} onChange={(e) => editItem(id, e.target.value, price)} />
      <input name='itemprice' className='rounded-md outline-none border-2 p-2 w-4/12 ml-2' value={price} type={'text'} onChange={(e) => editItem(id, name, e.target.value)} />
      <TrashSVG className={'ml-2 text-red-500'} onclick={() => deleteItem(id)} />
    </div>
  )
}
