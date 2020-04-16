import React, {Component} from "react";
import TodoConsumer from "../context";
import Todo from "./TodoComponent";


class Home extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <TodoConsumer>
                {
                    value => {
                        const {todoLists} = value;
                        return (
                            <div className='app-container col-md-6 border border-info mt-lg-5 py-4'>
                                {
                                    todoLists.map(todoList => {
                                        return (
                                            <Todo
                                                key={todoList.id}
                                                id={todoList.id}
                                                name={todoList.name}
                                                user={todoList.userId}
                                            />
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                }
            </TodoConsumer>
        );
    }
}

export default Home;