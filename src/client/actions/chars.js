/**
 * Created by Antoine on 19/07/2016.
 */
import { _, assoc } from 'ramda'
// import { apiCall, working, LISTS } from './api'

// export const ADD_LIST = 'ADD_LIST';
// export const DEL_LIST = 'DEL_LIST';
export const ADD_CHARS = 'ADD_CHARS';

// export const addList = (list) => ({
//   type: ADD_LIST,
//   list,
// })

// export const delList = id => ({
//   type: DEL_LIST,
//   id,
// })

// export const gotLists = lists => ({
//   type: GOT_LISTS,
//   lists,
// })

export const addChars = chars => ({
	type: ADD_CHARS,
	chars,
})

// export const deleteList = (id) => (dispatch) => {
//   dispatch(working(LISTS));
//   return (apiCall({ method: 'DELETE' })('list/'.concat(id))(r => dispatch(delList(r.id))))
// }

// export const pushList = (newList) => (dispatch) => {
//   const req = {
//     headers: { 'Content-Type': 'application/json' },
//     method: 'POST',
//     body: JSON.stringify({ 'todo': { 'label': newList } }),
//   }
//   dispatch(working(LISTS));
//   return apiCall(req)('lists')(l => dispatch(addList(l)))
// }

// export const getLists = () => (dispatch) => {
//   dispatch(working(LISTS));
//   apiCall({ method: 'GET' })('lists')(lists => dispatch(gotLists(lists)));
// }
