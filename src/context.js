import * as React from "react";
import {Component} from "react";


const TodoContext = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                loginUser: {
                    id: action.payload.id,
                    username: action.payload.username
                }
            };
        case "LOGOUT_USER":
            return {
                ...state,
                loginUser: {
                    id: "",
                    username: ""
                }
            };
        default:
            return state
    }
}

export class TodoProvider extends Component {


    constructor(props) {
        super(props);
        this.state = {
            todoLists : [
                {
                    id: 1,
                    name: "School",
                    userId: 5
                },
                {
                    id: 2,
                    name: "Home",
                    userId: 5
                },
                {
                    id: 3,
                    name: "Work",
                    userId: 5
                },

            ],
            todoItems : [
                {
                    id: 1,
                    name: "Test Todo Item",
                    description: "Test Todo Item Desc",
                    deadline: "2020-04-15",
                    status: "Not Completed",
                    todoListId: 2,
                    dependsOn: null,
                },
                {
                    id: 2,
                    name: "Test Todo Item2",
                    description: "Test Todo Item Desc2",
                    deadline: "2020-04-20",
                    status: "Completed",
                    todoListId: 2,
                    dependsOn: 1,
                },
                {
                    id: 3,
                    name: "Test Todo Item3",
                    description: "Test Todo Item Desc3",
                    deadline: "2020-04-20",
                    status: "Not Completed",
                    todoListId: 3,
                    dependsOn: null,
                },
                {
                    id: 4,
                    name: "Test Todo Item4",
                    description: "Test Todo Item Desc4",
                    deadline: "2020-04-13",
                    status: "Completed",
                    todoListId: 1,
                    dependsOn: 3,
                }
            ],
            dispatch: action => {
                this.setState(state => reducer(state, action))
            }
        }
    }

    render() {
        return (
            <TodoContext.Provider value = {this.state}>
                {this.props.children}
            </TodoContext.Provider>
        );
    }
}
const TodoConsumer = TodoContext.Consumer;

export default TodoConsumer;

