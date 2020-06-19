import React, { useState, useEffect } from 'react';
import { isNull } from 'lodash';
import { Container, Row, Col, Button } from 'reactstrap';
import Amplify, { Auth, Hub } from 'aws-amplify';

import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import UserDashboard from './components/UserDashboard';
import awsExports from './aws-exports';

import './App.css';

Amplify.configure(awsExports);

const App = () => {
  const [user, setUser] = useState(null);
  const [signupCollapsed, setSignupCollapsed] = useState(true);

  useEffect(() => {
    const updateUser = async () => {
      try {
        const currentAuthenticatedUser = await Auth.currentAuthenticatedUser();
        setUser(currentAuthenticatedUser);
      } catch {
        setUser(null);
      }
    };
    Hub.listen('auth', updateUser); // listen for login/signup events
    updateUser(); // check manually the first time because we won't get a Hub event
    return () => Hub.remove('auth', updateUser); // cleanup
  }, []);

  const userValidated = !isNull(user);

  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={12}>
            <h1>Hiya</h1>
            <hr />
            {userValidated ? <UserDashboard user={user} /> : null}
            {!userValidated && signupCollapsed ? <SignInForm /> : null}
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            {signupCollapsed ? (
              <Button
                style={{ marginTop: '3em' }}
                block
                onClick={() => setSignupCollapsed(false)}
              >
                Sign Up
              </Button>
            ) : (
              <SignUpForm />
            )}
            {!signupCollapsed ? (
              <Button
                style={{ marginTop: '3em' }}
                block
                onClick={() => setSignupCollapsed(true)}
              >
                Sign In
              </Button>
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
