import Types from './../../action/types'


const initivalState = {
    theme:'red'
}

export default function onAction(state=initivalState,action) {
    switch(action.type) {
        case Types.THEME_CHANGE:
            return { ...state,theme:action.theme}
        
            default:
                return state;
    }
}