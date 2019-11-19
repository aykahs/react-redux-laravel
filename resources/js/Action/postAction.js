import { FETCH_BOOKS, NEW_BOOK, EDIT_BOOK } from './types'

export const  fetchbook = (page,s) => dispatch =>
{
	
	if (typeof page === 'undefined') {
 page = 1;
}
if (typeof s === 'undefined') {
 s = '';
}
fetch(`api/books?page=${page}&book=${s}`, {  
method: 'GET',
headers: {
'Accept': 'application/json',
'Content-Type': 'application/json',
}}
)
.then(response => {
return response.json();
})
.then(data => 
{
	dispatch(
{
	type:FETCH_BOOKS,
	Payload: data.books 
})

}


);
};

export const  editbook = (data) => dispatch =>
{
let i = data.i;
console.log(data)
fetch(`api/book/${data.id}`, {  
method: 'PUT',
headers: { "Content-Type": "application/json; charset=utf-8" },

body: JSON.stringify({
title:data.title,
desc:data.desc
}),
},).then(response => {

return response.json();

})
.then(data=> {
let book={
	book: data.book,
	i: i
}
dispatch(
{
	type:EDIT_BOOK,
	Payload: book 
})
// console.log(data.book);
});

};

export const  addbook = (data) => dispatch =>
{
// let i = data.i;
// console.log(data)
fetch(`api/book`, {  
method: 'POST',
   headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
body: JSON.stringify({
title:data.title,
desc:data.desc
}),
},).then(response => {

return response.json();

})
.then(data=> {
	// console.log(data)


dispatch(
{
	type:NEW_BOOK,
	Payload: data 
})
// console.log(data.book);
});

};
