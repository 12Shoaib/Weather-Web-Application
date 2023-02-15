import {atom} from 'recoil';

export const inputValue = atom({
    key:'Captured',
    default:[]
})

export const apiDetails = atom({
    key:'fetched',
    default:[]
})