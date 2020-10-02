import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';

import * as actions from '../store/actions/index';
import Header from './header/header'
import Charity from './charity/charity';
import Footer from './footer/footer';
import Spinner from '../UI/spinner/spinner'
import './charities.scss';

class Charities extends Component {

    componentDidMount() {
        this.props.initCharities();
    }

    render() {

        // Processing and Display Data

        let charities = <Spinner />
        if (!this.props.loading) {
            charities = this.props.charities.slice(0, 12).map((charity, index) => (
                <Charity
                    key={index}
                    name={charity.Name}
                    img={charity.Logo} />
            ))
        }

        return (
            <div className='charities'>
                <Container>
                    <div className='charities-container'>
                        <Header />
                        <div className='charities-child'>
                            <h1>الجمعيات الخيرية</h1>
                            <Row>
                                {charities}
                            </Row>
                        </div>
                        <Footer />
                    </div>
                </Container>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        charities: state.charities,
        loading: state.loading
    }
}


const mapDispatchToProps = dispatch => {
    return {
        initCharities: () => dispatch(actions.initCharities())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Charities)


