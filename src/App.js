import React, { useState, useEffect } from 'react';
import { isNull } from 'lodash';
import { Container, Row, Col, Button } from 'reactstrap';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import UserDashboard from './components/UserDashboard';
import './App.css';

// Auth
// import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import { Hub } from 'aws-amplify';
Amplify.configure(aws_exports);

const App  = () => {
  let [user, setUser] = useState(null)
  let [signupCollapsed, setSignupCollapsed] = useState(true);

  useEffect(() => {
    let updateUser = async authState => {
      try {
        let user = await Auth.currentAuthenticatedUser()
        setUser(user)
      } catch {
        setUser(null)
      }
    }
    Hub.listen('auth', updateUser) // listen for login/signup events
    updateUser() // check manually the first time because we won't get a Hub event
    return () => Hub.remove('auth', updateUser) // cleanup
  }, []);
  
  const userValidated = !isNull(user);

  return(
      <div className="App">
        <Container>
          <Row>
            <Col xs={12}>
            <h1>Hiya</h1>
            <hr />
              {
                userValidated ? <UserDashboard user={user} /> : null
              }
              {
                (!userValidated && signupCollapsed) ? <SignInForm /> : null
              }
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              {
                signupCollapsed ? <Button style={{ marginTop: '3em' }} block onClick={() => setSignupCollapsed(false)}>Sign Up</Button> : <SignUpForm />
              }
              {
                !signupCollapsed ? <Button style={{ marginTop: '3em' }} block onClick={() => setSignupCollapsed(true)}>Sign In</Button> : null
              }
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default(App)
