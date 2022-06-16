import {useEffect, useState} from 'react';
import axios from 'axios';
import {API_KEY} from '../api/keys'

const loadingState = 'Fetching your photo. Waiting...';

export function GetToday(){
    const [photo, setPhoto] = useState(loadingState);

    useEffect(()=>{
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
            .then(res=>{
                const photoObj = res.data.url; //the photo itself lives here
                //const copyright = res.data.copyright ? ... : null;
                setPhoto(photoObj);
            }).catch(err=>{
                console.error(err);
            });
    },[]);

    return(
        <div className='today-photo'>
            <img src={photo} alt={`Nasa APOD for today`}></img>
        </div>
    )
}

export default GetToday;

//install styled react component so we can set this photo as the background image
//and be sure to change text opacity of our Nav links !