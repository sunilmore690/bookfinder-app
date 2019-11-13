import axios from 'axios'
import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS
} from './actionTypes'

export const requestBooks = (query) => ({
  type: REQUEST_BOOKS,
  query
})

export const receiveBooks = ({status, payload }) => ({
  type: RECEIVE_BOOKS,
  status,
  payload
})

export const getBooks = (query,page=1) => {
  let startIndex = 10 * parseInt(page) - 10;
  return function (dispatch) {
  	dispatch(requestBooks(query));
  	const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}`;
  	return axios.get(url)
    .then(response => {
      dispatch(receiveBooks({
        status: 'success',
        payload: response.data
      }))
    })
    .catch(error => {
      dispatch(receiveBooks({
        status: 'error',
        payload: error
      }))
    })
  };
}