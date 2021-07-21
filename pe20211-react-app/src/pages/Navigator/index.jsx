import React from 'react';
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';


function Navigator() {

    return (
        <div className='Navigator'>
            <ul>
                <li> <Link to={'/'}>Homepage</Link></li>
                <li> <Link to={'/componenets'}>Components</Link></li>


            </ul>
        </div>
    )
}

export default Navigator
