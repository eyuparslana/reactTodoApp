import React, {Component} from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import '../App.css';


class SignInForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;


        this.setState({
            [name]: value

        });

    };

    render() {
        return (
            <Container className="mx-auto App col-md-3 border border-info mt-lg-5 py-4">
                <h2>Sign In</h2>
                <Form action='/' className="form">
                    <Col>
                        <FormGroup>
                            <Label>Username</Label>
                            <Input
                                type="text"
                                name="username"
                                id="exampleEmail"
                                placeholder="Type your username"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="********"
                            />
                        </FormGroup>
                    </Col>
                    <Button className='btn btn-outline-info btn-light btn-block badge-pill'>Login</Button>
                </Form>
            </Container>
        );

    }
}


export default SignInForm