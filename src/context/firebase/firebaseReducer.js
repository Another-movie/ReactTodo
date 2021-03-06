import { SHOW_LOADER, ADD_NOTE, FETCH_NOTES, REMOVE_NOTE } from "../types"

const handlers = {
    [SHOW_LOADER]: state => ({...state, loading:true}),
    [ADD_NOTE] : (state, {payload}) => ({
        ...state,
        notes:[...state.notes, payload],
        loading: false
    }),
    [FETCH_NOTES] : (state, {payload}) => ({...state, notes: payload, loading: false}),
    [REMOVE_NOTE] : (state, {payload}) => ({
        ...state, 
        notes: state.notes.filter(note=>note.id!==payload)
    }),

    DEFAULT: state => state
  }

export const firebaseReduces = (state,action) => {
    const handle = handlers[action.type] || action.DEFAULT
    return handle(state,action)
}