"use client"
import { createContext } from 'react'

interface ContextProps {
    isDragging: boolean
    startDragging: ()=>void
    endDragging: ()=>void
}

export const UiContext = createContext( {} as ContextProps )
