import React, { useState } from 'react';
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap';
import { signUp } from '../common/Auth';

const SignUpForm = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhone] = useState('');
  return (
    <Row>
      <Col xs={12}>
        <div id="signup-form-container">
          <h2>Sign Up</h2>
          <Form>
            <FormGroup>
              <FormText>
                Your information is safely encrypted at all times and we do not
                profit from selling out our customers.
              </FormText>
            </FormGroup>
            <FormGroup>
              <Label for="User">User Name *</Label>
              <Input
                type="text"
                name="user"
                id="User"
                placeholder="User Name"
                autoComplete="off"
                onChange={(event) => setUserName(event.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="Email">Email *</Label>
              <Input
                type="email"
                name="email"
                id="Email"
                placeholder="Valid e-mail address"
                onChange={(event) => setEmail(event.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="Password">Password *</Label>
              <Input
                type="password"
                name="password"
                id="Password"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="Phone">Phone Number</Label>
              <Input
                type="tel"
                name="phone"
                id="Phone"
                placeholder="Phone Number"
                onChange={(event) => setPhone(event.target.value)}
              />
            </FormGroup>
            <Button
              color="primary"
              block
              onClick={() => signUp(userName, password, email, phoneNumber)}
            >
              Sign Up
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default SignUpForm;
