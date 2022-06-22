import {useEffect, useState} from 'react';
import axios from 'axios';
import {API_KEY} from '../api/keys';

import styled from 'styled-components';

const loadingState = 'Fetching your photo. Waiting...';

function GetRandom(){
    
    const [photo, setPhoto] = useState(loadingState);

    useEffect(()=>{
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=1`)
            .then(res=>{
                const photoObj = res.data.url;
                setPhoto(photoObj);
            }).catch(err=>{
                console.error(err);
            });
    },[]);

    return(
        <div className='today-photo' >
            <Img src={photo} 
            alt={`RANDOM APOD`}
            >

            </Img>
        </div>
    )
}

export default GetRandom;

const Img = styled.img`
height: 100%;
width: 100%;
`