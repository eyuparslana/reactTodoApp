import React, {Component} from "react";
import {Button, Modal} from "reactstrap";


class TodoItemComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showDesc: false,
            isOpen: false
        }

    }


    isExpired = () => {
        let deadline = new Date(this.props.deadline);
        let now = Date.now();
        console.log(deadline);
        console.log(now);
        return now > deadline;
    };

    handleClick = () => {
        this.setState({
            isOpen: true
        })
    };


    handleClose = () => {
        this.setState({
            isOpen: false
        })
    };

    render() {
        return (
            <li onClick={this.handleClick} className="list-group-item">
                <Modal show={true} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

                <i className="far fa-trash-alt float-sm-right"
                   style={{cursor: 'pointer'}}
                   data-toggle=" tooltip" data-placement=" bottom"
                   title=" Delete Todo"/>
                {this.props.name} {(() => {
                if (this.isExpired() && this.props.status === 'Not Completed') {
                    return (<span className="badge badge-pill badge-danger">Expired</span>)
                } else {
                    return null
                }
            })()}
                {(() => {
                    if (this.props.status === 'Completed') {
                        return <span
                            className="text-success float-sm-right pr-2">{this.props.status}</span>;
                    } else {
                        return <span
                            className="text-danger float-sm-right pr-2">{this.props.status}</span>;
                    }
                })()}

            </li>
        );
    }

}

export default TodoItemComponent;