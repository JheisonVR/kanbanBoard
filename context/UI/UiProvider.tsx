import { useReducer } from "react";
import { UiContext } from "./UiContext";
import { propsWithChildren } from "../entries/EntriesProvider";
import { uiReducer } from "./uiReducer";

export interface UIState {
    isDragging: boolean
}

const UI_Initial_State: UIState = {
    isDragging:false
}

export const UIProvider = ( {children}:propsWithChildren ) =>{

    const [state, dispatch] = useReducer(uiReducer, UI_Initial_State);

    const startDragging = ()=>{
        dispatch({type:"Start Dragging"})
    }
    const endDragging = ()=>{
        dispatch({type:"End Dragging"})
    }

    return (
        <UiContext.Provider
            value={{
                ...state,
                //Methods
                startDragging,
                endDragging
            }}
        >
            {children}
        </UiContext.Provider>
    )

    

}