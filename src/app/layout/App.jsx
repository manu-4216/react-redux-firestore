import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import EventForm from '../../features/event/EventForm/EventForm';
import HomePage from '../../features/home/HomePage';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container className="main">
          <Route exact path="/" strict component={HomePage} />
          <Route path="/events" component={EventDashboard} />
          <Route path="/event/:id" component={EventDetailedPage} />
          <Route path="/people" component={PeopleDashboard} />
          <Route path="/profile/:id" component={UserDetailedPage} />
          <Route path="/settings" component={SettingsDashboard} />
          <Route path="/createEvent" component={EventForm} />
        </Container>
      </Fragment>
    );
  }
}

export default App;
