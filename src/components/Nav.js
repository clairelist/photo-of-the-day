import {Link} from 'react-router-dom';
import styled from 'styled-components';

//I am SEPERATE from ROUTES because I want to have some styling done HERE !

function Nav(){
    return(
        <Div>
        <Link to='/' > Get TODAY'S photo! </Link>
        <Link to='/getall' > Get ALL photos! </Link>
        <Link to='/getrand' > Get a RANDOM photo!</Link>
        <Link to='/getnext'> BROWSE photos in RANGE! </Link>
        </Div>
    )
}

export default Nav;

const Div = styled.div`
flex-direction: columns;
justify-content: space-evenly;
a{
    color: white;
    justify-content: space-around;
}
`