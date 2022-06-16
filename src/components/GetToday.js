import {useEffect, useState} from 'react';
import axios from 'axios';
import {API_KEY} from '../api/keys';

import styled from 'styled-components';

const loadingState = 'Fetching your photo. Waiting...';

function GetToday(){
    
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
        <div className='today-photo' >
            <Img src={photo} 
            alt={`Nasa APOD for today`}
            >

            </Img>
        </div>
    )
}

export default GetToday;

//TODO:: GET RID OF WEIRD WHITE BOX! ADD TEXT OVERLAY!

// position:absolute;
//   top:0px;
//   right:0px;
//   bottom:0px;
//   left:0px;

const Img = styled.img`
height: 100%;
`