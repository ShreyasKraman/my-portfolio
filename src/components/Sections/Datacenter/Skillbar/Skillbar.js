import React from 'react';

import Aux from '../../../../hoc/Auxillary/Auxillary';

import classes from './Skillbar.css';
import {Row,Col} from 'react-bootstrap';

const Skillbar = (props) => {
    return(
        <Aux>
            <div className={classes.Skillbar}>
                <Row>
                    <Col xs>
                        <h6>{props.skill}</h6>
                    </Col>
                </Row>
            </div>
        </Aux>
    );
};

export default Skillbar;