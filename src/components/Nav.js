import {Link} from 'react-router-dom';

//I am SEPERATE from ROUTES because I want to have some styling done HERE !

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

export default Nav;