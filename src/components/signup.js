import React, {Component} from 'react';
import '../App.css'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import axios from "axios";
import {apiUrl} from '../App';

class SignUpForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            registerSuccess: false
        }
    }

    handleChange = (e) => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
        let url = apiUrl + "/users/register";
        console.log(url);
        const options = {
            url: 'http://localhost:8000/users/register',
            data: {
                username: "eyup",
                password: "testpwd"
            },
            method: 'post',
        };

        axios.request(options).then(response => console.log(response))
            .catch(error => console.error(error))

    };

    handleClick = (e) => {
        console.log("TEST")
    };

    onSubmit = (e) => {

    };

    render() {
        return (
            <Container className="App justify-content-center col-md-3 border border-info mt-lg-5 py-4">
                <h2>Sign Up</h2>
                <Form className="form" onSubmit={this.onSubmit}>
                    <Col>
                        <FormGroup>
                            <Label>Username</Label>
                            <Input
                                onChange={this.handleChange}
                                type="text"
                                name="username"
                                id="exampleUsername"
                                placeholder="Type your username"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                onChange={this.handleChange}
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="********"
                            />
                        </FormGroup>
                    </Col>
                    <Button className='btn btn-outline-info btn-light btn-block badge-pill'>Register</Button>
                </Form>
            </Container>
        );

    }
}


export default SignUpForm;