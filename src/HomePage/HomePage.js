import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Map } from '../MapPage/Map'

const style = {
    width: '600px',
    height: '400px'
};

class HomePage extends React.Component {

    render() {
        return (
            <div className="col-md-6">
                <p>You're logged</p>
                <p>
                    <Link to="/login">Logout</Link>
                </p>

                <div style={style}>
                    <Map key={window.location.key}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {

    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };