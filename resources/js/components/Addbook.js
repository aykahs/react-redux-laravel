            import Button from 'react-bootstrap/Button'
            import Modal from 'react-bootstrap/Modal'
            import React, { Component } from 'react';
            import ReactDOM from 'react-dom';
             import { connect } from 'react-redux';
            import { addbook } from '../Action/postAction'
            import SimpleReactValidator from 'simple-react-validator';

            class Addbook extends Component{
            constructor(props){
            super(props);
                self = this;
  self.validator = new SimpleReactValidator();

            this.state = {
            show: false,
            title: '',
            desc:'',
            };
            this.change = this.change.bind(this);

            }
          
// componentWillMount: function() {
//   this.validator = new SimpleReactValidator();
// },
            change(event)
            {

            this.setState({
            [event.target.name]: event.target.value
            })  




            }
            submit()
            {
      
            // if (self.validator.allValid()) {
            self.props.addbook(self.state);

            self.setState({ 
                  show: false,
                  title:'',
                  desc:'',
            })
            // }
            // else {
            // self.validator.showMessages();
            //   self.forceUpdate();

            // }   

            }
            render(){
            let close = () => this.setState({ show: false});
            let open = () => this.setState({ show: true});


            return (

            <div className="modal-container">
             <Button onClick={open}>Add</Button>

            <Modal
            show={this.state.show}
            onHide={close}
            container={this}
            aria-labelledby="contained-modal-title"
            >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Edit Recipe</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form className="form-group">
            <label>Title</label>
            <input type='text' className="form-control" name="title" value={this.state.title } onChange={this.change} />
            {this.validator.message('title', this.state.title, 'required')}
            <label>Description</label>
            <textarea type='text' className="form-control" name="desc" defaultValue={this.state.desc}  onChange={this.change} ></textarea>
                        {this.validator.message('desc', this.state.desc, 'required')}

            </form>
            </Modal.Body>
            <Modal.Footer>
            <Button bsstyle="primary"  onClick={this.submit}>Edit Recipe</Button>
            <Button onClick={close}>Close</Button>
            </Modal.Footer>
            </Modal>
            </div>
            );
            }
            // Addbook.PropTypes =
            // {

            // }
            }
            // export default Addbook;
            export default connect(null,{ addbook })(Addbook);