import React, {Component} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TodoConsumer from "../context";
import TodoItemComponent from "./TodoItemComponent";
import Button from "reactstrap/es/Button";
import {Form} from "reactstrap";


class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        }

    }

    handleClick = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    };

    render() {
        return (
            <div className="card p-5">
                <div className="card-header" data-toggle="tooltip" data-placement="bottom" title="Show Todos"
                     onClick={this.handleClick}>
                    {this.props.name}
                    <i className=" far fa-trash-alt float-sm-right" style={{cursor: 'pointer'}}
                       data-toggle=" tooltip" data-placement=" bottom" title=" Delete Todo List"/>
                    <i className=" fa fa-plus float-sm-right pr-2" aria-hidden="true" style={{cursor: 'pointer'}}
                       data-toggle=" tooltip" data-placement=" bottom" title=" Add New Todo List"/>
                </div>

                {this.state.isVisible ? <TodoConsumer>
                    {
                        value => {
                            const {todoItems} = value;
                            const filteredTodoItems = todoItems.filter(todoItem => {
                                return todoItem.todoListId === this.props.id;
                            });

                            return (
                                <div className='border'>
                                    <div className="card">
                                        <ul className="list-group">
                                            {
                                                filteredTodoItems.map(todoItem => {
                                                    return (
                                                        <TodoItemComponent
                                                            key={todoItem.id}
                                                            id={todoItem.id}
                                                            name={todoItem.name}
                                                            description={todoItem.description}
                                                            status={todoItem.status}
                                                            deadline={todoItem.deadline}
                                                            todoListId={todoItem.todoListId}
                                                            dependsOn={todoItem.dependsOn}
                                                        />
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            )
                        }
                    }
                </TodoConsumer> : null}
            </div>
        );
    }

}

export default Todo;