import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchbook} from '../Action/postAction'
class Search extends Component {


search(e)
{

this.props.fetchbook(1,e);
this.props.sendtopage(e);

}

render() {
// console.log(this.state.search)

return (

<div>
<input type="text" className="form-control" placeholder="search"
onChange={e => this.search(e.target.value) }/>;
</div>
);
}
}
export default connect(null,{ fetchbook })(Search);
