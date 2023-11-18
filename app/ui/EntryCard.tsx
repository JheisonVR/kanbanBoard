"use client"
import React, {ChangeEvent, DragEvent, MouseEventHandler, useContext} from 'react'
import { UiContext } from '@/context/UI/UiContext'
import { Entry } from '@/interfaces'
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { dateFunctions } from '@/utils';
import { EntriesContext } from '@/context/entries';


interface Props {
  entry: Entry
}

export const EntryCard = ( {entry}:Props ) => {

  const { deleteEntry, entries } = useContext( EntriesContext )
  const { startDragging, endDragging } = useContext(UiContext)

  const onDragStart = ( event:DragEvent )=>{
    event.dataTransfer.setData('text', entry._id ) 
    startDragging()
  }

  const onDragEnd = () => {
    endDragging()
  }

  const deleteEntryFilter:MouseEventHandler<HTMLButtonElement> = (  ) => {
    const entryfound = entries.find( item => item._id === entry._id)!
    deleteEntry(entryfound)    
    
  }





  return (
    <div className='text-white bg-[#6A6DCD] rounded-3xl p-6 overflow-hidden hover:bg-[#C340A1] active:bg-[#00A88B] focus:outline-none focus:ring focus:ring-violet-300' draggable={true} onDragStart={onDragStart } onDragEnd={onDragEnd} >
        <div className='font-bold mb-2 text-left'>
            <h1>{entry.title}</h1> 
        </div>
        <div className='text-white leading-relaxed mb-6 font-extralight'>
            <p className='text-sm'>
              {entry.description}
            </p>
        </div>
        <div className='font-semibold border-t border-slate-800 pt-2 flex justify-around items-center'>
          
          <div className='flex justify-between'>
            <button className=' p-1  hover:scale-110 transition-all duration-75 ' ><FaRegEdit /></button>

            <button className=' p-1 rounded-full hover:scale-110 transition-all duration-75 ' value={entry._id} onClick={ deleteEntryFilter } ><FaRegTrashCan color='red'/> </button>

          </div>

            <p className='text-xs'>Created at: {dateFunctions.getFormatDistanceToNow(entry.createdAt)}</p> 
        </div>
    </div>
  )
}
