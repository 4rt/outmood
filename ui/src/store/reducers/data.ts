import { RootAction } from '../../types/common';
import {
    SET_DATA
} from '../actions/data';

const defaultState: any[] = [];

const data = (state: any[] = defaultState, action: RootAction): any[] => {
    if (action.type === SET_DATA) {
        return [ ...state, ...action.data ]
    } else {
        return state
    }
}

export default data;