import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Map } from '../MapPage/Map'
import {mapActions} from "../actions/map.action";
import {Marker} from "google-maps-react";

const style = {
    width: '600px',
    height: '400px'
};

class HomePage extends React.Component {

    componentDidMount() {
        this.props.dispatch(mapActions.getAll());
        this.position();
        setInterval(
            this.position.bind(this),
            5000
        );
    }

    position(){
        navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
    }

    showPosition(position) {
        this.props.dispatch(mapActions.Actual({lat: position.coords.latitude, lng: position.coords.longitude, date: new Date()}));
    };

    render() {
        return (
            <div>
                <div className="col-md-6  col-sm-offset-2">
                    <p>You're logged</p>
                    <p>
                        <Link to="/login">Logout</Link>
                    </p>

                    <div style={style}>
                        <Map key={window.location.key}/>
                    </div>
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
        users,
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };