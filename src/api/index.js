//1. install axios
//2. import here
//3. perform get requests from here, then export them from this file
//4. be sure to import them in the needed components !

import axios from 'axios';
import {API_KEY} from './keys';

export const getToday = () => {
     axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
            .then(res=>{
                const photoObj = res.data.url; //the photo itself lives here
                //const copyright = res.data.copyright ? ... : null;
                return photoObj;
            }).catch(err=>{
                console.error(err);
            });
}
