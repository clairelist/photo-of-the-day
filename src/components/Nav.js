//BE SURE to import LINK from react-router-dom
//!?::--> or... create a seperate NAV component ?

import {Link} from 'react-router-dom';

function Nav(){
    return(
        <div>
        <Link to='/' >Get TODAY'S photo!</Link>
        <Link to='/getall' >Get ALL photos!</Link>
        <Link to='/getrand' >Get a RANDOM photo!</Link>
        <Link to='/getnext'>BROWSE photos in RANGE!</Link>
        </div>
    )
}