            import Button from 'react-bootstrap/Button'
            import Modal from 'react-bootstrap/Modal'
            import React, { Component } from 'react';
            import ReactDOM from 'react-dom';
            import PropTypes from 'prop-types'
            import { connect } from 'react-redux';
            import { editbook } from '../Action/postAction'
            class Trigger extends Component{
            constructor(props){
            super(props);
            this.state = {
            show: props.modal,
            title: props.title,
            desc:props.desc,
            id:props._id,
            i: props.index
            };
            this.change = this.change.bind(this);
            this.update = this.update.bind(this);

            }
            UNSAFE_componentWillReceiveProps(nextProps){
            if(this.state.show!==nextProps.modal){
            this.setState({
            show: nextProps.modal,
            title: nextProps.data.title,
            desc:nextProps.data.description,
            id:nextProps.data._id,
            i:nextProps.index
            })
            }
            }

            change(event)
            {

            this.setState({
            [event.target.name]: event.target.value
            })
            }
            update()
            {
            this.props.editbook(this.state)
            this.setState({ show: false})
            }

            render(){
            let close = () => this.setState({ show: false});


            return (
            <div className="modal-container">
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
            <input type='text' className="form-control" name="title" value={this.state.title } onChange={this.change} />;
            <label>Description</label>
            <textarea type='text' className="form-control" name="desc" defaultValue={this.state.desc}  onChange={this.change} ></textarea>
            </form>
            </Modal.Body>
            <Modal.Footer>
            <Button bsstyle="primary"  onClick={this.update}>Edit </Button>
            <Button onClick={close}>Close</Button>
            </Modal.Footer>
            </Modal>
            </div>
            );
            }
      }

export default connect(null,{ editbook })(Trigger);
