import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './helpers/history';
import { alertActions } from './actions/alert.action';
import { HomePage } from './HomePage/HomePage';
import { LoginPage } from './LoginPage/LoginPage';
import { RegisterPage } from './RegisterPage/RegisterPage';
import { PrivateRoute } from './components/PrivateRoute';

class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert, maps } = this.props;
    return (
        <div className="jumbotron">
          <div className="container">
            <aside className="col-sm-3">
              <ul>
                {maps.loading && <em>Loading maps...</em>}
                {maps.error && <span className="text-danger">ERROR: {maps.error}</span>}
                {maps.items &&
                  maps.items.maps.map((map, index) =>
                      <li>
                        {new Date(map.date).toLocaleString()}
                      </li>
                  )
                }
              </ul>
            </aside>
            <div className="col-sm-8">
              {alert.message &&
              <div className={`alert ${alert.type}`}>{alert.message}</div>
              }
              <Router history={history}>
                <div>
                  <PrivateRoute exact path="/" component={HomePage} />
                  <Route path="/login" component={LoginPage} />
                  <Route path="/register" component={RegisterPage} />
                </div>
              </Router>
            </div>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert, maps } = state;
  return {
    alert,
    maps
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };