/* eslint-disable react/prop-types */
import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { signOut } from '../common/Auth';

const UserDashboard = (props) => {
  // const [userName, setUserName] = useState('');
  console.log(props);
  const { user } = props;
  return (
    <Row>
      <Col xs={12}>
        <div id="dashboard-form-container">
          <p>Welcome, {user.username}</p>
          <div>
            <Button onClick={signOut}>Sign out</Button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default UserDashboard;
