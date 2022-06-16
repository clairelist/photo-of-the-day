import {Route, Routes} from 'react-router-dom';
//don't forget to import a real element to pass to our element prop!

function Routing () {
    return(
        <Routes>
            <Route exact path='path' element={<Element />} />
        </Routes>
    )
}

export default Routing;