"use client"
import React, { useState, MouseEventHandler, ChangeEvent, useContext } from 'react'
import { IoMdSave } from "react-icons/io";
import { FcCancel } from "react-icons/fc";
import { EntriesContext } from '@/context/entries';


export const NewEntry = () => {

    const { addNewEntry } = useContext(EntriesContext)
    const [isAdd, setIsAdd ] = useState(false)
    const [inputDescription, setInputDescription] = useState('')
    const [inputTitle, setInputTitle] = useState('')
    

    const handleClickOpen: MouseEventHandler<HTMLButtonElement> = ()=>{
        setIsAdd(true)
    }
    const handleClickCancel: MouseEventHandler<HTMLButtonElement> = ()=>{
        setIsAdd(false)
    }
    const onTextChanged = ( event:ChangeEvent<HTMLTextAreaElement> )=>{
        setInputDescription( event.target.value )
    }
    const onTitleChanged = ( event:ChangeEvent<HTMLTextAreaElement> )=>{
        setInputTitle( event.target.value )
    }

    const saveEntry = ()=>{
        if(inputDescription.length === 0) return
        addNewEntry(inputTitle, inputDescription )
        setInputDescription('')
        setInputTitle('')
        setIsAdd(false)
    }

  return (
    <main className='flex flex-col auto gap-1 mt-2 ' >
        {
            isAdd ? (
                <>
                    <div className='rounded-md border-gray-300 overflow-hidden w-full text-black' >
                        <textarea className='px-2 w-full bg-slate-50' placeholder='Title...' autoFocus autoComplete='off' value={inputTitle} onChange={onTitleChanged} 
                        />
                            
                        <textarea className='px-2 w-full bg-slate-50' placeholder='Description...' autoFocus autoComplete='off' value={inputDescription} onChange={onTextChanged} />
                    </div>
                    <div className='flex'>
                            <button className='flex bg-emerald-950 gap-1 justify-center  items-center w-1/2 hover:scale-105 active:bg-emerald-800 rounded-xl ' onClick={ saveEntry }  >
                                Save <IoMdSave/>
                            </button>

                        {/* <div className='flex bg-red-950 gap-1 justify-center items-center w-1/2 hover:scale-105 active:bg-red-500 rounded-xl '> */}
                            <button className='flex bg-red-950 gap-1 justify-center items-center w-1/2 hover:scale-105 active:bg-red-500 rounded-xl ' onClick={handleClickCancel} >
                                Cancel <FcCancel />
                            </button>
                            
                        {/* </div> */}
                    </div>
                </>
            )
        
            :       
            <button className='rounded-full border-2 border-white hover:bg-slate-400 px-2 py-1 transition-all duration-100 ease-in-out hover:scale-105 active:bg-emerald-800' onClick={handleClickOpen}>
                Add
            </button>
        }
    </main>
  )
}
