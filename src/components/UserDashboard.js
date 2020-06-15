import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { signOut } from '../common/Auth';

const UserDashboard = (props) => {
    // const [userName, setUserName] = useState('');
    console.log(props);
    return(
    <Row>
        <Col xs={12}>
            <div id="dashboard-form-container">
                <p>Welcome, {props.user.username}</p>
                <div>
                    <Button onClick={signOut}>Sign out</Button>
                </div>
            </div>
        </Col>
    </Row>
    )
}

export default (UserDashboard);