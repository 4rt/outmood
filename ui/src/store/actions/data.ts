import { Dispatch } from 'redux';
import { RootAction } from '../../types/common';

export const SET_DATA = 'SET_DATA';

interface SetDataAction extends RootAction {
    type: typeof SET_DATA,
    data: any
}

export const setData = (data: any): SetDataAction => ({
    type: SET_DATA,
    data
});

export const getData = () => (dispatch: Dispatch) => {

    return fetch('todo')
        .then(response => response.json())
        .then(data => dispatch(setData(data)));
}

