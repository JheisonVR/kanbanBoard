import { Entry } from "@/interfaces";
import { EntriesState } from ".";

type EntriesActionType =
    | { type: 'Add-Entry', payload:Entry }
    | { type: 'Update-Entry', payload:Entry }
    | { type: 'Delete-Entry', payload:Entry }

export const entriesReducer = ( state: EntriesState, action: EntriesActionType ): EntriesState => {
    switch (action.type){
        
        case 'Add-Entry':
            return {
                ...state,
                entries: [...state.entries, action.payload]
            }
        case 'Update-Entry':
            return {
                ...state,
                entries: state.entries.map(e => {
                    if(e._id === action.payload._id){
                        e.status = action.payload.status;
                        e.description = action.payload.description
                    }
                    return e
                })
            }
        case 'Delete-Entry':
            return {
                ...state,
                entries: state.entries.filter( (entry) => entry._id !== action.payload._id )
                }
                
        default:
        return state
    }
}