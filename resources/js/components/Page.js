import React, { Component } from 'react';
import Pagination from 'react-bootstrap/Pagination'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import { fetchbook} from '../Action/postAction'

class Page extends Component {
    constructor(props){
            super(props);
            this.state = {
            search: props.search,
    
            };
        }
	UNSAFE_componentWillReceiveProps(nextProps){

	this.setState({

	search: nextProps.search,

	})

	}

componentWillMount() {
this.props.fetchbook();
}
get(page)
{
this.props.fetchbook(page,this.state.search);
}
render() {

let active = this.props.books.current_page;
let items = [];
let search='';
let x = this.props.data;

for (let number = 1; number <= this.props.books.per_page ; number++) {
items.push(
<Pagination.Item  key={number} active={number === active} onClick={this.get.bind(this, number)}>
{number}
</Pagination.Item >,
);
}

return (

<div>
<Pagination>{items}</Pagination>
</div>
);
}
}

const mapStateToProps = state =>
({
books: state.Books.page,
});
export default connect(mapStateToProps,{ fetchbook })(Page);