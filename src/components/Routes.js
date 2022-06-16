import {Route, Routes} from 'react-router-dom';
//don't forget to import a real element to pass to our element prop!
import GetToday from './GetToday.js';

function Routing () {
    return(
        <Routes>
            <Route exact path='/' element={<GetToday />} />
        </Routes>
    )
}

export default Routing;