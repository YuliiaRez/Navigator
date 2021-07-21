import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
} from 'react-router-dom';
import Greeting from './../../components/Greeting';
import Counter from '../../components/Counter';
import Calendar from '../../components/Calendar';
import Stopwatch from '../../components/Stopwatch';


function ComponentsPage() {

    const { path, url } = useRouteMatch();

    return (
        <Router>
            <ul>
                <li><Link to={`${url}/greeting`}>Greeting</Link></li>
                <li><Link to={`${url}/counter`}>Counter</Link></li>
                <li><Link to={`${url}/calendar`}>Calendar</Link></li>
                <li><Link to={`${url}/stopwatch`}>Stopwatch</Link></li>
            </ul>
            <div>
                <Switch>
                    <Route path={`${path}/greeting`} component={Greeting} />
                    <Route path={`${path}/counter`} component={Counter} />
                    <Route path={`${path}/calendar`} component={Calendar} />
                    <Route path={`${path}/stopwatch`} component={Stopwatch} />
                </Switch>
            </div>
        </Router>
    )
}

export default ComponentsPage
