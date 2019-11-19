import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Pagination from 'react-bootstrap/Pagination'
import Button from 'react-bootstrap/Button'
import Trigger from './Trigger'
import Search from './Search'
import Table from './Table'
import AddBook from './AddBook'
import {  Provider } from 'react-redux';
import Page from'./Page'
import store from './store'

class App extends Component {
constructor() {

super();
this.state = {
data:[],
pagination:[],
search: '',
show: false,
book:{},
index:''
};
// this.search = this.search.bind(this);
// this.datatostate = this.datatostate.bind(this);
// this.fetchbook = this.fetchbook.bind(this);
this.bookedit = this.bookedit.bind(this);
this.sendtopage = this.sendtopage.bind(this);
}

sendtopage(e)
{
	this.setState({
search: e,


});

	}

bookedit(book,show,i)
{

this.setState({
show: show,
book: book,
index:i
});
}

datatostate(data)
{
this.setState({
show: false
});
let i= this.state.index;
this.state.data.splice(i, 1, data)
this.setState({   
data: this.state.data
})


}

search(e){
		

if(e != null)
{
this.setState({
search: e
}, () => {
if (this.state.search && this.state.search.length > 1) {
if (this.state.search.length % 2 === 0) {
this.fetchbook()
}
} 
})
}
}

render() {

return (
<div>
<Provider store={store}>
<Search    sendtopage={this.sendtopage} />
<AddBook />

<Trigger  modal={this.state.show} data={this.state.book} index={this.state.index} sendtostate={this.datatostate}/>
<Table  bookedit={this.bookedit}/>
<Page search={this.state.search}/>

</Provider>
</div>
);
}
}

ReactDOM.render(

<App />
,
document.getElementById('ex')
);