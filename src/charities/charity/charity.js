import React from 'react';
import {NavLink} from 'react-router-dom'
import { Col } from 'react-bootstrap';


import './charity.scss';

const product = (props) => {

    return (
        <Col lg={4} md={6}>
            <div className='charity'>
                <ul className='list-unstyled'>
                    <li> <img className='img-charity' src={props.img} alt='img' /> </li>
                    <li className='mt-4 mb-4'> <h3 className="charity-name">{props.name}</h3> </li>
                    <li> <NavLink to='/' className="donate">تبرع الان</NavLink> </li>
                </ul>
            </div>
        </Col>
    )
}


export default product

