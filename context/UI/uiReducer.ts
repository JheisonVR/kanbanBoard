import { UIState } from "./UiProvider";

type UIActionType = 
    | { type: 'Start Dragging' }
    | { type: 'End Dragging' }


export const uiReducer = (state: UIState, action:UIActionType):UIState => {
    switch (action.type){
        case 'Start Dragging':
            return {
                ...state,
                isDragging: true
            }
        case 'End Dragging':
            return {
                ...state,
                isDragging: false
            }
        default:
            return state
    }
}