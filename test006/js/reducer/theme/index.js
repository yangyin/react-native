import Types from './../../action/type';
import action from '../../action';

const initialState = {
    theme:'blue'
}

export default (state=initialState,action) =>{
    switch(action.type) {
        case Types.THEME_CHANGE:
            return{ ...state,theme:action.theme};
        default:
            return state;
    }
}