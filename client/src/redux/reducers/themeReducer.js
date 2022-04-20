import { CHANGE_THEME } from "../types/theme.types";

export default function themeReducer(state=false, action){
const {type} = action
    switch (type) {
        case CHANGE_THEME:
            return !state;
        default:
            return state
    }
}
