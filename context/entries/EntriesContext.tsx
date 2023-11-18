"use client"

import { createContext } from "react";
import { Entry } from "@/interfaces";

interface ContextProps {
    entries: Entry[] 

    //Methods
    addNewEntry: (title:string, description:string) => void
    updateEntry: (entry:Entry) => void
    deleteEntry: (entry : Entry) => void
}

export const EntriesContext = createContext({} as ContextProps )