"use client"
import { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { EntriesContext, entriesReducer } from '.'
import { Entry } from '@/interfaces';

export interface propsWithChildren {
    children: React.ReactNode
}

export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            title: 'Twilio integration',
            description: 'Create new note via SMS. Support tect, audio, links, and media',
            status:'Backlog',
            createdAt: Date.now(),
        },
        {
            _id: uuidv4(),
            title:'Markdown support' ,
            description: 'Markdown support shortband converts to formating',
            status:'Backlog',
            createdAt: Date.now() - 100000 ,
        },
        {
            _id: uuidv4(),
            title: 'Tablet view',
            description: '',
            status:'To do',
            createdAt: Date.now() - 1000000  ,
        },
        {
            _id: uuidv4(),
            title: 'Audio recording in note',
            description: 'Show audio in a note and playback UI',
            status:'To do',
            createdAt: Date.now() - 1000000  ,
        },
        {
            _id: uuidv4(),
            title: 'Bookmark in note',
            description: 'Show rich UI in a note, and feature to render website screenshot',
            status:'To do',
            createdAt: Date.now() - 1000000  ,
        },
        {
            _id: uuidv4(),
            title: 'Image viewver',
            description: 'opens when clicking on the thumbnail in the list or on the image in the note',
            status:'To do',
            createdAt: Date.now() - 1000000  ,
        },
        {
            _id: uuidv4(),
            title: 'Mobile view',
            description: 'Functions for both web responsive and native apps. Note: Andoroid and IOS will need unique share icons.',
            status:'In progress',
            createdAt: Date.now() - 1000000  ,
        },
        {
            _id: uuidv4(),
            title: 'Desktop view',
            description: 'PWA for website and native apps. Note: Windows and Mac will need unique share icons.',
            status:'In progress',
            createdAt: Date.now() - 1000000  ,
        },
        {
            _id: uuidv4(),
            title: 'Formatting options',
            description: 'mobile formatting bar expands and collapses when tapping the format icon.',
            status:'In progress',
            createdAt: Date.now() - 1000000  ,
        },
        {
            _id: uuidv4(),
            title: 'Media in note',
            description: 'Image & video with player UI.',
            status:'In progress',
            createdAt: Date.now() - 1000000  ,
        },
        {
            _id: uuidv4(),
            title: 'Audio recording',
            description: 'Interface for when recording a new audio note.',
            status:'Designed',
            createdAt: Date.now() - 1000000  ,
        },
        {
            _id: uuidv4(),
            title: 'Bookmarking',
            description: 'Interface for when recording a new link note.',
            status:'Designed',
            createdAt: Date.now() - 1000000  ,
        },
        {
            _id: uuidv4(),
            title: 'Mobile home screen',
            description: 'Folders, tags, and notes list are sorted by recent.',
            status:'Designed',
            createdAt: Date.now() - 1000000  ,
        },
        
    ],
}

export const EntriesProvider = ({ children } : propsWithChildren ) => {
    const [state, dispatch] = useReducer( entriesReducer, Entries_INITIAL_STATE );

    const addNewEntry = (title:string, description:string) => {
        const newEntry:Entry = {
            _id: uuidv4(),
            title,
            description,
            createdAt: Date.now(),
            status: 'Backlog'
        }

        dispatch({ type: 'Add-Entry', payload: newEntry })
    }

    const updateEntry = (entry:Entry) => {
        dispatch({type:'Update-Entry', payload:entry})
    }

    const deleteEntry = ( entry : Entry ) => {
        dispatch({ type:'Delete-Entry', payload:entry })
    }

    return (
        <EntriesContext.Provider value={{
            ...state,

            //Methods
            addNewEntry,
            updateEntry,
            deleteEntry

        }}>
            { children }
        </EntriesContext.Provider>
    )
}