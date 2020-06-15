import React, { useState } from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { signIn } from '../common/Auth';

const SignInForm = (props) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    return(
    <Row>
        <Col xs={12}>
            <div id="signin-form-container">
                <h2>Sign In</h2>
                <Form>
                    <FormGroup>
                        <FormText>Your information is safely encrypted at all times and we do not sell your user information.</FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="User">User Name *</Label>
                        <Input type="text" name="user" id="User" placeholder="User Name" autoComplete="off" onChange={event => setUserName(event.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Password">Password *</Label>
                        <Input type="password" name="password" id="Password" placeholder="Password" onChange={event => setPassword(event.target.value)} />
                    </FormGroup>
                    <Button color="primary" block onClick={() => signIn(userName, password)}>Sign In</Button>
                </Form>
            </div>
        </Col>
    </Row>
    )
}

export default (SignInForm);