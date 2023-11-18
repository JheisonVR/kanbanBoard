"use client"

import React, { useContext, DragEvent } from 'react'
import { EntryCard } from '.'
import { EntryStatus } from '@/interfaces'
import { EntriesContext } from '@/context/entries';
import { UiContext } from '@/context/UI/UiContext';

interface Props{
  status: EntryStatus;
}

export const EntryList = ( { status }: Props ) => {

  const { updateEntry } = useContext(EntriesContext)
  const {isDragging, endDragging} = useContext(UiContext)
  
  const { entries } =  useContext( EntriesContext )
  const entriesByStatus = entries.filter( en => en.status === status )


  const onDropEntry = ( event:DragEvent<HTMLDivElement> ) => {
    const id = event.dataTransfer.getData('text');
    const entry = entries.find( e=> e._id === id )!
    entry.status = status
    updateEntry( entry )
    endDragging()
  }

  const allowDrop = (event:DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }

  
  return (
    <div className= {isDragging ? 'flex flex-col gap-3 my-2 opacity-20 transition-all duration-300 border-2 border-dashed py-32 h-auto': 'flex flex-col gap-3 my-2 py-3' } onDrop={onDropEntry} onDragOver={ allowDrop }>
      {entriesByStatus.map(entry => (
        <EntryCard
          key={entry._id}
          entry={entry}
        />
      ))}
    </div>
  )
}
