import axios from 'axios';
import {TODOS_REQUEST, TODOS_SUCCESS ,TODOS_FAILED, API_URL } from '../constants/todosConstants';
 

const todosRequestAction = () => {
     return {
          type: TODOS_REQUEST
     }
}

const todosSuccessAction = (todos) => {
     return {
          type: TODOS_SUCCESS,
          payload: todos
     }
}

const todosErrorAction = (error) => {
     return {
          type: TODOS_FAILED,
          payload: error
     }
}


export const todosGetData = () => {
     return async (dispatch) => {
          dispatch(todosRequestAction())
          try {
               let res = await axios.get(API_URL);
               dispatch(todosSuccessAction(res.data))
          } catch (error) {
               dispatch(todosErrorAction(error))
          }
     }
}
