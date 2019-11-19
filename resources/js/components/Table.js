import React, { Component } from 'react';
import Pagination from 'react-bootstrap/Pagination'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import { fetchbook} from '../Action/postAction'
            import PropTypes from 'prop-types'

class Table extends Component {

constructor(props) {

super(props);
this.state = {
index:''
};

}
componentWillMount() {
this.props.fetchbook();
}
componentWillReceiveProps(nextProps)
{
	if( this.props.book !== nextProps.book )
	{
				// console.log(this.props.book.i)
self = this;
self.props.books.splice(this.state.index, 1, nextProps.book.book)

	}
	if(this.props.newbook !== nextProps.newbook )
	{
		self = this;
		// console.log(nextProps.newbook)
		self.props.books.unshift(nextProps.newbook)

	}
}
// UNSAFE_componentWillReceiveProps(nextProps){



// }
// fetchbook(n)
// {
// this.props.fetchbook(n);
// }
setTriger(b,i)
{
	this.setState({
index:i,
})
this.props.bookedit(b,true,i);

}

render() {

let x = this.props.books;

const listItems = x.map((book,i) =>
<tr  key={++i}>
<td>{i}</td>
<td>{book.title}</td>
<td>{book.description}</td>
<td>  
<Button
bsstyle="primary"
bssize="large"
onClick={() => this.setTriger(book,--i)}
> 
Edit
</Button>

</td>
</tr>
);


return (

<div>
<table className="table table-bordered table-sm">
<thead>
<tr>
<th>SN</th>
<th>Title</th>
<th>Description</th>
<th>action</th>

</tr>
</thead>
<tbody>
{ listItems }
</tbody>
</table>
</div>
);
}
}
Table.propTypes =
{
	fetchbook:PropTypes.func.isRequired,
	books:PropTypes.array.isRequired,
	book:PropTypes.object,
	newbook:PropTypes.object,

}
const mapStateToProps = state =>
({
books: state.Books.books,
 book: state.Books.book,
 newbook :state.Books.booknew
});
export default connect(mapStateToProps,{ fetchbook })(Table);