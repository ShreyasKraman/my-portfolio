import React from 'react';

import Aux from '../../../hoc/Auxillary/Auxillary';
import ProfilePic from './Profilepic/Profilepic';
import Summary from './Summary/Summary';

import {Row,Col} from 'react-bootstrap';

const Aboutme = () => {
    return(
        <Aux>
            <Row>
                <Col>
                    <Summary/>
                </Col>
                <Col>
                    <ProfilePic/>
                </Col>
            </Row>
        </Aux>
    );
}

export default Aboutme;