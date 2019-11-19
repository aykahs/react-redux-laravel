import { FETCH_BOOKS, NEW_BOOK, EDIT_BOOK } from '../Action/types'
const initialState =
{
	books:[],
	book:{},
	page:[],
	booknew:{},
}

export default function(state = initialState, action)
{
	switch(action.type)
	{
		case FETCH_BOOKS:
		return {

			...state,
			books: action.Payload.data,
			page: action.Payload
		};
		case NEW_BOOK:
		return {

			...state,
			booknew: action.Payload
			
		};
		case EDIT_BOOK:
				// console.log(action.Payload)

		return {

			...state,
			book: action.Payload
			
		};
		default:
		return state;
	}
}