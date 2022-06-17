import {Route, Routes} from 'react-router-dom';
//don't forget to import a real element to pass to our element prop!
import GetToday from './GetToday.js';
import GetAll from './GetAll.js';

function Routing () {
    return(
        <Routes>
            <Route exact path='/' element={<GetToday />} />
            <Route exact path='/getall' element={<GetAll />} />
        </Routes>
    )
}

export default Routing;